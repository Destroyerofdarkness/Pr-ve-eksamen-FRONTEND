

const report_publish_page = (req,res)=>{
    try {
        res.render("publish", {title:"Send Avvik"})
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error")
    }
}

module.exports = {report_publish_page}