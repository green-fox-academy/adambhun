# Prerequisites

 - Terraform
 Installing terraform (on Linux Mint):
  - Download terraform
  - Extract the archive to /usr/local/bin
  - To test the installation, give the `terraform` command. 

 - AWS
  - AWS User
  - EC2 Key pair
  You need this key pair to ssh into your EC2 instance, so you can execute commands in it. To create one, sign in to AWS management console, and go to the EC2 dashboard. Click on `Key pairs` on the left. Name your key pair, create it and save the ".pem" file created in the process. You will need it later.

# Creating the script

[My repo](https://github.com/green-fox-academy/adambhun/tree/master/project/Code%20as%20Infrastructure)

In order to make my code transparent and reusable, I divided them to three different files:

 - aws.tf

 This file deals with AWS related resources. The variables are also declared here - they are referenced in another file as well, but that is not a problem, because of Terraform's declarative approach.
 The `provider` block defines the AWS region in which to deploy the instances, and handles the IAM user authentication.
 The `aws_security_group` defines access to the instances.

 - terraform.tfvars

 The values of the variables are defined in this file, so the rest of the code is reusable. 
 In order to ues this file, append `-var-file="terraform.tfvars"` to the terraform command you want to use.
 Note: there are other ways to declare and use variables, but they are not used in this process.
 To use variables - in the other files - they should be referenced in using the following format:
 `key = "${var.variable_name}"`

 - instances.tf

 This file defines the resources to be deployed. Example of a resource and explanation:
 ```
 resource "aws_instance" "staging" {
  ami = "ami-0f0fb38cd5492b1aa"
  instance_type = "t2.micro"
  key_name = "${var.key_name}"
  security_groups = [
    "${aws_security_group.ec2-allow-all.name}"
  ]

    tags {
    Name = "mal-ops-adam-staging"
  }

  connection {
    type = "ssh"
    user = "ec2-user"
    private_key = "${file("./mal-ops-adm.pem")}"
  }

  provisioner "file" {
    source      = "script.sh"
    destination = "/tmp/script.sh"
  }

  provisioner "remote-exec" {
    inline = [
      "chmod +x /tmp/script.sh",
      "/tmp/script.sh args",
    ]
  }
}
 ```

 The two strings after resource are arbitrary.
 `ami` defines the amazon machine image to be used. [Check this site](https://aws.amazon.com/amazon-linux-ami/) to decide which image to use. AMI names depend on region and OS, so don't just copy the ones I used.
 `instance_type` stands for the the type of machine to use for the instance.
 `key_name` is the name of your EC2 key pair.
 `security_groups` is the array of AWS security groups the instance subscribes to.
 
 The connection block defines how an IAM user can connect to the instance. The standard user for an EC2 instance is "ec2-user", so root won't work. Refer to the `.pem` file you got when creating your EC2 key pair with this line:
 `private_key = "${file("./mal-ops-adm.pem")}"`

 The provisioner blocks let you execute commands on your instance.
 To execute commands directly encapsulate them as shown above in the `remote exec` provisioner.
 The `'provisioner "file"'` above executes commands from a file. Source is the file on your local computer, which should be in the same folder as your .tf files.
 Destination should be `/tmp/yourscript.sh".
 This copies the file to the instance. Now you need to add execution right to the file and execute it. The ` provisioner "remote-exec"` above does that.

# Running the script

To test the script and see what id would do, run the terraform plan command. Eg.:
`terraform plan -var-file="terraform.tfvars"`

To run the script give this command:
`terraform apply -var-file="terraform.tfvars"`

The terraform destroy command undoes everything the terraform apply command does. Eg.:
`terraform destroy -var-file="terraform.tfvars"`