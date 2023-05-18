const {sign}=require("jsonwebtoken")

const createAccessToken=(firstname)=>{
return sign({firstname},process.env.ACCESS_TOKEN_SECRET,{expiresIn:"15m"})

}

const createRefreshToken=(firstname)=>{
return sign({firstname},process.env.REFRESH_TOKEN_SECRET,{expiresIn:"7d"})

}

const sendAccessToken=(req,res,accessToken)=>{
   
res.send({accessToken,email:req.body.email})
}

const sendRefreshToken=(res,refreshtoken)=>{
res.cookie("refreshtoken",refreshtoken,{httpOnly:true,path:"/refresh"});


}

module.exports={createAccessToken,createRefreshToken,sendAccessToken,sendRefreshToken}


