/**
 * Created by Administrator on 2017/8/11.
 */
process.argv
// console.log(process.argv.length)
var num = 0;
for(var i = 2;i < process.argv.length;i++){
    num += +process.argv[i]
}
console.log(num);