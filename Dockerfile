FROM node:20-alpine as build
COPY . /repo
WORKDIR /repo
RUN npm ci
RUN npm run build

FROM node:20-alpine
COPY --from=build /repo/dist /app/dist
COPY --from=build /repo/server /app/server
WORKDIR /app
RUN npm i fastify undici @fastify/static
CMD ORIGIN=https://belelabestia.it node server/entry.fastify