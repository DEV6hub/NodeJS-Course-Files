//Lightweight temporary webserver to testing app in local dev enviornment.

import connect from 'connect';
import http from 'http';
const PORT = 8081;
const app = connect();
http.createServer(app).listen(PORT);
console.log('Server listening on port: ' + PORT);
