resource "aws_instance" "developer" {
  ami           = "ami-0f0fb38cd5492b1aa"
  instance_type = "t2.micro"
  key_name      = "${var.key_name}"
  user_data     = "${file("./text.sh")}"

  security_groups = [
    "${aws_security_group.ec2-allow-ssh.name}",
  ]

  tags {
    Name = "mal-ops-adam-developer"
  }

    provisioner "file" {
    source      = "script.sh"
    destination = "/tmp/script.sh"

    connection {
      type        = "ssh"
      user        = "ec2-user"
      private_key = "${file("./mal-ops-adm.pem")}"
    }
  }

  provisioner "remote-exec" {
    inline = [
      "chmod +x /tmp/script.sh",
      "/tmp/script.sh args",
    ]

    connection {
      type        = "ssh"
      user        = "ec2-user"
      private_key = "${file("./mal-ops-adm.pem")}"
    }
  }

  connection {
    type     = "ssh"
    user     = "developer"
    password = "asdf"
  }
}
