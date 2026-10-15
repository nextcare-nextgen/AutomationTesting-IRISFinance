import * as assert from 'assert';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import {
    FINANCE_FIELD_MAPPINGS,
    JsonObject,
    loadAndValidateFinanceArtifacts,
    mapFinanceData,
    readJsonArtifact,
    resolveFinanceArtifactPaths,
    setupFinanceOrchestratorData,
    validatePolicyPool,
    writeMappedFinanceData,
} from '../globalSetupFinanceData';

const NOW = new Date('2026-10-07T08:00:00.000Z');

function writeJson(filePath: string, value: unknown, bom = false): void {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(
        filePath,
        `${bom ? '\uFEFF' : ''}${JSON.stringify(value, null, 2)}\n`,
        'utf8',
    );
}

function financeDataFixture(): JsonObject {
    const data: JsonObject = {
        _metadata: {
            schemaVersion: 2,
            sourceEnvironment: 'test-uae',
            generatedAt: NOW.toISOString(),
        },
    };
    for (const mapping of FINANCE_FIELD_MAPPINGS) {
        const source = data[mapping.sourceKey] as JsonObject | undefined;
        const sourceObject = source ?? {};
        sourceObject[mapping.sourceField] = `generated-${mapping.sourceKey}-${mapping.sourceField}`;
        data[mapping.sourceKey] = sourceObject;
    }

    const smoke = data['smokeTest-001'] as JsonObject;
    const reconciliation = data['accountReconcilation-004'] as JsonObject;
    smoke.payer = reconciliation.payerValue;
    smoke.Account = reconciliation.Account;

    const transactionOne = data['accountTransaction-001'] as JsonObject;
    const transactionTwo = data['accountTransaction-002'] as JsonObject;
    transactionTwo.payer = transactionOne.payer;
    transactionTwo.Account = transactionOne.Account;
    transactionTwo.type = transactionOne.type;

    return data;
}

function artifactFixture(): {
    policyPool: JsonObject;
    financeUaePool: JsonObject;
    financeData: JsonObject;
} {
    return {
        policyPool: {
            lastUpdated: NOW.toISOString(),
            uae: [{
                policyNumber: 'fixture-policy',
                cardNumber: 'fixture-card',
                createdAt: NOW.toISOString(),
            }],
        },
        financeUaePool: {
            schemaVersion: 2,
            lastUpdated: NOW.toISOString(),
            records: [{
                schemaVersion: 2,
                sourceEnvironment: 'test-uae',
                createdAt: NOW.toISOString(),
            }],
        },
        financeData: financeDataFixture(),
    };
}

function writeArtifacts(environmentRoot: string, fixture = artifactFixture()): void {
    const financeDirectory = path.join(environmentRoot, 'finance');
    writeJson(path.join(financeDirectory, 'policyPool.json'), fixture.policyPool, true);
    writeJson(path.join(financeDirectory, 'financeUaePool.json'), fixture.financeUaePool);
    writeJson(path.join(financeDirectory, 'financeData.json'), fixture.financeData);
}

function expectFailure(action: () => unknown, pattern: RegExp): void {
    assert.throws(action, pattern);
}

function validatePathResolution(root: string): void {
    const explicit = resolveFinanceArtifactPaths(root, {
        ORCHESTRATOR_ENV: 'test-uae',
        ORCHESTRATOR_ARTIFACT_DIR: path.join(root, 'explicit'),
        ORCHESTRATOR_PATH: path.join(root, 'ignored'),
    });
    assert.strictEqual(explicit.environmentRoot, path.resolve(root, 'explicit'));

    const orchestratorPath = resolveFinanceArtifactPaths(root, {
        ORCHESTRATOR_ENV: 'test-uae',
        ORCHESTRATOR_PATH: path.join(root, 'orchestrator'),
    });
    assert.strictEqual(
        orchestratorPath.environmentRoot,
        path.resolve(root, 'orchestrator', 'output', 'test-uae'),
    );

    const local = resolveFinanceArtifactPaths(root, { ORCHESTRATOR_ENV: 'test-uae' });
    assert.strictEqual(
        local.environmentRoot,
        path.resolve(root, 'orchestrator-data', 'test-uae'),
    );
    assert.strictEqual(local.financeDirectory, path.join(local.environmentRoot, 'finance'));
}

function validateArtifactFailures(root: string): void {
    const environmentRoot = path.join(root, 'artifacts');
    const paths = resolveFinanceArtifactPaths(root, {
        ORCHESTRATOR_ENV: 'test-uae',
        ORCHESTRATOR_ARTIFACT_DIR: environmentRoot,
    });
    const environment = {
        ORCHESTRATOR_ENV: 'test-uae',
        FINANCE_UAE_MAX_AGE_HOURS: '168',
    };

    expectFailure(
        () => loadAndValidateFinanceArtifacts(paths, environment, NOW.getTime()),
        /missing: policyPool\.json/,
    );

    writeArtifacts(environmentRoot);
    assert.doesNotThrow(
        () => loadAndValidateFinanceArtifacts(paths, environment, NOW.getTime()),
    );

    fs.writeFileSync(paths.policyPool, '{not-json', 'utf8');
    expectFailure(() => readJsonArtifact(paths.policyPool), /malformed JSON/);

    fs.writeFileSync(paths.policyPool, ' \n', 'utf8');
    expectFailure(() => readJsonArtifact(paths.policyPool), /is empty/);

    let fixture = artifactFixture();
    fixture.financeUaePool.schemaVersion = 1;
    writeArtifacts(environmentRoot, fixture);
    expectFailure(
        () => loadAndValidateFinanceArtifacts(paths, environment, NOW.getTime()),
        /financeUaePool\.schemaVersion/,
    );

    fixture = artifactFixture();
    (fixture.financeData._metadata as JsonObject).sourceEnvironment = 'uae';
    writeArtifacts(environmentRoot, fixture);
    expectFailure(
        () => loadAndValidateFinanceArtifacts(paths, environment, NOW.getTime()),
        /sourceEnvironment must be test-uae/,
    );

    fixture = artifactFixture();
    (fixture.financeData._metadata as JsonObject).generatedAt = '2026-09-01T00:00:00.000Z';
    writeArtifacts(environmentRoot, fixture);
    expectFailure(
        () => loadAndValidateFinanceArtifacts(paths, environment, NOW.getTime()),
        /is stale/,
    );

    fixture = artifactFixture();
    delete (fixture.financeData['accountTransaction-001'] as JsonObject).TXNID;
    writeArtifacts(environmentRoot, fixture);
    expectFailure(
        () => loadAndValidateFinanceArtifacts(paths, environment, NOW.getTime()),
        /accountTransaction-001\.TXNID/,
    );

    fixture = artifactFixture();
    const transactionTwo = fixture.financeData['accountTransaction-002'] as JsonObject;
    transactionTwo.type = 'conflicting-type';
    writeArtifacts(environmentRoot, fixture);
    expectFailure(
        () => loadAndValidateFinanceArtifacts(paths, environment, NOW.getTime()),
        /scenario must match/,
    );

    const conflictingPolicy = artifactFixture().policyPool;
    ((conflictingPolicy.uae as JsonObject[])[0]).sourceEnvironment = 'qa-uae';
    expectFailure(
        () => validatePolicyPool(conflictingPolicy, 168, NOW.getTime()),
        /sourceEnvironment must be test-uae/,
    );
}

function validateMapping(root: string): void {
    const repositoryRoot = path.join(root, 'repository');
    const targetDirectory = path.join(repositoryRoot, 'testdata', 'eu');
    const destinationKeys = new Map<string, Set<string>>();

    for (const mapping of FINANCE_FIELD_MAPPINGS) {
        const keys = destinationKeys.get(mapping.targetFile) ?? new Set<string>();
        keys.add(mapping.targetKey);
        destinationKeys.set(mapping.targetFile, keys);
    }
    for (const [fileName, keys] of destinationKeys) {
        const file: JsonObject = { unrelatedRoot: 'preserve-root' };
        for (const key of keys) {
            file[key] = { unrelatedField: 'preserve-field' };
        }
        writeJson(path.join(targetDirectory, fileName), file);
    }

    const financeData = financeDataFixture();
    const mappedFiles = mapFinanceData(financeData, repositoryRoot);
    assert.strictEqual(FINANCE_FIELD_MAPPINGS.length, 126);
    assert.strictEqual(new Set(FINANCE_FIELD_MAPPINGS.map(mapping => mapping.sourceKey)).size, 19);
    writeMappedFinanceData(mappedFiles);

    for (const mapping of FINANCE_FIELD_MAPPINGS) {
        const file = readJsonArtifact(
            path.join(targetDirectory, mapping.targetFile),
            mapping.targetFile,
        );
        const destination = file[mapping.targetKey] as JsonObject;
        const source = financeData[mapping.sourceKey] as JsonObject;
        assert.deepStrictEqual(destination[mapping.targetField], source[mapping.sourceField]);
        assert.strictEqual(destination.unrelatedField, 'preserve-field');
        assert.strictEqual(file.unrelatedRoot, 'preserve-root');
    }
}

async function validateEnvironmentBehavior(): Promise<void> {
    const original = { ...process.env };
    try {
        delete process.env.ORCHESTRATOR_ENV;
        await assert.doesNotReject(setupFinanceOrchestratorData());

        process.env.ORCHESTRATOR_ENV = 'qa-eu';
        await assert.doesNotReject(setupFinanceOrchestratorData());

        process.env.ORCHESTRATOR_ENV = 'qa-uae';
        await assert.rejects(setupFinanceOrchestratorData(), /not enabled until/);

        process.env.ORCHESTRATOR_ENV = 'preprod-uae';
        await assert.rejects(setupFinanceOrchestratorData(), /not enabled until/);
    } finally {
        process.env = original;
    }
}

async function main(): Promise<void> {
    const temporaryRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'finance-orchestrator-'));
    try {
        validatePathResolution(temporaryRoot);
        validateArtifactFailures(temporaryRoot);
        validateMapping(temporaryRoot);
        await validateEnvironmentBehavior();
        console.log(
            'Finance orchestrator validation passed: environments, paths, strict artifacts, '
            + '126-field mapping, and static-field preservation.',
        );
    } finally {
        fs.rmSync(temporaryRoot, { recursive: true, force: true });
    }
}

void main();
