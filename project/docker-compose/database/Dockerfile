FROM mysql:latest

ENV MYSQL_USER adam
ENV MYSQL_ROOT_PASSWORD password
ENV MYSQL_DATABASE database

ADD fillDB.sql /docker-entrypoint-initdb.d

EXPOSE 33060