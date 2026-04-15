const form = document.querySelector("form");
const titleError = document.querySelector(".error.title");
const descError = document.querySelector(".error.description");
const categoryError = document.querySelector(".error.category")


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = form.title.value;
  const description = form.description.value;
  const category = form.category.value;

  const res = await fetch("/avvik/publiser", {
    method: "POST",
    body: JSON.stringify({ title, description, category }),
    headers: { "Content-Type": "application/json" },
  });

  titleError.innerHTML = "";
  descError.innerHTML = "";

  const { success, errors } = await res.json();

  if (success) {
    window.alert("Avviken ble registrert!!");
    window.location.href= "/avvik/alle";
  } else {
    console.log(errors)
    descError.innerHTML = errors.description;
    titleError.innerHTML = errors.title;
    categoryError.innerHTML = errors.category;
  }
});
