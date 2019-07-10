var express = require("express");
var router = express.Router();

var Campground = require("../models/campground");
var Comment = require("../models/comment");

var middleware = require("../middleware");

router.get("/",function(req,res){
   Campground.find({},function(err,campgrounds){
       if(err)
            console.log(err);
        else{
           // res.render("campgrounds/index", {campground : campgrounds});
            res.render("campgrounds/index", {campground : campgrounds, page: 'campgrounds'});
        }
   })
  
})

//NEW
router.get("/new",middleware.isLoggedin,function(req,res){
    res.render("campgrounds/new");
})

//CREATE
router.post("/",middleware.isLoggedin,function(req,res){
    var newcampName= req.body.name;
    var newcampImage= req.body.image;
    var newcampPrice = req.body.price;
    var newcampDescription=req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    
    var obj = {
        name: newcampName , image : newcampImage , price: newcampPrice , description : newcampDescription, author : author
    }
    
     Campground.create(obj,function(err,obj){
        if(err)
            console.log(err);
        else
        {
          // console.log("hi");
            console.log(obj);
            res.redirect("/campgrounds");
        }
    })
    
   // campground.push(obj);
    //res.redirect("/campgrounds");
})

//SHOW
router.get("/:id",function(req,res){
    Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
       if(err)
            console.log(err);
        else{
            console.log(foundCampground);
            res.render("campgrounds/show", {campground : foundCampground});
            //console.log(foundCampground);
        }
   })
    
    //res.send("show page");
})


//EDIT
router.get("/:id/edit",middleware.checkCampgroundOwnership, function(req,res){
    Campground.findById(req.params.id,function(err,campground){
        if(err)
        {
            res.redirect("/campgrounds");
        }
        else{
             res.render("campgrounds/edit", {campground : campground});
        }
    })
})

//UPDATE
router.put("/:id",middleware.checkCampgroundOwnership,function(req,res){
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err,campground){
        if(err)
            res.redirect("/campgrounds");
        else
        {
            res.redirect("/campgrounds/"+req.params.id);
        }
    })
})

//DELETE
router.delete("/:id",middleware.checkCampgroundOwnership,function(req,res){
    Campground.findByIdAndRemove(req.params.id,function(err){
        if(err)
            res.redirect("/campgrounds");
        else
            res.redirect("/campgrounds");
    })
})


module.exports = router;
