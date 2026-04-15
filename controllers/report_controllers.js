const post_req = require("../handlers/postContentHandler");
const get_req = require("../handlers/getContentHandler");
const put_req = require("../handlers/updateContentHandler")
const delete_req = require("../handlers/deleteContentHandler")

const report_publish_page = async(req,res)=>{
    try {
        const {allCategories} = await get_req("/category/get")
        res.render("publish", {title:"Send Avvik", categories: allCategories})
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

const report_update = async(req,res)=>{
    try {
        const {success} = await put_req("/report/update",req.body);
        if(success){
            res.status(201).json({success});
        }else{
            res.status(400).json({success});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({success:false});
    }
}

const report_delete = async(req,res)=>{
    try {
        const {success} = await delete_req("/report/delete",req.body);
        if(success){
            res.status(201).json({success});
        }else{
            res.status(400).json({success});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({success:false})
    }
}

module.exports = {report_publish_page, report_publish, all_report_page, report_update, report_delete}