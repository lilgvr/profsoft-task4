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
                dir('profsoft-task-4'){
                    shell "npm install"
                }
            }
        }

        stage('Build'){
            steps {
                dir('profsoft-task-4'){
                    shell "npm run build"
                }
            }
        }

        stage('Deploy'){
            steps {
                dir('profsoft-task-4'){
                    shell "npm run start"
                }
            }
        }
    }
}
