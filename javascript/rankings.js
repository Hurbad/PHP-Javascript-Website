// Users form local storage
var users = JSON.parse(localStorage.getItem("users")) || [];

for (let i = 0; i < users.length; i++) {
  if (users[i].topScore > 0) {
    // Sorting from high to low depending on users score
    users.sort(function(a, b) {
      return b.topScore - a.topScore;
    });
    // Adds each user witch score higher than 0 to scoreboard
    var newUser = document.createElement("li");
    var usersInfo = document.createTextNode(
      " ‍  ‍  ‍  ‍  ‍ ‍   ‍  ‍ " +
        users[i].name +
        " ‍  ‍‍  ‍  ‍  ‍  ‍  ‍  ‍  ‍  ‍  ‍  ‍‍  ‍  ‍  ‍  ‍  ‍  ‍  " +
        +users[i].topScore
    );
    newUser.appendChild(usersInfo);
    var element = document.getElementById("rankings");
    var child = document.getElementById("p1");
    element.insertBefore(newUser, child);
  }
}

//Clear Data function + reloads page after clearing
function clearStorage() {
  localStorage.clear();
  location.reload();
}
