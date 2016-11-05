'use strict';

const koa = require('koa');

const mongoose = require('mongoose');

const config = require('./config');
const setupServer = require('./setting');
const applyRoutes = require('./routes');


mongoose.Promise = global.Promise; // todo: remove after mongoose 5 will be released
mongoose.connect(config.get('db:connectionString'));

const app = koa();
app.name = 'Lunch time'; // Just because I can.

setupServer(app);
applyRoutes(app);

app.listen(config.get('port'));
