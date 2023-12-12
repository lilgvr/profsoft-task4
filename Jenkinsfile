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
                bat "npm install"
            }
        }

        stage('Build'){
            steps {
                bat "npm run build"
            }
        }

        stage('Deploy'){
            steps {
//                 dir('build'){
//                     bat ""
//                 }

                bat "npm run start"
            }
        }
    }
}
