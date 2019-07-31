pipeline {
  agent any
  environment {
    REGISTRY = 'greenfox/teaching-material-query-service'
  }

  stages {

    stage('SonarQube') {
      environment {
        scannerHome = tool 'Sonar Scanner'
      }
      steps {
        dir('practice/query'){
          withSonarQubeEnv(installationName: 'Sonar Scanner', credentialsId: 'sonarqube-adambhun') {
            sh """
              cd practice/query
              ls -a
              ${scannerHome}/bin/sonar-scanner -X
            """
          }
          timeout(time: 10, unit: 'MINUTES') {
            waitForQualityGate abortPipeline: true
          }
        }
      }
    }
  }