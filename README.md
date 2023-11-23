## Deployment instructions

The web app is running on a pm2 process on Sissi;  
The application files are at ~/belelabestia-it;  
To check pm2 process:

```
pm2 ls
```

After deploy, restart web app, from ~/belelabestia-it:

```
pm2 restart entry.express
```

Caddy server is exposing the web app to the web;  
to reload caddy, from ~/belelabestia-it:

```
caddy reload
```

From the dev machine, in the repo root folder, run:

```
scp -r dist server root@belelabestia.it:belelabestia-it/
```

The site should be automatically updated.

## Deployment instructions

The web app is running on a pm2 process on Sissi;  
The application files are at ~/belelabestia-it;  
To check pm2 process:

```
pm2 ls
```

After deploy, restart web app, from ~/belelabestia-it:

```
pm2 restart entry.express
```

Caddy server is exposing the web app to the web;  
to reload caddy, from ~/belelabestia-it:

```
caddy reload
```

From the dev machine, in the repo root folder, run:

```
scp -r dist server root@belelabestia.it:belelabestia-it/
```

The site should be automatically updated.

## Fastify Server

This app has a minimal [Fastify server](https://fastify.dev/) implementation. After running a full build, you can preview the build using the command:

```
npm run serve
```

Then visit [http://localhost:3000/](http://localhost:3000/)

## Fastify Server

This app has a minimal [Fastify server](https://fastify.dev/) implementation. After running a full build, you can preview the build using the command:

```
npm run serve
```

Then visit [http://localhost:3000/](http://localhost:3000/)
