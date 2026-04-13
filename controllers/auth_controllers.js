const post_req = require("../handlers/postContentHandler");

const sign_in_page = (req,res)=>{
    try {
        res.render("signIn", {title: "Logg på"});
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error. Please wait for the fix!!");
    }
}

const sign_in = async(req,res)=>{
    try {
        const {success, token, errors} = await post_req("/auth/signIn",req.body)
        if(success){
            res.status(201).json({success, token})
        }else{
            res.status(400).json({success, errors})
        }
    } catch (err) {
    console.log(err);
        res.status(500).json({err, success})
    }
}

const make_cookie = async(req,res)=>{
    const token = req.params.token
    try {
        res.cookie("jwt",token, {httpOnly:true, maxAge: 24*60*60*1000});
        res.redirect("/avvik/publiser")
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error. Please Wait!")
    }
}

const logout = (req,res)=>{
    try {
        res.cookie("jwt", "",{maxAge: 10});
        res.redirect("/")
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error. Please Wait!")
    }
}


module.exports = {sign_in_page, sign_in, make_cookie, logout}