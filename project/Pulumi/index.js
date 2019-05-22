"user strict";

const aws = require("@pulumi/aws");

let size = "t2.micro";
let ami = "ami-0f0fb38cd5492b1aa";
let userData =`#cloud-boothook
#!/bin/bash                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
sudo su \
&& curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh \
&& chmod +x install.sh \
&& ./install.sh \
&& chmod +x ~/.nvm/nvm.sh \
&& . ~/.nvm/nvm.sh \
&& nvm install 4.4.5 \
&& yum install -y git \
&& git clone https://github.com/green-fox-academy/malachite_ops_adam_ec2.git \
&& cd malachite_ops_adam_ec2 \
&& npm install \
&& npm install pm2 -g \
&& pm2 start hello.js`;

let group = new aws.ec2.SecurityGroup("webserver-secgrp", {
  ingress: [
    { protocol: "tcp", fromPort: 22, toPort: 22, cidrBlocks: ["0.0.0.0/0"] },
    { protocol: "tcp", fromPort: 9005, toPort: 9005, cidrBlocks: ["0.0.0.0/0"] },
    { protocol: "tcp", fromPort: 80, toPort: 80, cidrBlocks: ["0.0.0.0/0"] },
    { protocol: "tcp", fromPort: 443, toPort: 443, cidrBlocks: ["0.0.0.0/0"] }
  ],
  egress: [
    { protocol: "tcp", fromPort: 22, toPort: 22, cidrBlocks: ["0.0.0.0/0"] },
    { protocol: "tcp", fromPort: 9005, toPort: 9005, cidrBlocks: ["0.0.0.0/0"] },
    { protocol: "tcp", fromPort: 80, toPort: 80, cidrBlocks: ["0.0.0.0/0"] },
    { protocol: "tcp", fromPort: 443, toPort: 443, cidrBlocks: ["0.0.0.0/0"] }
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