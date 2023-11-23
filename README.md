# belelabestia.it

Personal professional site.

## Quick setup

Install deps:

```sh
npm i
```

Run dev env:

```sh
npm start
```

Build with fastify:

```sh
npm run build.server
```

## Deployment instructions

Build using compose:

```sh
docker compose up -d --build
```

## Static Site Generator (Node.js)

```shell
npm run build.server
```

## Fastify Server

This app has a minimal [Fastify server](https://fastify.dev/) implementation. After running a full build, you can preview the build using the command:

```
npm run serve
```

Then visit [http://localhost:3000/](http://localhost:3000/)
