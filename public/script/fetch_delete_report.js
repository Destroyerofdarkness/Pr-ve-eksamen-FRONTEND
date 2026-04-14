

document.addEventListener("submit", async(e)=>{
    e.preventDefault()
    if(e.target.classList.contains("delete")){
        const reportID = e.target.id.dataset.id;
        console.log(reportID);
        
        const res = await fetch("/avvik/slett",{
            method: "DELETE",
            body: JSON.stringify({reportID}),
            headers: {"Content-Type": "application/json"}
        })

        const {success} = await res.json();
        if(success){
            window.location.reload();
        }else{
            window.alert("Ikke mulig å slette avviket!!")
        }
    }
})