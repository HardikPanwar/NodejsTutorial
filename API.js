let http = require('http');
const { json } = require('stream/consumers');
var data =[
          {name:"Hardik",age:"20",Email:"hardik@gmail.com"},
          {name:"shubham",age:"20",Email:"shubh@gmail.com"},
          {name:"yashwardhan",age:"20",Email:"yash@gmail.com"},
          {name:"tanveer",age:"20",Email:"tanveerpajii@gmail.com"},
          {name:"pratik",age:"20",Email:"pratik@gmail.com"},
          {name:"Samkit",age:"20",Email:"samkitgathiya@gmail.com"}
        ]
http.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type':'application\json'})
    res.write(JSON.stringify(data));
    res.end();

}).listen(4000);