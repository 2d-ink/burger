var express = require("express"); 
var router = express.Router(); 
var burger = require("../models/burger")

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {burger_data: data}
        console.log(hbsObject); 
        res.render("index", hbsObject); 

    });
});

router.put("/burgers/update", function(req, res){
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect("/");
    });
});

router.post("/burgers/create", function(req, res){
    burger.create(req.body.burger_name, function(result){
        res.redirect("/");
    })
})
module.exports=router; 