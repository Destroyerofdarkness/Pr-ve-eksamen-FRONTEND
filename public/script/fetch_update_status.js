
document.addEventListener("submit", async(e)=>{
    if(e.target.classList.contains("updateStatus")){
         e.preventDefault()
        const status = e.target.status.value;
        const id = e.target.id.value;
        
        const res = await fetch("/avvik/oppdater",{
            method: "PUT",
            body: JSON.stringify({status,id}),
            headers: {"Content-Type": "application/json"}
        })

        const {success} = await res.json();
        if(success){
            window.location.reload();
        }else{
            window.alert("Ikke mulig for å oppdatere status!!")
        }
    }
})