# Node + React + Typescript Starter Kit

Everything is written in Typescript.
This makes it possible to share code between the server and the client and get strong type checking.

There's a single server that host the API and the client code. This makes the project simpler, and avoids cross domain problems.

Front :

* Typescript
* React
* React Router
* Redux
* Webpack
* Babel
* SASS
* Hot reloading

Back :

* Node
* Typescript
* Express

### install

```
npm install
npm run dev
```

### Start in debug mode

```
npm run dev
```

then open your browser on localhost:5555

### To run the project in production:

```
# Build the server and client files.
npm run build

# Run the server 
npm start
```

### Deployment to heroku

Everything is already setup to work on heroku. 
Just push your app to heroku.

```
git remote add heroku https://git.heroku.com/xxxx.git
git push heroku master
```