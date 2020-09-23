const addBtn = document.querySelector(".add-btn");
const removeBtn = document.querySelector(".remove-btn");
const main = document.querySelector(".newDiv");
let newInput = document.createElement("input");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //   let newInput = document.createElement("input");
  newInput.setAttribute("placeholder", "e.g JavaScript");

  main.appendChild(newInput);
});

removeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  main.removeChild(newInput);
});
