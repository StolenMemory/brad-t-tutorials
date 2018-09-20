# NODE.JS

## built on Chrome's V8 engine
## it's JS running on the server
## uses an event-driven, non-blocking I/O model
  * works on a single thread using non-blocking I/O calls
  * supports tens of thousands concurrent connections
  * optimizes throughput and scalability in web apps with many I/O operations
  * this makes it extremely fast and efficient
## event loop
  * single-threaded
  * supports concurrency via events and callbacks
  * EventEmmiter class is used to bind events and event listeners
  * EventEmmiters > events > event loop > event handlers
## what can be built with Node.js
  * REST APIs & backend applications
  * realt-time services (chat, games, etc)
  * blogs, social apps
  * utilites & tools
  * anything that is not CPU-intensive
## NPM
  * Node.js Package Manager
  * used to install node programs/modules
  * easy to specify and link dependencies
  * modules get installed into "node_modules" folder
  * npm install express // npm instal -g express (possibility of installing globally for all apps)
## popular modules
  * Express - web dev framework
  * Connect - HTTP server framework
  * Socket.io - server side componenet for websockets
  * Pug/Jade - template engine
  * Mongo/Mongoose - wrappers to interact with MongoDB
  * Coffee-Script - compiler of CS
  * Redis - client library
## package.json file
  * goes into the root of your app
  * tells npm how your package is structured and what to do to install it