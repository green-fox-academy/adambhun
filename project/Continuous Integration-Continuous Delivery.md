# Continuous Integration/Continuous Delivery

## Prerequisites

- AWS account
- Docker account
- Jenkins server set up (credentials for Dockerhub and AWS)
- Multibranch gitHub repository

## Creating the Jenkins job

After logging in to Jenkins click on `New item` (left side.) Name your job, then choose `Multibranch Pipeline` and click on `OK`. The configuration page will be loaded:

<img src="assets/conf1.png">
<img src="assets/conf2.png">
<img src="assets/conf3.png">

Adding a Display name and Description are optional.

### Branch sources

Under `Branch sources` click on `Add source` and select `GitHub`.

Select your credentials.

Enter the owner of the repository\organization in the `Owner` field.

Select the name of the repository in the `Repository` field. Note that the options might appear with a few seconds delay.

You can leave the rest of the settings of `Branch sources` on their default values.

### Build configuration

For the `Mode` option select `by Jenkinsfile`.
The `Script Path` should be `Jenkinsfile`.

You can leave the rest of the settings on their default values. Click on `Save`.

## Repo contents

The gitHub repository should contain the following files at least:
- Nodejs application
- test for the application
- Dockerfile
- Jenkinsfile
- Dockerrun.aws.json file

### Dockerfile contents
```
FROM alpine:latest
RUN apk add --no-cache nodejs npm
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3000
ENTRYPOINT ["node"]
CMD ["anagram.js"]
```

### Dockerrun.aws.json contents
```
{     
  "AWSEBDockerrunVersion": "1",          
  "Image":{       
    "Name": "adambhun/CD_CI"     
  },     
    "Ports": [       {         
      "ContainerPort": "3000",
      "hostPort": "3000"
    }     
  ]   
}
```

### Jenkinsfile contents

```
pipeline {
  environment {
    registry = "adambhun/multibranch-ci-cd"
    registryCredential = 'adambdhub'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Testing') {
      steps {
        sh 'npm init -y'
        sh 'npm install tape'
        sh 'node anagramtest.js'
      }
    }
    stage('Building image') {
      steps{
        script {
          docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy to Docker') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Deploy to EB') {
      steps{
        script {
          sh 'python --version'
          sh 'apt-get install python-pip'
          sh 'pip --version'
          sh 'pip install awsebcli --upgrade --user'
          sh 'eb --version'
          sh 'ls'
          sh 'eb init -p docker $BUILD_NUMBER'
          sh 'eb create $BUILD_NUMBER'
        }
      }
    }
    stage('Cleanup') {
      steps{
        sh 'docker rmi $registry:$BUILD_NUMBER'
        sh 'rm -r node_modules'
        sh 'rm package.json'
      }
    }
  }
}
```

## Testing the Jenkins project

Find your Jenkins project on the home page of your Jenkins server and click on it.

<img src="assets/testci.png">

Click on `Scan Repository Now` to begin the test. It can take up to five minutes with a simple application.

To see a detailed log of what happened, 