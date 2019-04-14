# Prerequisites

Create a your Hello World application. Name it either `server.js` or `app.js` or specify its name in a `package.json` file.

[The AWS documentation](https://aws.amazon.com/getting-started/tutorials/set-up-command-line-elastic-beanstalk/) will walk you through the process of installing EBCLI on your system.

## Policies

By default, the previously created `Developer` user does not have the right to perform this task. To solve this problem, I added the following policy to the `Developer` user.

`{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "iam:CreateServiceLinkedRole",
            "Resource": "arn:aws:iam::*:role/aws-service-role/*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "ec2:DescribeAccountAttributes"
            ],
            "Resource": "*"
        }
    ]
}`

# Deploying

Open the folder that contains your application in terminal.
Enter the command `eb init`.
Select your default region.
Provide your credentials.
Provide a name for your application.
Select Node.js as the platform.
Continue without setting up CodeCommit.
You don't need to set up SSH.
Enter the command `eb create`.
Enter the environment name.
Choose DNC CNAME prefix.
Go with the default load balancer.
Wait for EB to finish deploying. It may take a few minutes.
After finishing, you should see this: "INFO    Successfully launched environment: your environment"