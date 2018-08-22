import express from 'express';
const router = express.Router();

// GET http://localhost:3000/getClientAddress

router.get('/', function (req, res) {
  res.send('address...');
});

// GET http://localhost:3000/getClientAddress/foobar/

router.get('/foobar', function (req, res) {
  res.send('address/foobar....');
});

export default router;

