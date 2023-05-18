var mongoose=require("mongoose");
var {Schema}=mongoose;

var menuSchema=new Schema({
    name:String,
    imgsrc:String,
    rating:String,
    cost:Number,
    symbol:String,
    desc:String
})

var menuModel=mongoose.model("menus",menuSchema)

module.exports=menuModel;