`use strict`;

function login(event) {
  event.preventDefault();

  let userEmail = document.getElementById("userEmail").value;
  let userPassword = document.getElementById("userPassword").value;

  console.log(userEmail, userPassword);

  if (!userEmail || !userPassword) {
    return alert("All fields are is required");
  }

  const users = JSON.parse(localStorage.getItem("users"));
  console.log(users);

  for (let i = 0; i < users.length; i++) {
    if (
      users[i].userEmail === userEmail &&
      users[i].userPassword === userPassword
    ) {
      userEmail = "";
      userPassword = "";

      window.location.href = "./../index.html";
      return alert("Login Successful!");
    }
  }

  return alert("Please check your email & password.");
}
