'use strict';
const express = require('express');
const app = express();
const path = require('path');
const registerRoutes = require('./routes');
const { errorHandler, notFound } = require('./middleware/errorMiddleware.js');

// server config
const port = process.env.PORT || 3000;

//1. Configure the server so it serves the static assets (index.html etc.) from the public folder
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) =>
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'))
);

// register routes
registerRoutes(app);

app.use(notFound);
app.use(errorHandler);

// create server start method
const start = () => {
  return new Promise((resolve, reject) => {
    // start the server
    app.listen(port, () => {
      console.log(`Connected to Port ${port}`);
      resolve();
    });
  }).catch((error) => {
    console.log(`failed to start server => ${error.message}`);
  });
};

module.exports = start;
