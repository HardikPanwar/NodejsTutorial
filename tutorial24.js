//query params and how to make forms and sumbit them ....(query strings)
const express =require('express');
const server = express();
//add static (CSS file adding in node)
server.use('/assets',express.static('assets'))
server.set('view engine','ejs')
server.get("/profile/:name",function(req,res){
    //console.log(req.params.name);
    data={email:'test@test.com',address:'noida',skills:['node','php','angular']}
    res.render('profile',{name:req.params.name,data:data});
})
server.get("/login",function(req,res){
    //console.log(req.params.name);
    //here we have used query string to make form
    console.log(req.query);
    res.render('login');
})
server.get("/",function(req,res){
    //console.log(req.params.name);
    //this is for 
    res.render('home');
})
server.listen(8080);


