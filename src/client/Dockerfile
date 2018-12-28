FROM node:10-slim

WORKDIR /opt/

RUN npx create-react-app app

COPY ./package.json ./app

RUN npm --prefix /opt/app install

CMD npm --prefix /opt/app start