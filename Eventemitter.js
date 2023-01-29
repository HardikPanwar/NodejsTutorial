// var fs =require('fs');
// var rs =fs.createReadStream('./demo.txt');
// rs.on('open',function(){
//     console.log("demo file is open")
// })
var events=require('events');
var eventEmitter=new events.EventEmitter();

eventEmitter.on("speak",(name)=>{
    console.log(name ,"is speaking")
})
eventEmitter.emit("speak","peter");