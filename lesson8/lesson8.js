/**
 * Created by Administrator on 2017/8/12.
 */
var http = require('http');
var bl = require('bl');
http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if(err){console.log('错误');return}
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})