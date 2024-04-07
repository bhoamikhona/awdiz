`use strict`;

function register(event) {
  event.preventDefault();

  let userName = document.getElementById("userName").value;
  let userEmail = document.getElementById("userEmail").value;
  let userPassword = document.getElementById("userPassword").value;

  console.log(userName, userEmail, userPassword);

  if (!userName || !userEmail || !userPassword) {
    return alert("All fields are is required");
  }

  const userData = { userName, userEmail, userPassword };

  const users = JSON.parse(localStorage.getItem("users")) || [];

  users.push(userData);

  localStorage.setItem("users", JSON.stringify(users));

  userName = "";
  userEmail = "";
  userPassword = "";

  alert(`Registration Successful!`);

  window.location.href = `./../index.html`;
}
