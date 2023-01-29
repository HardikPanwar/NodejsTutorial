const http =require('http');
const uc = require('upper-case');

http.createServer(function(req,res){
    res.write(uc.upperCase("hello"));
    res.end();
}).listen(3900);