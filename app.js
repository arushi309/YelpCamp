var express = require("express");
var app = express();
var bodyParser=require("body-parser");
var mongoose =require("mongoose");
var flash = require("connect-flash");
var methodOverride = require("method-override");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");

var Campground = require("./models/campground");
var Comment = require("./models/comment");
var User = require("./models/user");

var campgroundRoutes = require("./routes/campgrounds");
var commentRoutes = require("./routes/comments");
var indexRoutes = require("./routes/index");
//var reviewRoutes = require("./routes/reviews");

var seedDB = require("./seeds");

app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended : true}));
app.use(methodOverride("_method"));
mongoose.connect("mongodb://localhost:27017/yelp_camp",{useNewUrlParser: true});
passport.use(new LocalStrategy(User.authenticate()));

app.use(require("express-session")({
    secret: "Blah Blah Blah",
    resave: false,
    saveUninitialized: false
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/",indexRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);
//app.use("/campgrounds/:id/reviews", reviewRoutes);

//seedDB();

app.listen(3000,process.env.IP,function(){
    console.log("server listening");
})


