
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require ("body-parser");
const path = require('path');
const app = express();

app.use(express.static(__dirname + "/client/dist"));
app.use(express.static(__dirname+"/client/src/components"))
// //Config DB 
const URI = require("./config/keys").mongoURI;
console.log(URI)
mongoose.connect( URI, { autoIndex: false });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log(" we're connected");
});

app.use(bodyParser.json());
const Item = require("./models/item.js").Item;
const Imgs = require("./models/item.js").Imgs;
const rev = require("./models/item.js").rev;
const userinfo = require("./models/item.js").Userinfo;
const others = require("./models/item.js").Others;
const Work = require("./models/item.js").Work;





app.get("/imgs/:id", (req, res) => {
 Imgs.find({projectid:req.params.id})
    .then(Imgs => res.json(Imgs));
})
app.get("/relate", (req, res) => {
    console.log("relate server", req.body);       
    others.find({},(err,data)=>{
        console.log(data)
        res.send(data)
    })
//     others.find({})
//        .then( 
//            relate => res.json(relate));
   })

app.get("/userinfo", (req, res) => {
    userinfo.find({})
       .then(Userinfo => res.json(Userinfo));
   })
   app.get("/information", (req, res) => {
    Work.find({}).limit(1)
       .then(Work =>{ console.log("wwwwwww",Work);res.json(Work)});
   })

   app.get("/Reviewers", (req, res) => {
console.log("he.....")
    rev.find({})
       .then(Userinfo =>{ 
           console.log("fffffff",Userinfo)
            res.json(Userinfo)});
        
      
   })
app.post("/items", (req, res) => {
 const newItem = Item({ name: req.body.name})
 newItem.save().then(item => res.json(item));
})
if(process.env.NODE_ENV ==='production'){
    app.use(express.static("client/build"));
    app.get("*", (req,res) =>{
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));//relative path

    });
}
const port = process.env.PORT || 5000;
app.listen(port, () => {
console.log("server started on port" + port)});





