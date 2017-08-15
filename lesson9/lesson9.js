/**
 * Created by Administrator on 2017/8/12.
 */
var http = require('http')
var bl = require('bl');

for(var i = 2;i<process.argv.length;i++){
    http.get(process.argv[i], function (response) {
        response.pipe(bl(function (err, data) {
            if(err){console.log('错误');return}
            data = data.toString()
            console.log(data.length)


            // console.log(data)
        }))
    })
}


//js 157 bd 14278 td 258
