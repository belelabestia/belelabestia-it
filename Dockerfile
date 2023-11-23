FROM node:20-alpine as build
COPY . /repo
WORKDIR /repo
RUN npm ci
RUN npm run build
CMD npm run serve