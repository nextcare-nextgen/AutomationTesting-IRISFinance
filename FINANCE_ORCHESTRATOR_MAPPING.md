# Finance Test Data Orchestrator Consumer

Finance global setup uses checked-in data when `ORCHESTRATOR_ENV` is absent. `qa-eu` is
recognized and skips UAE injection. `test-uae` enables strict injection. `qa-uae` and
`preprod-uae` fail with a not-enabled-until-configured error.

The complete consumer implementation and its named testable helpers live in the single
`globalSetupFinanceData.ts` module, which also default-exports the Playwright setup function.

Artifacts are resolved from the first configured source:

1. `<ORCHESTRATOR_ARTIFACT_DIR>\finance`
2. `<ORCHESTRATOR_PATH>\output\<ORCHESTRATOR_ENV>\finance`
3. `<repository>\orchestrator-data\<ORCHESTRATOR_ENV>\finance`

`policyPool.json`, `financeUaePool.json`, and `financeData.json` are all required for
`test-uae`. Missing, malformed, empty, stale, wrong-schema, wrong-environment,
incomplete, or incoherent artifacts fail before mapped files are changed. The default
freshness limit is 168 hours; set a positive `FINANCE_UAE_MAX_AGE_HOURS` to override it.

`policyPool.json` is validation-only because no Finance policy consumer exists in this
repository. Its dedicated `uae` array may omit `sourceEnvironment`; when present it must
be `test-uae`. A matching policy requires `policyNumber`, `cardNumber`, and a fresh
`createdAt`.

Only the 126 mapped dynamic fields are replaced across 19 keys in these files:

- `testdata\eu\accountReconcilation.json`
- `testdata\eu\accountTransactions.json`
- `testdata\eu\providerReconcilation.json`
- `testdata\eu\smokeTestingSuite.json`
- `testdata\eu\paymentOrders.json`
- `testdata\eu\providerFinancialSettlement.json`
- `testdata\eu\soloPaymentOrderSetup.json`

The `testdata\eu` destination is intentional in the current repository: active Finance
specs import `testdata\${process.env.ENV || 'eu'}`, existing UAE execution defaults to
`eu`, and no `testdata\uae` directory exists. Static fields and unrelated keys are
preserved, writes use prepared temporary files plus rollback backups, and logs contain
only status/count information rather than generated values, credentials, or URLs.
