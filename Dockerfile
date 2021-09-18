FROM node

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY package*.json ./

USER root

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "app.js" ]