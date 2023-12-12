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
                shell "npm install"
            }
        }

        stage('Build'){
            steps {
                shell "npm run build"
            }
        }

        stage('Deploy'){
            steps {
//                 dir('build'){
//                     bat ""
//                 }

                shell "npm run start"
            }
        }
    }
}
