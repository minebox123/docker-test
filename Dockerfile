FROM node:alpine3.11

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 8080

CMD [ "npm", "run", "start" ]
