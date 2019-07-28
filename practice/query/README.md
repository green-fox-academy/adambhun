# Teaching Material Query Service

The Teaching Material Query Service is a RESTful API which can be used to query various types of teaching materials. Internally the services uses a cached version of the teaching materials so that every request can be served faster and more reliable than retrieving and parsing the teaching materials upon every request.

It uses Spring Boot stack and Amazon DynamoDB for the cache.

## Project setup

### System Requirements

- JDK 8
- Docker
- IntelliJ Idea (optional but recommended)
- RabbitMQ (Requires Erlang/OTP to be installed first)

Clone the repository and open in your IDE.

### Application Properties

Copy the `application.properties` file to `application-local.properties` and fill the required parameters. 

### Set the active profile to `local`

IntelliJ: use the "Edit Configurations..." menu and set the "Active profiles:" to "local". You can also the the `SPRING_PROFILES_ACTIVE` environment variable to "local".

Alternatively you can add the following parameter to the `java` command line runner`: `-Dspring.profiles.active=local`, e.g.

```bash
java -Dspring.profiles.active=local -jar .\build\libs\teachingmaterialqueryservice-0.0.1-SNAPSHOT.jar
```

### How to build?

You can use the docker image to build the application:

```bash
docker build . --build-arg "version=0.0.2" -t teachingmaterialqueryservice
docker run -p 8080:8080 -e "SPRING_PROFILES_ACTIVE=local" teachingmaterialqueryservice
```

### RabbitMQ
##### About
RabbitMQ is a message broker that accepts messages from a producer, sorts and stores those 
messages into queues, and forwards them. To get familiar with messaging and RabbitMQ, you can 
read the official RabbitMQ tutorials [here](https://www.rabbitmq.com/getstarted.html).  

##### Setup
At it's current state, the Teaching Material Query Service app needs a local RabbitMQ Service 
running on `localhost:5672` (default).

To download RabbitMQ visit this [link](https://www.rabbitmq.com/download.html).
Keep in mind that RabbitMQ **requires** Erlang/OTP to be installed first. You can find 
information about the supported Erlang versions [here](https://www.rabbitmq.com/which-erlang.html).  