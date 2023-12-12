pipeline {
    agent any
    options {
        skipDefaultCheckout()
    }

    environment {
        BUILD_NUMBER = env.BUILD_NUMBER.toString()
        GIT_REPO = env.GIT_URL.replaceFirst(/^.*\/([^\/]+?).git$/, '$1')
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
                dir(GIT_REPO){
                    shell "npm install"
                }
            }
        }

        stage('Build'){
            steps {
                dir(GIT_REPO){
                    shell "npm run build"
                }
            }
        }

        stage('Deploy'){
            steps {
                dir(GIT_REPO){
                    shell "npm run start"
                }
            }
        }
    }
}
