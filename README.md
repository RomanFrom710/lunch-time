# lunch-time

## npm scripts
* *npm start* &mdash; runs both the server and the client with bundles building.
* *npm run start-client* &mdash; runs the client.
* *npm run start-server* &mdash; runs the server.
* *npm test* &mdash; run both server and client tests.
* *npm run test-server* &mdash; run server tests via jasmine.
* *npm run test-client* &mdash; run client tests via karma.
* *npm run coverage* &mdash; run test coverage tool.

## Environment variables

* *NODE_ENV* === 'production' &mdash; by default, enables minification.
* *NODE_ENV* === 'development' &mdash; enables webpack Hot Module Replacement.


### keys
#### cookies
* *KEYS_COOKIE* &mdash; your cookie key.

#### vk
* *KEYS__VK__ID* &mdash; your application ID.
* *KEYS__VK__SECRET* &mdash; your application secret key.

### db
* *DB__CONNECTIONSTRING* &mdash; connection string for your MongoDB.
* *DB__TESTCONNECTIONSTRING* &mdash; connection string for your MongoDB for backend tests.

### server
* *ENDPOINTS_APIURL* &mdash; URL for API calls.
* *ENDPOINTS_APIPORT* &mdash; port number for the API server.
* *ENDPOINTS_CLIENTPORT* &mdash; port number for the client.

### admin
Use these variables only to create the first admin account. It'll be created automatically.
Set them and delete them right after starting the server for security reasons.
* *ADMIN__USERNAME* &mdash; admin's username.
* *ADMIN__PASSWORD* &mdash; admin's password.

## For WebStorm users
Disable "safe write" option if you have troubles with webpack dev middleware.
