/**
 * Use "npm install" to install all required node modules
 *
 * Browse to http://localhost/.../Unit05-Socket.io/test-socket.html e.g. http://localhost/HTML5Courseware/NodeJS/Demos/Unit05-Socket.io/test-socket.html
 *
 * Open browser console to observe messages.
 */
import SocketIO from 'socket.io';

let io = new SocketIO();

io.listen(3000);

io.on('connection', (socket) => {

	socket.emit('greeting', { message : 'Greetings!', timestamp : (new Date()) });

	socket.on('tellMeSomething', (data) => {
		console.log('Message from client:', data);
		socket.emit('greeting', { message : 'Hello again and welcome back!', timestamp : (new Date()) });
	});

});
