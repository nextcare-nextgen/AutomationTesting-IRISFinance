pipeline {
    agent {
        label 'pulse2-bagio-win-label'
    }

    options {
        timeout(time: 60, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }

    parameters {
        string(
            name: 'ORCHESTRATOR_UPSTREAM_JOB',
            defaultValue: 'Test-Data-Orchestrator',
            description: 'Jenkins job that publishes orchestrator-output-test-uae.zip'
        )
    }

    environment {
        ORCHESTRATOR_ENV = 'test-uae'
        ORCHESTRATOR_ARTIFACT_DIR = "${WORKSPACE}\\orchestrator-data\\test-uae"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat '''
                    npm install
                    npx playwright install
                '''
            }
        }

        stage('Fetch Finance Orchestrator Data') {
            steps {
                copyArtifacts(
                    projectName: params.ORCHESTRATOR_UPSTREAM_JOB,
                    selector: lastSuccessful(),
                    filter: 'orchestrator-output-test-uae.zip',
                    flatten: true
                )
                bat '''
                    powershell -NoProfile -Command "$ErrorActionPreference='Stop'; $target=Join-Path $env:WORKSPACE 'orchestrator-data\\test-uae'; if (Test-Path $target) { Remove-Item $target -Recurse -Force }; New-Item -ItemType Directory -Path $target -Force | Out-Null; Expand-Archive -Path (Join-Path $env:WORKSPACE 'orchestrator-output-test-uae.zip') -DestinationPath $target -Force"
                '''
            }
        }

        stage('Run Tests') {
            steps {
                bat '''
                    if exist playwright-report rmdir /s /q playwright-report
                    if exist playwright-report.zip del /f /q playwright-report.zip
                '''
                bat 'npm run smoke:test-uae'
            }
        }
    }

    post {
        always {
            bat 'npm run zip-report'

            archiveArtifacts artifacts: 'playwright-report.zip',
                             allowEmptyArchive: true,
                             onlyIfSuccessful: false

            publishHTML([
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report',
                keepAll: true,
                allowMissing: true
            ])

            junit testResults: 'junit-report/*.xml',
                  allowEmptyResults: false
        }

        success {
            echo 'Tests passed and report archived successfully!'
        }

        failure {
            echo 'Tests failed. Check the Playwright and JUnit reports.'
        }
    }
}
