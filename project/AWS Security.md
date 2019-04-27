# AWS Security

The root user is the ultimate authority of an AWS account. Protect access to it. Enable MFA on your accounts.
The difference between the root account and an account with "Administrator Access" the root account has full control over the Administrator account, but not vice-versa.
A good rule of thumb is to give your users just enough permissions so they can carry out their duties.

## Monitoring users

AWS CloudTrail can monitor your accounts' activities.

## Temporary permissions

With the Security token Service (STS) you can grant temporary permissions to IAM users.

## Usage and costs

Use AWS Cost and Usage Report to track your costs and usage of your services.

## Protecting your assets

In general:
- encrypt all your data in the cloud whenever possible
- limit and monitor access to your services and data as much as possible
- use versioning for objects in buckets so you can restore previous versions