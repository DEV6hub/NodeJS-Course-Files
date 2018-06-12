//Lightweight temporary webserver to testing app in local dev enviornment.

var connect = require('connect'),
    PORT = 8081;
connect.createServer(connect.static(__dirname)).listen(PORT);
console.log('Server listening on port: ' + PORT);
