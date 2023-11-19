`use strict`;

function login(event) {
  event.preventDefault();

  const userEmail = document.getElementById("userEmail").value;
  const userPassword = document.getElementById("userPassword").value;

  console.log(userEmail, userPassword);

  if (!userEmail || !userPassword) {
    return alert("All fields are is required");
  }

  const userData = { userEmail, userPassword };

  localStorage.setItem("Users", JSON.stringify(userData));

  alert(`Login Successful!`);
}
