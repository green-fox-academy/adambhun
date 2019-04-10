# Guide to "Jenkins Pipeline" user story

## Webhooks

Webhooks can be installed on repositories or organizations. They trigger on specific events - pull request in our case, - sending a HTTP POST payload to a specified URL, triggering another event elsewhere.

### Creating webhooks

TBA

## Installing Jenkins - on Linux Mint (optional; Jenkins can be run in a container, or Húli's instance may as well be used)
```
sudo apt update
sudo apt install openjdk-8-jdk
```
JRE may be sufficient as well
```
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt install jenkins
```
## Configuring Jenkins
By default, Jenkins service can be accessed at **http://localhost:8080**.
Jenkins might not start properly for the first time. To restart it enter the command
```
sudo systemctl restart jenkins
```
Now you will have to login for the first time with your admin credentials. Enter "admin" in the "user" field. You can find your initial admin password in the `initialAdminPassword` file located in `/var/lib/jenkins/secrets/`. Root access is needed to the folder.

Jenkins will walk you through the configuration process.

## Creating the job
