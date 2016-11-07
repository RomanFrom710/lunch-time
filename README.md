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
### keys
#### cookies
* *cookieKey* &mdash; your cookie key.

#### vk
* *keys__vk__id* &mdash; your application ID.
* *keys__vk__secret* &mdash; your application secret key.

### db
* *db__connectionString* &mdash; connection string for your MongoDB.

## For WebStorm users
Disable "safe write" option if you have troubles with webpack dev middleware.
