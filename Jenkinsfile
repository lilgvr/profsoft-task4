pipeline {
    agent any
    options {
        skipDefaultCheckout()
    }

    environment {
        BUILD_NUMBER = env.BUILD_NUMBER.toString()
    }

    stages {
        stage('Cleanup & Clone'){
            steps{
                cleanWs()
                checkout scm
            }
        }

        stage('Install dependencies'){
            steps{
                sh "npm install"
            }
        }

        stage('Build'){
            steps {
                sh "npm run build"
            }
        }

        stage('Deploy'){
            steps {
//                 dir('build'){
//                     bat ""
//                 }

                sh "npm run start"
            }
        }
    }
}
