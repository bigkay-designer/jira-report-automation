FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install


# Bundle app source
COPY . .

EXPOSE 3001

CMD [ "node", "server.js" ]
