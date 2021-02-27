FROM node:9-slim
WORKDIR /docker-react

COPY package.json /docker-react
RUN npm install
COPY . /docker-react
CMD ["npm","start"]