const express = require('express');
const app = express();
const mongoose = require('mongoose');
const locater = require ('./models/users')
mongoose.connect('mongodb+srv://Hardik_panwar_63:PikachuAlone!123@cluster0.bg9li.mongodb.net/Tutorial?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology : true
});
app.get('/users',(req,res)=>{
     locater.find().then((data)=>{
        res.status(201).json(data)
    })
})
app.listen(4900);