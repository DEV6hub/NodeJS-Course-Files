'use strict';

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var io = new _socket2.default(); /**
                                  * Use "npm install" to install all required node modules
                                  *
                                  * Browse to http://localhost/.../Unit05-Socket.io/test-socket.html e.g. http://localhost/HTML5Courseware/NodeJS/Demos/Unit05-Socket.io/test-socket.html
                                  *
                                  * Open browser console to observe messages.
                                  */

io.listen(3000);

io.on('connection', function (socket) {

  socket.emit('greeting', { message: 'Greetings!', timestamp: new Date() });

  socket.on('tellMeSomething', function (data) {
    console.log('Message from client:', data);
    socket.emit('greeting', { message: 'Hello again and welcome back!', timestamp: new Date() });
  });
});