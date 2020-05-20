FROM node:10.15-alpine

WORKDIR /app

RUN apk add --no-cache --virtual build-dependencies make gcc g++ python git
COPY ./package*.json ./
RUN npm ci
RUN apk del --virtual build-dependencies

COPY ./ /app