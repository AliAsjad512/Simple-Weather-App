pipeline {
    agent any

    stages {
        stage('clone project') {
            steps {
                git branch: 'master', url: 'https://github.com/AliAsjad512/Simple-Weather-App.git'
            }
        }
           stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
         stage('test') {
            steps {
                sh 'npm test'
            }
        }
    }
     post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Build and tests passed.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
