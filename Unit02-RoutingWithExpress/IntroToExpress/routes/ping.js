var express = require('express');
var router = express.Router();

// Called from app.js when route is /ping
router.head('/', function (req, res) {
  res.writeHead(200, {
    'Content-Type' : 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin' : '*',
    'NewTorontoGroup' : 'Node.js Training',
    'Cache-Control' : 'no-cache'
  });
  res.end();
});

module.exports = router;