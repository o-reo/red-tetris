FROM node:10-slim

#RUN npx create-react-app /opt/app

WORKDIR /opt/app

COPY ./package.json .

RUN yarn

CMD yarn start
