pipeline {
  agent any
  environment {
    REGISTRY = 'greenfox/teaching-material-query-service'
    DOCKER_CRED = 'foxyfox'
    DOCKER_IMAGE = ''
  }

  stages {
    stage('Building image') {
      steps{
        script {
          docker.build REGISTRY + ':$BUILD_NUMBER'
        }
      }
    }

    stage('Deploy Image') {
      steps{
        script {
          docker.withREGISTRY( '', DOCKER_CRED ) {
            sh 'docker push $REGISTRY:$BUILD_NUMBER'
          }
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

