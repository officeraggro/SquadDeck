FROM node:alpine

WORKDIR /app

COPY . /app

EXPOSE 3001

RUN npm install --legacy-peer-deps

CMD PORT=3001 npm start