pipeline {
    agent {
        node{
            label: 'main'
        }
    }
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
                echo "Installing dependencies..."
                shell "npm install"
            }
        }

        stage('Build'){
            steps {
                echo "Building..."
                shell "npm run build"
            }
        }

        stage('Deploy'){
            steps {
                 shell "npm run start"
            }
        }
    }

    post{
        always{
            cleanWs()
        }

        success {
            echo "Build succeed"
        }
    }
}
