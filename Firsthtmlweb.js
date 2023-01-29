let http =require('http');
let page =`
<h1>Hello Node</h1> 
<input type='text'/><br> <br>
<input type='text'/><br> <br>
<input type='text'/>`
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':"text/html"});
    res.write(page);
    res.end();
}).listen(5000);