# Prerequisites

[The AWS documentation](https://aws.amazon.com/getting-started/tutorials/set-up-command-line-elastic-beanstalk/) will walk you through the process of installing EBCLI on your system.

AWS Elastic Beanstalk can launch single container Docker environments by building an image described in a Dockerfile or pulling a remote Docker image. If you're deploying a remote Docker image, you don't need to include a Dockerfile. Instead, use a Dockerrun.aws.json file, which specifies an image to use and additional configuration options.

A Dockerrun.aws.json file will be used here.


# Deploying

Open the folder that contains your application in terminal.
Create an image by entering the command `docker build -t 'docker-username''image-name':'version' .` Note the . at the end!!!
Before pushing your image, you might need to run `docker login`.
Push your image with the command `docker push 'docker-username''image-name':'version'`
This may take a few minutes.