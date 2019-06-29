
const slider = document.querySelector("#slider");

const age = document.querySelector("#ageInput");
let formData = new FormData(myForm);

myForm.addEventListener("submit", event => {
  event.preventDefault();  
  console.log(age.value);
  slider.style = "width: " + age.value + "%";
})

