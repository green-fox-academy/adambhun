FROM alpine:latest

ENV MYSQL_USER adam

VOLUME /folder

WORKDIR /data
ADD . /hdata

RUN RUN apk add --no-cache nodejs npm \
&& npm install

EXPOSE 9000

ENTRYPOINT ["node"]

CMD ["server.js"]