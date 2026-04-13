const get_req = require("../handlers/getContentHandler");

const authenticate = async(req,res, next)=>{
    const token = req.cookies.jwt
    if(token){
    const {success} = await get_req(`/auth/verifyJWT/${token}`);
    if(success){
        next()
    }else{
        res.status(301).redirect("/")
    }
} else{
        res.status(301).redirect("/")
}
}


module.exports = authenticate