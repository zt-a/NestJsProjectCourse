FROM node:18.19-alpine

WORKDIR /app

COPY package*.json ./

RUN npm config set fetch-timeout 600000
RUN npm install || npm install || npm install

COPY . .

COPY ./dist ./

CMD ["npm", "run", "start:dev"]