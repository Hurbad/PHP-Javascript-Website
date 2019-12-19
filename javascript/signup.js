// Get localStorage data or if there is none gets empty array
var users = JSON.parse(localStorage.getItem("users")) || [];

// Function to register a new user
function registerNewUser() {
  // Get the value of username, password,repeat password,email and phone
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var passwordRepeat = document.getElementById("passwordRepeat").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  //RegEx that checks whether the password has atleast 1 digit, 1 uppercase, 1 lowercase and is a minimum of 8 characters in total
  if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password)) {
    alert(
      "Password entered is weak. Please add at least one digit, Lowercase and Uppercase"
    );
  }
  //Regex that checks whether the email has all the required components such as the @
  else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    alert("Incorrect Email Format ");
  } else {
    // boolean variable to check if the username already exits
    var usernameExists = false;
    // if statement to check if password and passwordRepeat match
    if (password == passwordRepeat) {
      // For loop to scan through registered users to check if username is already in use
      for (let i = 0; i < users.length; i++) {
        if (users[i].name == username) {
          usernameExists = true;
        }
      }

      if (usernameExists) {
        alert("This user name already exists.");
        return false;
      } else {
        var passwordRepeat = document.getElementById("passwordRepeat").value;
        // Put array into users in JSON storage with username,password and score values
        if (localStorage == null) {
        }
        users.push({
          name: username,
          password: password,
          email: email,
          phone: phone,
          topScore: 0,
          loggedIn: false
        });
        localStorage.setItem("users", JSON.stringify(users));
        alert("New account successfully created!");
        document.getElementById("signUpForm").reset();
        // Set variable usernameExists to its original value
        usernameExists = false;
        return false;
      }
    } else {
      alert("Passwords do not match. Please try again.");
      return;
    }
  }
}
