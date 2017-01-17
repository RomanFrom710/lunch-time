'use strict';

const koa = require('koa');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // todo: remove after mongoose 5 will be released

const config = require('./config');
const setup = require('./setup');


mongoose.connect(config.get('db:connectionString'));

const app = koa();
app.name = 'Lunch time'; // Just because I can.

setup(app);

app.listen(config.get('port'));
