'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const corsOptions = {
  origin: 'https://vehicle-maintenance.netlify.app', // Adjust this to match your front-end URL
  optionsSuccessStatus: 200
};



const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');

const authRoutes = require('./auth/routes.js');
const v1Routes = require('./routes/v1.js');
const v2Routes = require('./routes/v2.js');

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

// Custom Middleware
app.use(logger);

// Custom Routes
app.use('/auth', authRoutes); // access users
app.use('/api/v1', v1Routes); // no authentication
app.use('/api/v2', v2Routes); // bearer authentication

// Error Handlers
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
