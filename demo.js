let http =require('http');
var fs = require('fs');
http.createServer((req,res)=>{
    fs.readFile('demo.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data);
        return res.end();
    })
}).listen(5000);