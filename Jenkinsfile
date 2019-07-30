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
        credentialsId = 'Migrated SonarQube authentication token'
      }
      steps {
        dir('practice/query'){
          withSonarQubeEnv('Sonar Scanner') {
            sonar-runner -Dsonar.projectKey=courses-query -Dsonar.projectName=courses-query
          }
          timeout(time: 10, unit: 'MINUTES') {
            waitForQualityGate abortPipeline: true
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