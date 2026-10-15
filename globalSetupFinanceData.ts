import * as fs from 'fs';
import * as path from 'path';

export type JsonObject = Record<string, unknown>;

export interface FinanceOrchestratorEnvironment extends NodeJS.ProcessEnv {
    ORCHESTRATOR_ENV?: string;
    ORCHESTRATOR_ARTIFACT_DIR?: string;
    ORCHESTRATOR_PATH?: string;
    FINANCE_UAE_MAX_AGE_HOURS?: string;
}

export interface FieldMapping {
    sourceKey: string;
    sourceField: string;
    targetFile: string;
    targetKey: string;
    targetField: string;
}

export interface FinanceArtifactPaths {
    environmentRoot: string;
    financeDirectory: string;
    policyPool: string;
    financeUaePool: string;
    financeData: string;
}

export interface ValidatedFinanceArtifacts {
    policyPool: JsonObject;
    financeUaePool: JsonObject;
    financeData: JsonObject;
}

const SCHEMA_VERSION = 2;
const ENABLED_ENVIRONMENT = 'test-uae';
const DEFAULT_MAX_AGE_HOURS = 168;
const FUTURE_TOLERANCE_MS = 5 * 60 * 1000;
const SUPPORTED_ENVIRONMENTS = new Set(['qa-eu', 'test-uae', 'qa-uae', 'preprod-uae']);
const POLICY_ARRAY_KEYS = ['policies', 'uaePolicies', 'policyRecords', 'uae'] as const;

function sameFields(targetFile: string, key: string, fields: readonly string[]): FieldMapping[] {
    return fields.map(field => ({
        sourceKey: key,
        sourceField: field,
        targetFile,
        targetKey: key,
        targetField: field,
    }));
}

export const FINANCE_FIELD_MAPPINGS: readonly FieldMapping[] = [
    ...sameFields('accountReconcilation.json', 'accountReconcilation-001', [
        'payerValue', 'Account', 'POID', 'TXNNBR', 'DestinationAccount', 'Principle',
        'fromDueDate', 'toDueDate',
    ]),
    ...sameFields('accountReconcilation.json', 'accountReconcilation-002', [
        'fromDueDate', 'toDueDate',
    ]),
    ...sameFields('accountReconcilation.json', 'accountReconcilation-003', [
        'fromDueDate', 'toDueDate',
    ]),
    ...sameFields('accountReconcilation.json', 'accountReconcilation-004', [
        'payerValue', 'Account',
    ]),
    ...sameFields('accountTransactions.json', 'accountTransaction-001', [
        'payer', 'Account', 'type', 'countryValue', 'providerKey', 'TXNID', 'paymentOrder',
        'destinationAccount', 'Principal', 'fromDeliveryDate', 'todeliverydate',
        'fromPOValidationDate', 'toPOValidationDate', 'fromDueDate', 'toDueDate',
        'fromSettleDate', 'toSettleDate', 'fromChequeReleaseDate', 'toChequeReleaseDate',
        'fromPOReleaseDate', 'toPOReleaseDate', 'chequeSentDate', 'chequeReleaseDate',
        'settled', 'pendingEditableTransactionId', 'pendingEditablePaymentOrderId',
        'minimumResultRows',
    ]),
    ...sameFields('accountTransactions.json', 'accountTransaction-002', [
        'payer', 'Account', 'type', 'fromDeliveryDate', 'todeliverydate',
        'fromPOValidationDate', 'toPOValidationDate', 'fromDueDate', 'toDueDate',
        'fromSettleDate', 'toSettleDate', 'fromChequeReleaseDate', 'toChequeReleaseDate',
        'fromPOReleaseDate', 'toPOReleaseDate',
    ]),
    ...sameFields('accountTransactions.json', 'accountTransaction-003', [
        'fromPOValidationDate', 'toPOValidationDate', 'fromDueDate', 'toDueDate',
        'fromSettleDate', 'toSettleDate', 'fromChequeReleaseDate', 'toChequeReleaseDate',
        'fromPOReleaseDate', 'toPOReleaseDate',
    ]),
    ...sameFields('providerReconcilation.json', 'providerReconcilation-001', [
        'ProviderType', 'Country', 'providerValue', 'payerValue', 'Account',
        'fromDueDate', 'toDueDate', 'fromSettleDate', 'toSttleDate', 'toSettleDate',
        'fromValidateDate', 'toValidateDate', 'fromReceptionDate', 'toReceptionDate',
        'paymentOrderDig', 'settledPaymentOrderDig', 'unsettledPaymentOrderDig',
        'minimumResultRows',
    ]),
    ...sameFields('smokeTestingSuite.json', 'smokeTest-001', ['payer', 'Account', 'POID']),
    ...sameFields('paymentOrders.json', 'TC013', [
        'payerValue', 'accountValue', 'paymentOrderId', 'parentEntity', 'alternateParentEntity',
    ]),
    ...sameFields('providerFinancialSettlement.json', 'TC_006_ProviderFinancialSettlementData', [
        'PayerValue', 'BankAccountValue', 'UpToDueDate',
    ]),
    ...sameFields('providerFinancialSettlement.json', 'TC_008_ProviderFinancialSettlementData', [
        'PayerValue', 'BankAccountValue', 'UpToDueDate',
    ]),
    ...sameFields('providerFinancialSettlement.json', 'TC_025_ProviderFinancialSettlementData', [
        'PayerValue', 'BankAccountValue', 'UpToDueDate', 'AccountNumber',
    ]),
    ...sameFields('providerFinancialSettlement.json', 'TC_026_ProviderFinancialSettlementData', [
        'PayerValue', 'BankAccountValue', 'BankAccountValue1', 'UpToDueDate',
        'AccountNumber', 'AccountName', 'Currency', 'MinimumBalance', 'CurrentBalance',
        'DeductionVoucherPaymentOrderId',
    ]),
    ...sameFields('providerFinancialSettlement.json', 'TC_029_ProviderFinancialSettlementData', [
        'PayerValue', 'BankAccountValue', 'UpToDueDate',
    ]),
    ...sameFields('providerFinancialSettlement.json', 'TC_039_ProviderFinancialSettlementData', [
        'POID', 'TOPOID', 'PARTNER_BANK',
    ]),
    ...sameFields('soloPaymentOrderSetup.json', 'TC_262_SoloPaymentOrderSetupData', [
        'payerName', 'expectedResults',
    ]),
    ...sameFields('soloPaymentOrderSetup.json', 'TC_263_SoloPaymentOrderSetupData', [
        'payerName', 'name', 'effectiveDate', 'soloPaymentOrder', 'mutableRecordName',
    ]),
    ...sameFields('soloPaymentOrderSetup.json', 'TC_280_SoloPaymentOrderSetupData', [
        'soloPaymentOrderType',
    ]),
];

function isObject(value: unknown): value is JsonObject {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function requireObject(value: unknown, label: string): JsonObject {
    if (!isObject(value) || Object.keys(value).length === 0) {
        throw new Error(`${label} must be a non-empty JSON object.`);
    }
    return value;
}

function requirePresent(value: unknown, label: string): void {
    const present = typeof value === 'string'
        ? value.trim().length > 0
        : typeof value === 'number' && Number.isFinite(value) && value > 0;
    if (!present) {
        throw new Error(`${label} must be a non-empty string or positive finite number.`);
    }
}

function maxAgeHours(environment: FinanceOrchestratorEnvironment): number {
    const value = Number(environment.FINANCE_UAE_MAX_AGE_HOURS ?? DEFAULT_MAX_AGE_HOURS);
    if (!Number.isFinite(value) || value <= 0) {
        throw new Error('FINANCE_UAE_MAX_AGE_HOURS must be a positive finite number.');
    }
    return value;
}

function requireFreshTimestamp(
    value: unknown,
    label: string,
    maximumAgeHours: number,
    now: number,
): number {
    if (typeof value !== 'string' || value.trim().length === 0) {
        throw new Error(`${label} must be a non-empty timestamp.`);
    }
    const timestamp = Date.parse(value);
    if (!Number.isFinite(timestamp)) {
        throw new Error(`${label} must be a valid timestamp.`);
    }
    if (timestamp > now + FUTURE_TOLERANCE_MS) {
        throw new Error(`${label} must not be in the future.`);
    }
    if (now - timestamp > maximumAgeHours * 60 * 60 * 1000) {
        throw new Error(`${label} is stale; maximum age is ${maximumAgeHours} hours.`);
    }
    return timestamp;
}

export function resolveFinanceArtifactPaths(
    repositoryRoot: string,
    environment: FinanceOrchestratorEnvironment = process.env,
): FinanceArtifactPaths {
    const orchestratorEnvironment = environment.ORCHESTRATOR_ENV;
    if (!orchestratorEnvironment) {
        throw new Error('ORCHESTRATOR_ENV is required to resolve orchestrator artifacts.');
    }

    const environmentRoot = environment.ORCHESTRATOR_ARTIFACT_DIR
        ? path.resolve(environment.ORCHESTRATOR_ARTIFACT_DIR)
        : environment.ORCHESTRATOR_PATH
            ? path.resolve(environment.ORCHESTRATOR_PATH, 'output', orchestratorEnvironment)
            : path.resolve(repositoryRoot, 'orchestrator-data', orchestratorEnvironment);
    const financeDirectory = path.join(environmentRoot, 'finance');

    return {
        environmentRoot,
        financeDirectory,
        policyPool: path.join(financeDirectory, 'policyPool.json'),
        financeUaePool: path.join(financeDirectory, 'financeUaePool.json'),
        financeData: path.join(financeDirectory, 'financeData.json'),
    };
}

export function readJsonArtifact(filePath: string, artifactName = path.basename(filePath)): JsonObject {
    if (!fs.existsSync(filePath)) {
        throw new Error(`Required Finance orchestrator artifact is missing: ${artifactName}.`);
    }

    let text: string;
    try {
        text = fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '');
    } catch (error) {
        throw new Error(
            `Unable to read Finance orchestrator artifact ${artifactName}: ${
                error instanceof Error ? error.message : String(error)
            }`,
        );
    }
    if (text.trim().length === 0) {
        throw new Error(`Finance orchestrator artifact ${artifactName} is empty.`);
    }

    try {
        return requireObject(JSON.parse(text) as unknown, artifactName);
    } catch (error) {
        if (error instanceof SyntaxError) {
            throw new Error(`Finance orchestrator artifact ${artifactName} contains malformed JSON.`);
        }
        throw error;
    }
}

export function validatePolicyPool(
    policyPool: JsonObject,
    maximumAgeHours: number,
    now = Date.now(),
): void {
    requireFreshTimestamp(policyPool.lastUpdated, 'policyPool.lastUpdated', maximumAgeHours, now);

    const arrays = POLICY_ARRAY_KEYS
        .filter(key => key in policyPool)
        .map(key => {
            const value = policyPool[key];
            if (!Array.isArray(value)) {
                throw new Error(`policyPool.${key} must be an array.`);
            }
            return { key, value };
        });
    if (arrays.length === 0) {
        throw new Error(
            `policyPool must contain one of the expected arrays: ${POLICY_ARRAY_KEYS.join(', ')}.`,
        );
    }

    const matchingPolicies: JsonObject[] = [];
    for (const { key, value } of arrays) {
        for (const [index, entry] of value.entries()) {
            const policy = requireObject(entry, `policyPool.${key}[${index}]`);
            if (
                key === 'uae'
                && policy.sourceEnvironment !== undefined
                && policy.sourceEnvironment !== ENABLED_ENVIRONMENT
            ) {
                throw new Error(
                    `policyPool.uae[${index}].sourceEnvironment must be ${ENABLED_ENVIRONMENT} when present.`,
                );
            }
            if (
                policy.sourceEnvironment === ENABLED_ENVIRONMENT
                || (key === 'uae' && policy.sourceEnvironment === undefined)
            ) {
                matchingPolicies.push(policy);
            }
        }
    }
    if (matchingPolicies.length === 0) {
        throw new Error(`policyPool must contain a policy for ${ENABLED_ENVIRONMENT}.`);
    }
    for (const [index, policy] of matchingPolicies.entries()) {
        requirePresent(policy.policyNumber, `policyPool policy ${index + 1}.policyNumber`);
        requirePresent(policy.cardNumber, `policyPool policy ${index + 1}.cardNumber`);
        requireFreshTimestamp(
            policy.createdAt,
            `policyPool policy ${index + 1}.createdAt`,
            maximumAgeHours,
            now,
        );
    }
}

export function validateFinanceUaePool(
    financeUaePool: JsonObject,
    maximumAgeHours: number,
    now = Date.now(),
): JsonObject {
    if (financeUaePool.schemaVersion !== SCHEMA_VERSION) {
        throw new Error(`financeUaePool.schemaVersion must be ${SCHEMA_VERSION}.`);
    }
    requireFreshTimestamp(
        financeUaePool.lastUpdated,
        'financeUaePool.lastUpdated',
        maximumAgeHours,
        now,
    );
    if (!Array.isArray(financeUaePool.records) || financeUaePool.records.length === 0) {
        throw new Error('financeUaePool.records must be a non-empty array.');
    }
    const latestRecord = requireObject(
        financeUaePool.records[financeUaePool.records.length - 1],
        'financeUaePool latest record',
    );
    if (latestRecord.schemaVersion !== SCHEMA_VERSION) {
        throw new Error(`financeUaePool latest record schemaVersion must be ${SCHEMA_VERSION}.`);
    }
    if (latestRecord.sourceEnvironment !== ENABLED_ENVIRONMENT) {
        throw new Error(
            `financeUaePool latest record sourceEnvironment must be ${ENABLED_ENVIRONMENT}.`,
        );
    }
    requireFreshTimestamp(
        latestRecord.createdAt,
        'financeUaePool latest record createdAt',
        maximumAgeHours,
        now,
    );
    return latestRecord;
}

export function validateFinanceData(
    financeData: JsonObject,
    latestPoolRecord: JsonObject,
    maximumAgeHours: number,
    now = Date.now(),
): void {
    const metadata = requireObject(financeData._metadata, 'financeData._metadata');
    if (metadata.schemaVersion !== SCHEMA_VERSION) {
        throw new Error(`financeData._metadata.schemaVersion must be ${SCHEMA_VERSION}.`);
    }
    if (metadata.sourceEnvironment !== ENABLED_ENVIRONMENT) {
        throw new Error(
            `financeData._metadata.sourceEnvironment must be ${ENABLED_ENVIRONMENT}.`,
        );
    }
    const generatedAt = requireFreshTimestamp(
        metadata.generatedAt,
        'financeData._metadata.generatedAt',
        maximumAgeHours,
        now,
    );

    for (const mapping of FINANCE_FIELD_MAPPINGS) {
        const source = requireObject(
            financeData[mapping.sourceKey],
            `financeData.${mapping.sourceKey}`,
        );
        requirePresent(
            source[mapping.sourceField],
            `financeData.${mapping.sourceKey}.${mapping.sourceField}`,
        );
    }

    const smoke = requireObject(financeData['smokeTest-001'], 'financeData.smokeTest-001');
    const reconciliation = requireObject(
        financeData['accountReconcilation-004'],
        'financeData.accountReconcilation-004',
    );
    if (smoke.payer !== reconciliation.payerValue || smoke.Account !== reconciliation.Account) {
        throw new Error(
            'financeData smokeTest-001 and accountReconcilation-004 payer/account must match.',
        );
    }

    const transactionOne = requireObject(
        financeData['accountTransaction-001'],
        'financeData.accountTransaction-001',
    );
    const transactionTwo = requireObject(
        financeData['accountTransaction-002'],
        'financeData.accountTransaction-002',
    );
    if (
        transactionOne.payer !== transactionTwo.payer
        || transactionOne.Account !== transactionTwo.Account
        || transactionOne.type !== transactionTwo.type
    ) {
        throw new Error(
            'financeData accountTransaction-001 and accountTransaction-002 scenario must match.',
        );
    }

    if (latestPoolRecord.sourceEnvironment !== metadata.sourceEnvironment) {
        throw new Error('financeData metadata and financeUaePool sourceEnvironment must match.');
    }
    const poolCreatedAt = Date.parse(String(latestPoolRecord.createdAt));
    if (generatedAt !== poolCreatedAt) {
        throw new Error(
            'financeData._metadata.generatedAt must match the latest financeUaePool record createdAt.',
        );
    }
}

export function loadAndValidateFinanceArtifacts(
    paths: FinanceArtifactPaths,
    environment: FinanceOrchestratorEnvironment = process.env,
    now = Date.now(),
): ValidatedFinanceArtifacts {
    const maximumAgeHours = maxAgeHours(environment);
    const policyPool = readJsonArtifact(paths.policyPool, 'policyPool.json');
    const financeUaePool = readJsonArtifact(paths.financeUaePool, 'financeUaePool.json');
    const financeData = readJsonArtifact(paths.financeData, 'financeData.json');

    validatePolicyPool(policyPool, maximumAgeHours, now);
    const latestPoolRecord = validateFinanceUaePool(financeUaePool, maximumAgeHours, now);
    validateFinanceData(financeData, latestPoolRecord, maximumAgeHours, now);

    return { policyPool, financeUaePool, financeData };
}

export function mapFinanceData(
    financeData: JsonObject,
    repositoryRoot: string,
): Map<string, JsonObject> {
    const targetFiles = new Map<string, JsonObject>();

    for (const mapping of FINANCE_FIELD_MAPPINGS) {
        const targetPath = path.resolve(repositoryRoot, 'testdata', 'eu', mapping.targetFile);
        let targetFile = targetFiles.get(targetPath);
        if (!targetFile) {
            targetFile = readJsonArtifact(targetPath, mapping.targetFile);
            targetFiles.set(targetPath, targetFile);
        }
        const target = requireObject(
            targetFile[mapping.targetKey],
            `${mapping.targetFile}.${mapping.targetKey}`,
        );
        const source = requireObject(
            financeData[mapping.sourceKey],
            `financeData.${mapping.sourceKey}`,
        );
        target[mapping.targetField] = source[mapping.sourceField];
    }

    return targetFiles;
}

export function writeMappedFinanceData(targetFiles: ReadonlyMap<string, JsonObject>): void {
    const transactionId = `${process.pid}.${Date.now()}`;
    const temporaryFiles = new Map<string, string>();
    const backupFiles = new Map<string, string>();
    const replacedFiles: string[] = [];

    try {
        for (const [targetPath, data] of targetFiles) {
            const temporaryPath = `${targetPath}.${transactionId}.tmp`;
            fs.writeFileSync(temporaryPath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
            temporaryFiles.set(targetPath, temporaryPath);
        }

        for (const [targetPath] of targetFiles) {
            const backupPath = `${targetPath}.${transactionId}.bak`;
            fs.copyFileSync(targetPath, backupPath, fs.constants.COPYFILE_EXCL);
            backupFiles.set(targetPath, backupPath);
        }

        for (const [targetPath] of targetFiles) {
            const temporaryPath = temporaryFiles.get(targetPath);
            if (!temporaryPath) {
                throw new Error('Internal error while preparing mapped Finance data.');
            }
            fs.renameSync(temporaryPath, targetPath);
            temporaryFiles.delete(targetPath);
            replacedFiles.push(targetPath);
        }
    } catch (error) {
        for (const targetPath of replacedFiles.reverse()) {
            const backupPath = backupFiles.get(targetPath);
            if (backupPath) {
                fs.copyFileSync(backupPath, targetPath);
            }
        }
        throw error;
    } finally {
        for (const temporaryPath of temporaryFiles.values()) {
            if (fs.existsSync(temporaryPath)) {
                fs.unlinkSync(temporaryPath);
            }
        }
        for (const backupPath of backupFiles.values()) {
            if (fs.existsSync(backupPath)) {
                fs.unlinkSync(backupPath);
            }
        }
    }
}

export async function setupFinanceOrchestratorData(): Promise<void> {
    const orchestratorEnvironment = process.env.ORCHESTRATOR_ENV;
    if (!orchestratorEnvironment) {
        console.log('[Finance orchestrator] ORCHESTRATOR_ENV is not set; using local test data.');
        return;
    }
    if (!SUPPORTED_ENVIRONMENTS.has(orchestratorEnvironment)) {
        throw new Error(
            `Unsupported ORCHESTRATOR_ENV. Supported values: ${[...SUPPORTED_ENVIRONMENTS].join(', ')}.`,
        );
    }
    if (orchestratorEnvironment === 'qa-eu') {
        console.log('[Finance orchestrator] qa-eu does not require UAE data injection.');
        return;
    }
    if (orchestratorEnvironment !== ENABLED_ENVIRONMENT) {
        throw new Error(
            `${orchestratorEnvironment} is recognized but is not enabled until its Finance mapping is configured.`,
        );
    }

    const paths = resolveFinanceArtifactPaths(__dirname);
    const { financeData } = loadAndValidateFinanceArtifacts(paths);
    const targetFiles = mapFinanceData(financeData, __dirname);
    writeMappedFinanceData(targetFiles);
    console.log(
        `[Finance orchestrator] Applied ${FINANCE_FIELD_MAPPINGS.length} mapped fields across `
        + `${targetFiles.size} local test-data files.`,
    );
}

export default setupFinanceOrchestratorData;
