'use strict';

const Koa = require('koa');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // todo: remove after mongoose 5 will be released

const config = require('./config');
const setup = require('./setup');
const userService = require('./user/user-service');


mongoose.connect(config.get('db:connectionString'));

const app = new Koa();
app.name = 'Lunch Time API';

setup(app);
userService.updateAdmin();

app.listen(config.get('endpoints:apiPort'));
