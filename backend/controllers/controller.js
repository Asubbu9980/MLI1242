const restmodel=require("../models/model")
const usermodel=require("../models/model1")
const itemsmodel=require("../models/model2")
const maincoursemodel=require("../models/model3")
const dessertsmodel=require("../models/model4")
const beveragesmodel=require("../models/model5")
const {verify}=require("jsonwebtoken")

const {hash,compare}=require("bcryptjs")
// require("dotenv/config")
const {createAccessToken,createRefreshToken,sendAccessToken,sendRefreshToken}=require("./tokens")


const getlist=async (req,res,next)=>{
try{
    return  res.json(await restmodel.find())
}
catch(err){
    console.log(err.message);
}
}

const postuser=async (req,res,next)=>{
    try{
        console.log(req.body)
        const hashedPassword=await hash(req.body.password,10)
        await usermodel.create({...req.body,password:hashedPassword}).then(res=>console.log(res)).catch(err=>console.log(err))
    //    return res.json(await usermodel.find())
    return res.send("user created")
    }
    catch(err){
        console.log(err)
    }
}

//admin
const postrest=async(req,res,next)=>{
    try{
        console.log(req.body);
        await restmodel.create({...req.body}).then(res=>console.log(res)).catch(err=>console.log(err));
        return res.send("Restaurant added")
    }
    catch(err){
        console.log(err)
    }
}

//admin

//starters
const postmenu=async(req,res,next)=>{
    try{
        console.log(req.body);
        await itemsmodel.create({...req.body}).then(res=>console.log(res)).catch(err=>console.log(err));
        return res.send("Menu added")
    }
    catch(err){
        console.log(err)
    }
}

//maincourse
const maincourse1=async(req,res,next)=>{
    try{
        console.log(req.body);
        await maincoursemodel.create({...req.body}).then(res=>console.log(res)).catch(err=>console.log(err));
        return res.send("Menu added")
    }
    catch(err){
        console.log(err)
    }
}

//desserts
const desserts1=async(req,res,next)=>{
    try{
        console.log(req.body);
        await dessertsmodel.create({...req.body}).then(res=>console.log(res)).catch(err=>console.log(err));
        return res.send("Menu added")
    }
    catch(err){
        console.log(err)
    }
}

//beverages
const beverages1=async(req,res,next)=>{
    try{
        console.log(req.body);
        await beveragesmodel.create({...req.body}).then(res=>console.log(res)).catch(err=>console.log(err));
        return res.send("Menu added")
    }
    catch(err){
        console.log(err)
    }
}


//============================
//getting menu

//starters
const items=async (req,res,next)=>{
    try{
      return res.json(await itemsmodel.find())
    }
    catch(err){
        console.log(err.message)
    }
}


//maincourse
const maincourse=async (req,res,next)=>{
    try{
      return res.json(await maincoursemodel.find())
    }
    catch(err){
        console.log(err.message)
    }
}


//desserts
const desserts=async (req,res,next)=>{
    try{
      return res.json(await dessertsmodel.find())
    }
    catch(err){
        console.log(err.message)
    }
}

//beverages
const beverages=async (req,res,next)=>{
    try{
      return res.json(await beveragesmodel.find())
    }
    catch(err){
        console.log(err.message)
    }
}


const loginuser=async (req,res,next)=>{
    const {email,password}=req.body;
    try{

        const user=await usermodel.findOne({email:email})
        
        if(!user) throw new Error("user not exists")
        const valid=await compare(password,user.password)
        //if(!valid) res.send("password not correct")
        if(!valid) res.send({msg:"password not correct"})
        if  (!valid) throw new Error("Incorrect password")
        const accessToken=createAccessToken(user.firstname)
        const refreshToken=createRefreshToken(user.firstname)
        user.refreshToken=refreshToken;
        sendRefreshToken(res,refreshToken)
        sendAccessToken(req,res,accessToken)
    }
    catch(err){
        // res.send(err.message)
        console.log(err.message);
    }
}


const refresh=async (req,res,next)=>{
    const token=req.cookies.refreshtoken;
    if(!token) return res.send({accesstoken:""})
    let payload=null;
    try{
        payload=verify(token,process.env.REFRESH_TOKEN_SECRET)   //returns decoded token
    }
    catch(err){
        return res.send({accesstoken:""})
    }
    const user=usermodel.findOne({firstname:payload.firstname})
    if(!user) return res.send({accesstoken:""})

    if(user.refreshtoken!==token){
        return res.send({accesstoken:''})
    }

    const accessToken=createAccessToken(user.firstname)
    const refreshToken=createRefreshToken(user.firstname)
    user.refreshToken=refreshToken;
    sendRefreshToken(res,refreshToken)
    return res.send({accessToken})
}

const logout=async (req,res,next)=>{
    res.clearCookie("refreshtoken",{path:"/refresh"})
    return res.json({message:"logged out"})
}



const protected=async (req,res,next)=>{
    try{
       
      const authorization=req.headers['authorization'];
    //   console.log(authorization)
      if(!authorization) throw new Error("You need to login");
      const token=authorization.split(' ')[1];
    //   console.log(token)
      const {firstname}=verify(token,process.env.ACCESS_TOKEN_SECRET) 
console.log(firstname);
  
  if(firstname!=null){
    if(firstname=="admin"){
        console.log("authorized")
    res.send({
        data:"authorized"
    })
}
else{
    console.log("not authorized")
    res.send({
        data:"not authorized"
    })
}
  }
  
    }
    catch(err){
        res.send({
            error:`${err.message}`
        })
    }
}

module.exports={getlist,postuser,loginuser,refresh,logout,items,protected,postrest,postmenu,maincourse,desserts,beverages,maincourse1,desserts1,beverages1}