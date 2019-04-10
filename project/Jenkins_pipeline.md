# Guide to "Jenkins Pipeline" user story

## Webhooks

Webhooks can be installed on repositories or organizations. They trigger on specific events - pull requests in our case, - sending a HTTP POST payload to a specified URL, triggering another event elsewhere.

### Creating webhooks

To set up a webhook, go to the settings page of your repository or organization. From there, click Webhooks, then Add webhook.

<img src="assets/settings.png">

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

`Note: the GitHub Pull Request builder plugin can help with this task. Since it is installed on GFA's Jenkins server, it will be used in this guide as well.`
gh auth
gh integration



After loggin in to Jenkins click on `New item`. Name your job, then choose `Freestyle project` and click on `OK`.

Under the `General` tab choose `Github project` and enter your repo's URL.

Under the `Hubot` tab tick `This project is parameterized`. For the `Credential type` select `Username with password` and enter your 