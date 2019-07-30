pipeline {
  agent any
  environment {
    REGISTRY = 'greenfox/teaching-material-query-service'
  }

  stages {
    stage('Building image') {
      steps{
        dir('practice/query'){
          script {
            docker.build('${REGISTRY}:${BUILD_NUMBER}', "practice/query/")
          }
        }
      }
    }

    stage('SonarQube') {
      environment {
        scannerHome = tool 'Sonar Scanner'
      }
      steps {
        dir('practice/query'){
          withCredentials([usernamePassword(credentialsId: 'Migrated SonarQube authentication token', passwordVariable: 'admin', usernameVariable: 'admin')]) {
            withSonarQubeEnv('Sonar Scanner') {
              sh "${scannerHome}/bin/sonar-scanner"
            }
            timeout(time: 10, unit: 'MINUTES') {
              waitForQualityGate abortPipeline: true
            }
          }
        }
      }
    }
  }

  post {
    always {
      sh 'docker rmi ${REGISTRY}:${BUILD_NUMBER}'
    }
  }
}