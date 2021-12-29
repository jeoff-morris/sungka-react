FROM node:16.13.0

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install react-scripts@5.0.0 -g

COPY . ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]