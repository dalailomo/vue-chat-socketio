# Vue and Socket.io

Demo app using Vue and Socket.io

- Runs port `8080`
- It communicates trough web sockets on port `3000`

# Running

## Vue app

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:8080
$ yarn run dev
```

## Server

```bash
# serve on localhost:3000
$ node server.js
```

# Dependencies used

![Usage](/libs.png)

# TL;DR Usage

## Server

![Usage](/quick-1.png)

## Frontend app

![Usage](/quick-2.png)

# TL;DR With Vuex

Emitting an event from the server called `EVENTAKO_HOYGA`, will trigger a mutation commit in the store, prefixed with `SOCKET_`, so in this case the mutation method should be named `SOCKET_EVENTAKO_HOYGA`.

![With vuex](/withvuex.png)
