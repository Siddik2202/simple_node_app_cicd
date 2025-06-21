FROM node:18

WORKDIR /app

COPY nodeServer/package*.json ./nodeServer/
WORKDIR /app/nodeServer

RUN npm install 

WORKDIR /app
COPY . .
EXPOSE 3000

CMD ["node","nodeServer/index.js"]
