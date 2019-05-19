sudo touch fdsa.txt
sudo yum check-update
sudo yum update -y
sudo yum install -y docker
sudo service docker start
sudo usermod -aG docker ec2-user
sudo yum install -y git
sudo useradd -s /bin/bash -m -d /home/developer developer
sudo echo "asdf" | sudo passwd developer --stdin
sudo sed -i 's/PasswordAuthentication no/PasswordAuthentication yes/' /etc/ssh/sshd_config
sudo service sshd restart