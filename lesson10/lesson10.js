/**
 * Created by Administrator on 2017/8/12.
 */
var net = require('net');
var server = net.createServer( function callback(socket){
    var date = new Date();
    socket.end(date.toLocaleDateString());
});
server.listen(8000);