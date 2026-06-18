pipeline {
    agent {
        label 'pulse2-bagio-win-label'
    }

    options {
        timeout(time: 60, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '10'))
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

        stage('Run Tests') {
            steps {
                bat '''
                    if exist playwright-report rmdir /s /q playwright-report
                    if exist playwright-report.zip del /f /q playwright-report.zip
                '''
                bat 'npm run smoke'
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
