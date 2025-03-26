FROM node:22.12-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

COPY apps/client/package.json ./apps/client/package.json

RUN corepack enable
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build-client

EXPOSE 8080
