pipeline {
  agent any
  environment {
    REGISTRY = 'greenfox/teaching-material-query-service'
  }

  stages {
    stage('Building image') {
      steps{
        script {
          sh "pwd"
          docker.build REGISTRY + ':$BUILD_NUMBER'
        }
      }
    }

    stage('Sonarqube') {
        environment {
            scannerHome = tool 'SonarQubeScanner'
        }
        steps {
            withSonarQubeEnv('sonarqube') {
                sh "${scannerHome}/bin/sonar-scanner"
            }
            timeout(time: 10, unit: 'MINUTES') {
                waitForQualityGate abortPipeline: true
            }
        }
    }

    stage('Cleanup') {
      steps{
        sh 'docker rmi $REGISTRY:$BUILD_NUMBER'
      }
    }
  }
}

