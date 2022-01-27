
FROM node:12.14.1

ENV APP_HOME /app
WORKDIR $APP_HOME
COPY . ./

RUN yarn

CMD yarn start:dev
