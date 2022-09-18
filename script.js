const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const button = document.querySelector("#verify-number");
const message = document.querySelector("#output-container");

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    message.innerText = "Your Birthday is lucky 🎊";
  } else {
    message.innerText = "Your birthday is  not lucky 😓";
  }
}
function checkDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  console.log(sum);
  if (sum && dob) compareValues(sum, luckyNumber.value);
  else message.innerText = "Please Enter both the fields ";
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  console.log(dob);
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
    console.log(sum);
  }
  return sum;
}

button.addEventListener("click", checkDateIsLucky);
