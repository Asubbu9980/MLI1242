var mongoose=require("mongoose");
var {Schema}=mongoose;

var menuSchema1=new Schema({
    name:String,
    imgsrc:String,
    rating:String,
    cost:Number,
    symbol:String,
    desc:String
})

var menuModel1=mongoose.model("maincourses",menuSchema1)

module.exports=menuModel1;