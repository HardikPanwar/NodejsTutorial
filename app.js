// Routing means when we make an application then it cant run only on one url...
const express =require('express');
const server =express();
server.get('/home',(req,res)=>{
    res.end("Hello this is home page")
});
server.get('/about',(req,res)=>{
    res.end("Hello this is about page")
});
server.get('/login',(req,res)=>{
    res.end("Hello this login page")
});
server.post('/login',(req,res)=>{
    res.end("Hello this login page post")
});
server.put('/login',(req,res)=>{
    res.end("Hello this login page put")
});
server.delete('/login',(req,res)=>{
    res.end("Hello this login page delete")
});

//middleware when user send request to server for access then the layer between the request and response then it is said to be middleware

server.listen(4500);