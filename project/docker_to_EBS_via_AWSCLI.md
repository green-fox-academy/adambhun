# Prerequisites

[The AWS documentation](https://aws.amazon.com/getting-started/tutorials/set-up-command-line-elastic-beanstalk/) will walk you through the process of installing EBCLI on your system.

AWS Elastic Beanstalk can launch single container Docker environments by building an image described in a Dockerfile or pulling a remote Docker image. If you're deploying a remote Docker image, you don't need to include a Dockerfile. Instead, use a Dockerrun.aws.json file, which specifies an image to use and additional configuration options.

The first method is described in this document.

# Testing your container (optional)

Open a terminal in the folder with your application.
Enter the following commands:
`eb init -p docker application-name`
`eb local run --port 5000`

You can now test your application with Postman or a browser.

# Deploying

Open the folder that contains your application in terminal.
Enter the command `eb create environment-name`.
Wait for EB to finish deploying. It may take a few minutes.
After finishing, you should see this: "INFO    Successfully launched environment: your environment"
You may test again with the command `eb local open`.