# Prerequisites

Docker installed
## Docker Compose

You only need to install it on Linux. On other OS-es it comes with Docker by default.

Open a terminal and enter the following commands:
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

Note: The first command may return with an error. Try again, and it should work eventually.

## Optional: Make Docker commands run without 'sudo'

Open a terminal and enter the following commands:
```
sudo groupadd docker
sudo usermod -aG docker $USER
```

Restart your OS.