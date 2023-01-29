const express =require('express');
const server = express();
server.set('view engine','ejs')
server.get("/profile/:name",function(req,res){
    //console.log(req.params.name);
    data={email:'test@test.com',address:'noida',skills:['node','php','angular']}
    res.render('profile',{name:req.params.name,data:data});
})
server.listen(4900);
