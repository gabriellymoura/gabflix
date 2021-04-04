## Pontos importantes da aula


- Configurar o eslint, rodar na raíz do projeto:

```js
npx eslint --init
```

- Regra que alteramos na aula no arquivo .eslintrc.js

```json
{
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }]
  }
}
```

> Atenção!!! Pode ocorrer o exato bug do vídeo, nós resolvemos alterando a versão do eslint no package.json

- Instalar os prop-types
```js
npm install prop-types
````

============================

- Para criar sua conta na Heroku, acesse esse link: https://signup.heroku.com/login

- Faça as configurações para criar um projeto como fizemos no vídeo, vá pausando para ficar mais fácil :)

- Instalar o Json Server: https://github.com/typicode/json-server

```js
npm install json-server
````

- Você pode pegar o modelo do DB Json aqui nesse gist, lembre-se de que você precisa ter pelo menos essa estrutura básica:

```js
{
  "categorias": [
    {
      "id": 1,
      "titulo": "Front End",
      "cor": "#6BD1FF",
      "link_extra": {
        "text": "Formação de Front End na Alura",
        "url": "https://www.alura.com.br/cursos-online-front-end"
      }
    }
   ],
  "videos": [
    {
      "id": 1,
      "categoriaId": 1,
      "titulo": "SEO com React",
      "url": "https://www.youtube.com/watch?v=c8mVlakBESE"
    }
  ]
}
```

- O código do arquivo server.js ta aqui:

```js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const port = process.env.PORT || 8080;

server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log(`JSON Server is running in ${port}`)
}) 
```

- Para rodar tudo junto, lembre-se se instalar:

```sh
npm install --save-dev concurrently
```

- E de alterar os scripts no package.json

```json
"scripts": {
  "start": "node ./server.js",
  "dev": "concurrently \"react-scripts start\" \"node ./server.js\"",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "server:static": "json-server --watch ./src/data/db.json --port 8080",
  "server": "node ./server.js"
},
```