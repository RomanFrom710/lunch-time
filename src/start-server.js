'use strict';


if (process.env.NODE_ENV === 'development') {
    const nodemon = require('nodemon');
    nodemon({
        script: 'src/server/start.js',
        watch: 'src/server/'
    });
} else {
    require('./server/start');
}
