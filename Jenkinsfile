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
      sonarRunner: {
          analysis: {
              options: {
                  ...
                  sonar: {
                      login: 'admin',
                      password: 'admin',
                      host: {
                          url: 'http://localhost:9000'
                      },
                      ...
                  },
                  ...
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