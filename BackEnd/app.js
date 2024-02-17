const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/index');
const middleware = require('./middlewares/error.handler');
//middleware
app.use(cors());
app.use(express.json());

//error handler
app.use(middleware.notFound);
app.use(middleware.errorHandler);

//routes
app.use('/', routes);

module.exports = app;
