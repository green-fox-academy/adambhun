# Guide to "Jenkins Pipeline" user story

### Installing Jenkins - on Linux Mint (optional; Jenkins can be run in a container, or Húli's instance may as well be used)
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
### Configuring Jenkins
By default, Jenkins service can be accessed at **http://localhost:8080**.
Jenkins might not start properly for the first time. To restart it enter the command
```
sudo systemctl restart jenkins
```
Now you will have to login for the first time with your admin credentials. Enter "admin" in the "user" field. You can find your initial admin password in the `initialAdminPassword` file located in `/var/lib/jenkins/secrets/`. Root access is needed to the folder.

Jenkins will walk you through the configuration process.

## Creating the job

After login in to Jenkins click on `New item`. Name your job, then choose `Freestyle project` and click on `OK`.

Under the `General` tab choose `Github project` and enter your repo's URL.

Skip the `Hubot` section.

Under `Source Code Management` (SCM) select `Git` and enter your repo's URL (ending with '.git') if it's a private repo, enter your credentials as well.

In the `Branches to build` section type the names of the branches you wish to track.

Skip to `Build triggers` and select the `Github Pull Request Builder`. (Note that it's a plugin, and it's not installed by default. To install it click on `Manage Jenkins`, and then on `Manage Plugins` and then select `Github Pull Request Builder`.)
Click on the `Advanced` button on the right. Scroll down and tick `Build every pull request automatically without asking (Dangerous!)`.

Find the `Build` section below and click on `Add build step`. Select `GitHub PR: set 'pending' status.

Add `execute shell` as another build step, and specify a command.
Eg.
```
npm init -y
npm install tape
node anagramtest.js
rm -r node_modules
rm package.json
rm package-lock.json
```

Click on the save button.

(My job: http://195.228.147.126:9090/job/mallac-adam/)

## Webhooks

Webhooks can be installed on GitHub repositories or organizations. They trigger on specific events - pull requests in our case, - sending a HTTP POST payload to a specified URL, triggering another event elsewhere.

### Creating webhooks

Create a GitHub repo for this project.

To set up a webhook, go to the settings page of your repository or organization. From there, click Webhooks, then Add webhook.

<img src="assets/settings.png">

The payload URL should look like this: `http://195.228.147.126:9090/ghprbhook/`

`The IP address of your Jenkins server + the number of the port Jenkins listens on + /ghprbhook/`

## Things to note

You can test the connection on Jenkins by clicking on the `Build now` button. Note that passing this test does not guarantee that everything works perfectly.

Also, expect having to wait a lot (eg. 10 minutes) for Jenkins' reaction to a pull request. 