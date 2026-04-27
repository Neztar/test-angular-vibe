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
                bat 'npm install'
            }
        }

        stage('Build Angular') {
            steps {
                bat 'npm run build --prod'
            }
        }

        stage('Deploy to Vercel') {
            steps {
                // Use double quotes for Windows environment variables if needed, 
                // but bat works fine with the ${} syntax for Jenkins vars
                bat "npx vercel --token ${VERCEL_TOKEN} --prod --yes"
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