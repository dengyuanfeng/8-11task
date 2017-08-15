/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require('fs')
console.log( fs.readFileSync('./test.txt').toString().split('\n').length)