
const slider = document.querySelector("#slider");

const age = document.querySelector("#ageInput");
const ageError = document.querySelector("#ageError");

myForm.addEventListener("submit", event => {
  event.preventDefault();
  if (validate(age.value) === false) return; 
  slider.style = "width: " + age.value + "%";
})

let validate = function(value) {
  if (age.value <= 100 && age.value >= 0) {
    ageError.innerHTML = "";
    return true;
  } else {
    ageError.innerHTML = "Please enter an age between 0 and 100";
    return false;
  }
}
