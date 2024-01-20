FROM node:20-alpine

WORKDIR /app


COPY package.json ./
COPY yarn.lock ./

RUN mkdir ./fest-web-client
RUN mkdir ./fest-web-client/client

COPY ./fest-web-client/client/ /app/fest-web-client/client/
RUN cd ./fest-web-client/client && npm install && npm run build && cd ../../

RUN yarn install

COPY ./ ./

RUN yarn build

CMD yarn start