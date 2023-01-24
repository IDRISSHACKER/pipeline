FROM node:lts-alpine as dev
WORKDIR /app
COPY package*.json ./
COPY . app
