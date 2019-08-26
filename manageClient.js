let clients = [];
let count = 0;

const broadcastPeers = io => {
	io.emit('peers', clients.map(client => {
		const peer = {...client};
		delete peer.socket;
		return peer;
	}));
}

module.exports = io => socket => {

	const id = count++;

	const client = {
		id,
		username: `user ${id}`,
		socket
	};
	clients.push(client);

	socket.on('disconnect', () => {
		clients = clients.filter(other => other !== client);
		broadcastPeers(io);
	});

	socket.on('username', username => {
		client.username = username;
		broadcastPeers(io);
	})

	socket.on('dispatch', data => {
		clients
			.filter(client => data.to.includes(client.id))
			.forEach(client => client.socket.emit(data.type, data.payload));
	})

	socket.emit('id', client.id);
	broadcastPeers(io);

};