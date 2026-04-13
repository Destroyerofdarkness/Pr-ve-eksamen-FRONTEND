const post_req = require("../handlers/postContentHandler")

const sign_in_page = async(req,res)=>{
    try {
        res.render("signIn", {title: "Logg på"});
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error. Please wait for the fix!!");
    }
}

module.exports = {sign_in_page}