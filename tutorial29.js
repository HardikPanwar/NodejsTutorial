// Make post router
//add JSON body parser package
//apply body-parser
//write a code to save data in mongoDb
//tset with post man
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const locater = require ('./models/users');
var bodyParser = require('body-parser');
let jsonParser = bodyParser.json();
mongoose.connect('mongodb+srv://Hardik_panwar_63:PikachuAlone!123@cluster0.bg9li.mongodb.net/Tutorial?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology : true
});
app.get('/users',(req,res)=>{
     locater.find().then((data)=>{
        res.status(201).json(data)
    })
})
app.post('./user',jsonParser,(req,res)=>{
    res.end("Hello API will be here");
})
app.listen(5000); 
// tommorow TAsk i,e:-
/* Video no. 31 to 39 2pm to 4:15pm  as son as possible..(NODE).
and at night 9:00 o'clock to 12 'clock complete the data structure tutorial as much as i can */