var express = require('express');
var router = express.Router();

const userModel = require("./users");
const postModel = require("./cart");
const passport = require("passport");
const localStrategy = require("passport-local");

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login2');
});
router.get('/menu',function(req,res,next){
  res.render('menu');
});
router.get('/contact',function(req,res,next){
  res.render('contact');
});
router.get('/payment',function(req,res,next){
  res.render('payment');
});
router.get('/success',function(req,res,next){
  res.render('popup');
});
router.get('/cart',function(req,res,next){
  res.render('cart');
});
router.get('/index',function(req,res,next){
  res.render('index');
});
router.get('/addtocart',function(req,res,next){
  res.render('test');
});
router.get('/pizza',function(req,res,next){
  res.render('pizzahut');
});
router.get('/burger',function(req,res,next){
  res.render('burger');
});

// router.get('/signup',function(req,res,next){
//   res.render('signup');
// });
router.get('/pizzahut',function(req,res,next){
  res.render('pizzahut');
});

router.post('/register', function(req,res) {
  const userdata = new userModel({
    username : req.body.username,
    email : req.body.email,
    
  });
  userModel.register(userdata , req.body.password).then(function(registereduser){
    passport.authenticate("local")(req,res,function(){
      res.redirect('/index');
    })
  })
});

router.post("/signin",passport.authenticate("local", {
  successRedirect : "/index",
  failureRedirect : "/login2"
}),function(req,res){})

router.get('/logout',function(req,res,next){
  req.logout(function(err){
  if (err) { return next(err); }
  res.redirect('/login2');
});

});

function isLoggedIn(req,res,next){
if(req.isAuthenticated()){
  return next();
}
res.redirect("/");
}







module.exports = router;
