var mongoose=require("mongoose");
var {Schema}=mongoose;

var menuSchema3=new Schema({
    name:String,
    imgsrc:String,
    rating:String,
    cost:Number,
    symbol:String,
    desc:String
})

var menuModel3=mongoose.model("beverages",menuSchema3)

module.exports=menuModel3;