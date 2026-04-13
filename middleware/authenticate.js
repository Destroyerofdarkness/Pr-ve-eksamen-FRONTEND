const get_req = require("../handlers/getContentHandler");

const authenticate = async(req,res, next)=>{
    const token = req.cookies.jwt
    if(token){
    const {success, user} = await get_req(`/auth/verifyJWT/${token}`);
    if(success){
        res.locals.user = user;
        next()
    }else{
        res.status(301).redirect("/")
    }
} else{
        res.status(301).redirect("/")
}
}

const checkUser = async(req,res, next)=>{
    const token = req.cookies.jwt
    if(token){
    const {success, user} = await get_req(`/auth/verifyJWT/${token}`);
    if(success){
        res.locals.user = user;
        next()
    }else{
        res.locals.user = null;
        next()
    }
} else{
        res.locals.user = null;
        next()
}
}


module.exports = {authenticate, checkUser}