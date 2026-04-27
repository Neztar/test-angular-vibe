pipeline {
    agent any

    environment {
        // Reference the credentials you created in Jenkins
        VERCEL_TOKEN = credentials('VERCEL_TOKEN')
        VERCEL_ORG_ID = credentials('VERCEL_ORG_ID')
        VERCEL_PROJECT_ID = credentials('VERCEL_PROJECT_ID')
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Neztar/test-angular-vibe.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Angular') {
            steps {
                // Generates the /dist folder
                sh 'npm run build --prod'
            }
        }

        stage('Deploy to Vercel') {
            steps {
                // --prod triggers a production deployment
                // --yes bypasses confirmation prompts
                sh "npx vercel --token ${VERCEL_TOKEN} --prod --yes"
            }
        }
    }

    post {
        success {
            echo 'Deployment to Vercel was successful!'
        }
        failure {
            echo 'Deployment failed. Check the logs above.'
        }
    }
}