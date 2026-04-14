const form = document.querySelector("form");
const titleError = document.querySelector(".error.title");
const descError = document.querySelector(".error.description");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = form.title.value;
  const description = form.description.value;

  const res = await fetch("/avvik/publiser", {
    method: "POST",
    body: JSON.stringify({ title, description }),
    headers: { "Content-Type": "application/json" },
  });

  titleError.innerHTML = "";
  descError.innerHTML = "";

  const { success, errors } = await res.json();

  if (success) {
    window.alert("Avviken ble registrert!!");
    window.location.href= "/avvik/alle";
  } else {
    descError.innerHTML = errors.description;
    titleError.innerHTML = errors.title;
  }
});
