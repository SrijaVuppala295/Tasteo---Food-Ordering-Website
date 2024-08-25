var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/SDC");

// const userSchema = mongoose.Schema({
//   username: String,
//   name: String,
//   email: String,
//   password: String,
//   profileImage: String,
//   contact: Number,
//   boards: {
//     type: Array,
//     default: []
//   },
//   posts: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "post"
//     }
//   ]
// });

const userSchema = mongoose.Schema({
 
  username : String,
  email : String,
  password : String,
 
});


// const logInSchema=new mongoose.Schema({
//   name:{
//       type:String,
//       required:true
//   },
//   password:{
//       type:String,
//       required:true
//   }
// })

// const LogInCollection=new mongoose.model('Collection',logInSchema)

// module.exports=LogInCollection;

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);
