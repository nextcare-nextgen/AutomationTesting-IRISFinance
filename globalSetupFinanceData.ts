import * as fs from 'fs';
import * as path from 'path';

type JsonObject = Record<string, unknown>;

interface FieldMapping {
    sourceKey: string;
    sourceField: string;
    targetFile: string;
    targetKey: string;
    targetField: string;
}

const SCHEMA_VERSION = 2;
const DEFAULT_MAX_AGE_HOURS = 168;

const mappings: readonly FieldMapping[] = [
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

function sameFields(targetFile: string, key: string, fields: readonly string[]): FieldMapping[] {
    return fields.map(field => ({
        sourceKey: key,
        sourceField: field,
        targetFile,
        targetKey: key,
        targetField: field,
    }));
}

function resolveOrchestratorDataPath(): string {
    if (process.env.ORCHESTRATOR_PATH) {
        return path.join(
            process.env.ORCHESTRATOR_PATH,
            'testdata',
            'financeUAE',
            'financeData.json',
        );
    }

    const siblingProjectFile = path.resolve(
        __dirname,
        '..',
        'Playwright Automation- Test Data Orchestrator',
        'testdata',
        'financeUAE',
        'financeData.json',
    );
    if (fs.existsSync(siblingProjectFile)) return siblingProjectFile;

    return path.resolve(__dirname, 'orchestrator-data', 'financeData.json');
}

function readJson(filePath: string): JsonObject {
    if (!fs.existsSync(filePath)) {
        throw new Error(`[UAE Finance globalSetup] Required file not found: ${filePath}`);
    }
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf-8').replace(/^\uFEFF/, '')) as JsonObject;
    } catch (error) {
        throw new Error(
            `[UAE Finance globalSetup] Unable to read JSON file ${filePath}: ${
                error instanceof Error ? error.message : String(error)
            }`,
        );
    }
}

function objectAt(data: JsonObject, key: string): JsonObject | undefined {
    const value = data[key];
    return value && typeof value === 'object' && !Array.isArray(value)
        ? value as JsonObject
        : undefined;
}

function isPresent(value: unknown): boolean {
    if (typeof value === 'string') return Boolean(value.trim());
    if (typeof value === 'number') return Number.isFinite(value) && value > 0;
    return false;
}

function validateMetadata(source: JsonObject, errors: string[]): void {
    const metadata = objectAt(source, '_metadata');
    if (!metadata) {
        errors.push('_metadata');
        return;
    }
    if (metadata.schemaVersion !== SCHEMA_VERSION) {
        errors.push(`_metadata.schemaVersion (expected ${SCHEMA_VERSION})`);
    }
    const generatedAt = typeof metadata.generatedAt === 'string'
        ? Date.parse(metadata.generatedAt)
        : Number.NaN;
    const maxAgeHours = Number(process.env.FINANCE_UAE_MAX_AGE_HOURS ?? DEFAULT_MAX_AGE_HOURS);
    if (!Number.isFinite(maxAgeHours) || maxAgeHours <= 0) {
        errors.push('FINANCE_UAE_MAX_AGE_HOURS (must be a positive number)');
    }
    if (
        Number.isNaN(generatedAt) ||
        generatedAt > Date.now() + 5 * 60 * 1000 ||
        Date.now() - generatedAt > maxAgeHours * 60 * 60 * 1000
    ) {
        errors.push(`_metadata.generatedAt (must be no older than ${maxAgeHours} hours)`);
    }
    const expectedEnvironment = process.env.FINANCE_UAE_SOURCE_ENVIRONMENT ?? 'uae';
    if (
        typeof metadata.sourceEnvironment !== 'string' ||
        metadata.sourceEnvironment.toLowerCase() !== expectedEnvironment.toLowerCase()
    ) {
        errors.push(
            `_metadata.sourceEnvironment (expected "${expectedEnvironment}", received "${String(
                metadata.sourceEnvironment ?? '',
            )}")`,
        );
    }
}

function assertCoherent(source: JsonObject, errors: string[]): void {
    const smoke = objectAt(source, 'smokeTest-001');
    const smokeAccount = objectAt(source, 'accountReconcilation-004');
    if (
        smoke &&
        smokeAccount &&
        (smoke.payer !== smokeAccount.payerValue || smoke.Account !== smokeAccount.Account)
    ) {
        errors.push('smokeTest-001 and accountReconcilation-004 payer/account mismatch');
    }

    const transaction = objectAt(source, 'accountTransaction-001');
    const transactionCriteria = objectAt(source, 'accountTransaction-002');
    if (
        transaction &&
        transactionCriteria &&
        (transaction.payer !== transactionCriteria.payer ||
            transaction.Account !== transactionCriteria.Account ||
            transaction.type !== transactionCriteria.type)
    ) {
        errors.push('accountTransaction-001 and accountTransaction-002 scenario mismatch');
    }
}

async function globalSetupFinanceData(): Promise<void> {
    const sourceFile = resolveOrchestratorDataPath();
    const sourceData = readJson(sourceFile);
    const errors: string[] = [];
    validateMetadata(sourceData, errors);

    const targetFiles = new Map<string, JsonObject>();
    for (const mapping of mappings) {
        const sourceObject = objectAt(sourceData, mapping.sourceKey);
        const value = sourceObject?.[mapping.sourceField];
        if (!sourceObject || !isPresent(value)) {
            errors.push(`${mapping.sourceKey}.${mapping.sourceField}`);
        }

        if (!targetFiles.has(mapping.targetFile)) {
            const targetPath = path.resolve(__dirname, 'testdata', 'eu', mapping.targetFile);
            targetFiles.set(mapping.targetFile, readJson(targetPath));
        }
        if (!objectAt(targetFiles.get(mapping.targetFile)!, mapping.targetKey)) {
            errors.push(`${mapping.targetFile}:${mapping.targetKey}`);
        }
    }
    assertCoherent(sourceData, errors);

    if (errors.length) {
        throw new Error(
            `[UAE Finance globalSetup] Artifact validation failed; no target files were changed:\n- ${[
                ...new Set(errors),
            ].join('\n- ')}\nSource: ${sourceFile}`,
        );
    }

    for (const mapping of mappings) {
        const target = targetFiles.get(mapping.targetFile)!;
        objectAt(target, mapping.targetKey)![mapping.targetField] =
            objectAt(sourceData, mapping.sourceKey)![mapping.sourceField];
    }

    for (const [fileName, data] of targetFiles) {
        const targetPath = path.resolve(__dirname, 'testdata', 'eu', fileName);
        fs.writeFileSync(targetPath, JSON.stringify(data, null, 2));
        console.log(`[UAE Finance globalSetup] Updated mapped fields: ${targetPath}`);
    }
}

export default globalSetupFinanceData;
