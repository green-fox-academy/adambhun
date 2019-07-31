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
              ./ gradlew clean build
              ${scannerHome}/bin/sonar-scanner
            """
          }
          timeout(time: 10, unit: 'MINUTES') {
            waitForQualityGate abortPipeline: true
          }
        }
      }
    }
  }
}