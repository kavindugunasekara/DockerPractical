# Dockerfile for the client
FROM node:20.14.0

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm","run" ,"dev"]