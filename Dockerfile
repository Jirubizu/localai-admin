FROM node:alpine
LABEL authors="jirubizu"

RUN apk update && apk upgrade

RUN mkdir -p /srv/app
COPY . /srv/app

WORKDIR /srv/app


ENTRYPOINT ["npm", "run", "dev"]
EXPOSE 8089