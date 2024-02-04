FROM node:alpine

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

ENV PORT=9000

CMD ["npm", "start"]