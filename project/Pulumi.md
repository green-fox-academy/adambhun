[repo for this story](https://github.com/green-fox-academy/adambhun/tree/master/project/Pulumi)

# Prerequisites

 - AWS:
  - awscli installed
  - AWS credentials configured
 - Pulumi installed
 - Pulumi access token
 - Terraform installed
 - WebServer application



# Setting up

Open an empty folder in terminal and give the following command:


```
pulumi new aws-javascript
```


This will pull the dependencies for a new javascript project to be deployed on AWS, and creates a pulumi project. You will need to configure some setting for your aws instance.



To run your script and deploy, enter this command:


```
pulumi up
```


This command will also create a stack.
You can destroy the stack with this command:


```
pulumi stack rm
```


To undo everything your script did enter this command:


```
pulumi destroy
```


Note: as of now, pulumi doesn't support provisioners. Use user data to run scripts on your instances.

[useful tool to convert Terraform files to JS and other languages](https://github.com/pulumi/tf2pulumi)