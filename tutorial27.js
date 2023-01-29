// Inseting data into mongodb;;;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const locat = require ('./models/users')
mongoose.connect('mongodb+srv://Hardik_panwar_63:PikachuAlone!123@cluster0.bg9li.mongodb.net/Tutorial?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology : true
});
const data =new locat({
    _id:new mongoose.Types.ObjectId(),
    name :"Hardik panwar",
    email : "hardikpanwar09@.com",
    address :" airport road"
});
data.save().then((result)=>{
    console.log(result);
})
.catch(err=>console.warn(err)
)