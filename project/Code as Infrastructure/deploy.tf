provider "aws" {
  access_key = ""
  secret_key = ""
  region = "eu-central-1"
}

resource "aws_instance" "Staging" {
  ami = "ami-0f0fb38cd5492b1aa"
  instance_type = "t2.micro"
}


resource "aws_instance" "Dev" {
  ami = "ami-0f0fb38cd5492b1aa"
  instance_type = "t2.micro"
}


resource "aws_instance" "Production" {
  ami = "ami-0f0fb38cd5492b1aa"
  instance_type = "t2.micro"
}