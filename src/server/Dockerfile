FROM node:10-slim

WORKDIR /opt/app

COPY ./package.json /opt/app

RUN yarn

EXPOSE 8080

CMD yarn start
