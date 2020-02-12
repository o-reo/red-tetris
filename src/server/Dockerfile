FROM node:10-slim

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install

EXPOSE 8080

CMD npm start
