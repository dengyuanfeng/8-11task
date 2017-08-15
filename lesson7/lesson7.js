/**
 * Created by Administrator on 2017/8/12.
 */
var http = require('http');
http.get(process.argv[2], function callback(response) {
    response.setEncoding('utf8');
    response.on('data',console.log);
});