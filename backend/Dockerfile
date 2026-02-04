ARG NODE_VERSION=22.18.0
FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV development
WORKDIR /src/app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
