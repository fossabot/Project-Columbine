FROM node:15-alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

#Caso queira startar o modulo de musica "Lavalink" adicionar dentro dos colchetes ["npm", "run", "start:music"]
CMD ["npm", "start"]