var mongoose=require("mongoose");
var {Schema}=mongoose;

var menuSchema2=new Schema({
    name:String,
    imgsrc:String,
    rating:String,
    cost:Number,
    symbol:String,
    desc:String
})

var menuModel2=mongoose.model("desserts",menuSchema2)

module.exports=menuModel2;