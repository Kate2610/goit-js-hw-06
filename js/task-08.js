const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {

  event.preventDeafult();

  const {
     elements: { login, password }
    
  } = event.currentTarget;

  if (login.value ==== "" || password.value === "")
  
  {
    return console.log("Please fill all the fields!");
  }

  console.log(`Login: ${login.value}, Password: ${password.value}`);
  event.currentTarget.reset();

}