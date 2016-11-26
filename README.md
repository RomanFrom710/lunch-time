# lunch-time

## npm scripts
* *npm start* &mdash; runs the server.
* *npm run build-dev* &mdash; compiles everything in dev mode without HMR.
* *npm run build-prod* &mdash; compiles everything in production mode.
* *npm run test-server* &mdash; run server tests via jasmine.
* *npm run test-client* &mdash; run client tests via karma.
* *npm test* &mdash; run both server and client tests.
* *npm run nodemon* &mdash; start server with nodemon (you must build client part before it).

## Environment variables

* *NODE_ENV* === 'production' &mdash; by default, enables minification.
* *NODE_ENV* === 'development' &mdash; enables webpack Hot Module Replacement.
* *NODE_ENV* === 'nodemon' &mdash; the same as *production*, but enables errors in console on the server.


### keys
#### cookies
* *COOKIEKEY* &mdash; your cookie key.

#### vk
* *KEYS__VK__ID* &mdash; your application ID.
* *KEYS__VK__SECRET* &mdash; your application secret key.

### db
* *DB__CONNECTIONSTRING* &mdash; connection string for your MongoDB.

### server
* *PORT* &mdash; your port number.

### admin
Use these variables only to create the first admin account. It'll be created automatically.
Set them and delete them right after starting the server for security reasons.
* *ADMIN__USERNAME* &mdash; admin's username.
* *ADMIN__PASSWORD* &mdash; admin's password.

## For WebStorm users
Disable "safe write" option if you have troubles with webpack dev middleware.
