var nodeJsWebSocket = require('nodejs-websocket');
var server = nodeJsWebSocket.createServer(function(conn){
	conn.on('text', function(msg){
		server.connections.forEach(con => con.sendText(msg));
	})
});
server.listen(9090);