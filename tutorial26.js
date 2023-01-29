// NODE JS WITH MongoDB atlas cloud 
//my ip 157.34.89.231/32
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const users = require('./User');
mongoose.connect('mongodb+srv://Hardik_panwar_63:PikachuAlone!123@cluster0.bg9li.mongodb.net/Tutorial?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        //useFindAndModify: false,// this is just copied from browser
        useUnifiedTopology: true
    });
users.find({}, (err, data) => {
    if (err){
        console.warn(err);
    } 
    else{
        console.warn(data);
    }
   
})
// .then(()=>{
//     console.warn("DB Connection Done ");
// })


