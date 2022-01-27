
FROM node:10-alpine as build-step

ENV APP_HOME /app
WORKDIR $APP_HOME
COPY . ./

RUN yarn

RUN yarn start:dev
