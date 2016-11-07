'use strict';

const koa = require('koa');

const mongoose = require('mongoose');

const config = require('./config');
const serverSetup = require('./setup');
const applyRoutes = require('./routes');


mongoose.Promise = global.Promise; // todo: remove after mongoose 5 will be released
mongoose.connect(config.get('db:connectionString'));

const app = koa();
app.name = 'Lunch time'; // Just because I can.

serverSetup.configureApp(app);
applyRoutes(app);
serverSetup.setupFileServing(app);

app.listen(config.get('port'));
