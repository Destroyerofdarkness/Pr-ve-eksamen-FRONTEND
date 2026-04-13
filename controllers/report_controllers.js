const post_req = require("../handlers/postContentHandler");
const get_req = require("../handlers/getContentHandler")

const report_publish_page = (req,res)=>{
    try {
        res.render("publish", {title:"Send Avvik"})
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error")
    }
}

const report_publish = async(req,res)=>{
    try {
        const {success,errors} = await post_req("/report/publish",req.body)
        if(success){
            res.status(201).json({success})
        }else{
            res.status(400).json({success, errors})
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({success:false,err})
    }
}

const all_report_page = async(req,res)=>{
    try {
        const {reports} = await get_req("/report/all");
        console.log(reports)
        res.render("allReports", {title: "Les Avvik", reports})
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error. Please Wait!!")
    }
}

module.exports = {report_publish_page, report_publish, all_report_page}