FROM node:18-alpine
WORKDIR /demo-nest
RUN pwd
COPY package*.json /demo-nest
RUN npm install
COPY . /demo-nest
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]