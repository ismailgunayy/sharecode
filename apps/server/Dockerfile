FROM node:22.14-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY apps/server/package.json ./apps/server/package.json

RUN corepack enable
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build:server

EXPOSE 8023
