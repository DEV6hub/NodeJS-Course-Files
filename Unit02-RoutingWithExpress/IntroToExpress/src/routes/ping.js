import express from 'express';
const router = express.Router();

// Called from promise.js when route is /ping
router.head('/', (req, res) => {
  res.writeHead(200, {
    'Content-Type' : 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin' : '*',
    'NewTorontoGroup' : 'Node.js Training',
    'Cache-Control' : 'no-cache'
  });
  res.end();
});

export default router;