pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'docker pull node:22.15.0-alpine3.21'
                sh 'docker run --rm node:22.15.0-alpine3.21 node --version'
            }
        }
    }
}