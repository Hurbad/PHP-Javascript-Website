// Get localStorage data or if there is none gets empty array
var users = JSON.parse(localStorage.getItem("users")) || [];

// Function to login an users
function userLogIn() {
  // Get the value of username, password
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var userExists = [false, null];

  //checks to see if the username and password match
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].name == username &&
      users[i].password == password &&
      users[i]
    ) {
      userExists = [true, i];
    }
  }
  //If the user is logged in, it displays the play and logout buttons
  if (userExists[0]) {
    alert("You have successfully logged in!");
    users[userExists[1]].loggedIn = true;
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("formId").style.display = "none";
    document.getElementById("logoutButton").style.display = "block";
    document.getElementById("loggedInUsername").innerHTML =
      users[userExists[1]].name;
    return false;
  } else {
    alert("Username or password incorrect. Try again.");
    return false;
  }
}
// Function to logout users
function userLogOut() {
  // Check if any user is logged in and if it is,then which one
  var userLoggedIn = [false, null];
  // For loop to scan through users and check which one is logged in
  for (let i = 0; i < users.length; i++) {
    if (users[i].loggedIn == true) {
      userLoggedIn = [true, i];
    }
  }
  //logs out the user and displays the login page again
  if (userLoggedIn[0]) {
    alert("You have successfully logged out.");
    users[userLoggedIn[1]].loggedIn = false;
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("formId").style.display = "block";
    document.getElementById("logoutButton").style.display = "none";
    return false;
  }
}
// -------------------------------  C H E C K  I F  U S E R  I S  A L R E A D Y  L O G G E D  I N ---------------------------------------------
// status - true is logged in, false if logged out
status = false;
// Check if any user is logged in and if it is,then which one
var userExists = [false, null];

for (let i = 0; i < users.length; i++) {
  if (users[i].loggedIn == true) {
    userExists = [true, i];
    status = true;
    document.getElementById("formId").style.display = "none";
    document.getElementById("logoutButton").style.display = "block";
    document.getElementById("loggedInUsername").innerHTML =
      users[userExists[1]].name;
  }
}
