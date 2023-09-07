FROM node:latest

WORKDIR /front

ENV CI=true

RUN npm install -g create-react-app

COPY package*.json ./

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
