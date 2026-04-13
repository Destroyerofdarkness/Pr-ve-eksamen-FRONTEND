const form = document.querySelector("form");
const error = document.querySelector("#error")

form.addEventListener("submit", async(e)=>{
    e.preventDefault();
    const code = form.code.value
    const res = await fetch("/signIn",{
        method: "POST",
        body:JSON.stringify({code}),
        headers: {"Content-Type": "application/json"}
    })
    error.innerHTML = ""

    const {success, errors, token} = await res.json();

    if(success){
        window.location.href = `/cookie/${token}`
    }else{
    error.innerHTML = errors.name
    }
})