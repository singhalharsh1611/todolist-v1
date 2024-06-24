const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var items = [];

app.get("/", function(req, res){
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    var dayName = days[d.getDay()];
    res.render("list", {currDay:dayName, newListItem:items});
    
});

app.post("/", function(req, res){
    var item = req.body.newItem;
    console.log(item);
    items.push(item);
    res.redirect("/"); 

});
app.listen(3000, function(){
    console.log("server started on port 3000");
})
