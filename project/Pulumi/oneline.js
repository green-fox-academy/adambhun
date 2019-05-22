"user strict";

const aws = require("@pulumi/aws");

let size = "t2.micro";
let ami = "ami-0f0fb38cd5492b1aa";
let userData =`#cloud-boothook
#!/bin/bash
sudo echo "Hello, World!" >> index.html
sudo nohup python -m SimpleHTTPServer 80 &`;

let group = new aws.ec2.SecurityGroup("webserver-secgrp", {
  ingress: [
    { protocol: "tcp", fromPort: 22, toPort: 22, cidrBlocks: ["0.0.0.0/0"] },
    { protocol: "tcp", fromPort: 80, toPort: 80, cidrBlocks: ["0.0.0.0/0"] }
  ],
  egress: [
    { protocol: "tcp", fromPort: 22, toPort: 22, cidrBlocks: ["0.0.0.0/0"] },
    { protocol: "tcp", fromPort: 80, toPort: 80, cidrBlocks: ["0.0.0.0/0"] }
  ]
});

let server = new aws.ec2.Instance("helloWorld", {
  instanceType: size,
  securityGroups: [group.name],
  ami: ami,
  tags: { "Name": "helloWorld"},
  userData: userData,
  keyName: "mal-ops-adm"
});

console.log(process.env);

exports.publicIp = server.publicIp;
exports.publicHostName = server.publicDns;