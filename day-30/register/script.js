`use strict`;

function register(event) {
  event.preventDefault();

  const userName = document.getElementById("userName").value;
  const userEmail = document.getElementById("userEmail").value;
  const userPassword = document.getElementById("userPassword").value;

  console.log(userName, userEmail, userPassword);

  if (!userName || !userEmail || !userPassword) {
    return alert("All fields are is required");
  }

  const userData = { userName, userEmail, userPassword };

  localStorage.setItem("Users", JSON.stringify(userData));

  alert(`Registration Successful!`);
}
