# IAM users setup

AWS Identity and Access Management (IAM) helps you securely control access to your AWS resources. Multiple users -with limited authority - can be set up for one account. [Read more](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started.html)

## Admin

To set up the `admin` IAM user, sign in to the [IAM console](https://console.aws.amazon.com/iam/) as root.
Click on `Users` then on `Add user`.

On the next page set "Administrator" as username.
Tick AWS Management Console access.
Click `Next`.

Choose `Add user to group`
`Create group`
Group name should be `Administrators`
Click on `Filter policies` and choose `AWS managed - job function`
In the policy list, select the check box for `AdministratorAccess`.
Then choose `Create group`.
Click `Next`.

Adding tags is optional. Click `Next`.
Click `Create user`

## Developer

To set up the `Developer` IAM user, sign in to the [IAM console](https://console.aws.amazon.com/iam/) as root.
Click on `Users` then on `Add user`.
On the next page set a username.
Tick `Programmatic access`.
Click `Next`.
Choose `Attach existing policies directly`
Type `s3` in the `searchbox`.
Select `AmayonS3FullAccess`.

Type `elasticbeans` in the `searchbox`.
Select `AWSElasticBeanstalkFullAccess`.

Type `ec2` in the `searchbox`.
Select `AmazonEC2ContainerRegistryFullAccess`.

Type `rds` in the `searchbox`.
Select `AmazonRDSDataFullAccess`.
Click `Next`.

Adding tags is optional. Click `Next`.
Click `Create user`