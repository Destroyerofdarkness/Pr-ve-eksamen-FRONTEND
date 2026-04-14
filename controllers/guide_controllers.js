

const render_guide = (req,res)=>{
    try {
        res.render("userGuide",{title: "Brukerveiledning"})
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error Please Wait!!")
    }
}

module.exports = {render_guide}