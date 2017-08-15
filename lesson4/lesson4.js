/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require('fs')
fs.readFile('test.txt',function callback(err,data) {
    if (err){
        console.log(err);
    }
    console.log(data.toString().split('\n').length)
})