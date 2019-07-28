FROM openjdk:8-jdk-alpine

ENV APP_HOME=/usr/app/
WORKDIR $APP_HOME
VOLUME $APP_HOME

ENTRYPOINT [ "./gradlew", "bootRun" ]
