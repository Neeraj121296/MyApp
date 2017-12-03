const express=require("express");
const bodyParser=require("body-parser");
const app=express();
var dialog = require('dialog');
const validator=require("express-validator");
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
const User = require("./models/User");
const CRUD = require("./db/crud");
const crudObject= new CRUD();
app.use(express.static("public"));
var counter = 0;
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(validator());
app.get('/welcome',(request,response)=>{
        counter++;
        var d = new Date();
        response.send(`<h2>M.S DHONI FAN COUNT VISIT ${counter} times </h2><br> ::::  ${d}`);
});

app.post('/register', (req,res,next)=>{
    
    var    userid = req.body.Email;
       var  pwd =req.body.Password;
       var frstName=req.body.firstName;
       var   surName=req.body.surName;
       var   bday=req.body.bday;
       var  gender=req.body.gender;
var phone=req.body.phone;

        req.assert("bday").notEmpty();
        req.assert("Email").isEmail();
        req.assert("Password", 'passwords must be at least 5 chars long and contain one number') .isLength({ min: 5 });
        req.assert("firstName",'Invalidfirstname').notEmpty();
        req.assert("surName",'Invalidlastname').notEmpty();
req.assert("phone","contains only number and length will be 10 digits").isNumeric().isLength({min:10});
        console.log(errors);
        var errors=req.validationErrors(true);
        if(!errors){
       
          var userObject= new User(frstName,surName,userid, pwd,bday,gender,phone);
          console.log("Inside Register ",userObject);
          crudObject.addUser(userObject,res);
         
            }
   else{
    dialog.err(JSON.stringify(errors));
    res.send('Errors:'+JSON.stringify(errors),400);
    return;
   }         
   

});

app.post('/login',(req,res)=>{
    console.log("Request ",req.body);
    var userid = req.body.emailId;
    var pwd = req.body.Password;

    var userObject= new User('','',userid, pwd,'','');
    crudObject.fetchUser(userObject,res);
  
});
app.listen(1234,()=>{
console.log("server start");
})