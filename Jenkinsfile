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
                shell "where npm"
                shell "cd profsoft-task-4 && npm install"
            }
        }

        stage('Build'){
            steps {
                shell "cd profsoft-task-4 && npm run build"
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
