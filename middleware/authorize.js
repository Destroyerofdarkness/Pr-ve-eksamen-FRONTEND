const get_req = require("../handlers/getContentHandler");

const authorize = async(req,res, next)=>{
    const token = req.cookies.jwt
    if(token){
    const {success, user} = await get_req(`/auth/verifyJWT/${token}`);
    if(success){
        console.log(user);
        if(user.roler === "admin"){
        next()
        }else{
        res.status(401).send("Unauthorized access")
        }
    }else{
        res.status(403).send("Forbidden access")
    }
} else{
        res.status(403).send("Forbidden access")
}
}

module.exports = authorize