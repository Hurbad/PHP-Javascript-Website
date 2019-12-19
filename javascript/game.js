var users = JSON.parse(localStorage.getItem("users")) || [0];
var userLoggedIn = [false, null];

//checks which user is logged in
for (let i = 0; i < users.length; i++) {
  if (users[i].loggedIn == true) {
    userLoggedIn = [true, i];
  }
}
//This checks if the user is logged in and if he is not logged in then It alerts and hides the start button
if (userLoggedIn[0] == false) {
  alert("You need to login in order to play.");
  disappear001.innerHTML = "";
  document.getElementById("frame001").style.display = "none";
  document.getElementById("frame002").style.display = "";
}

//Questions for Easy Mode
var question001 = [
  "<img src=https://cdn.vox-cdn.com/thumbor/NeSo4JAqv-fFJCIhb5K5eBqvXG4=/7x0:633x417/1200x800/filters:focal(7x0:633x417)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg height=80 /><br /><br />What Logo Is This?",
  "<img src=https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg height=80 /><br /><br />What Logo Is This?",
  "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png height=80 /><br /><br />What Logo Is This?",
  "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png height=80 /><br /><br />What Logo Is This?",
  "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png height=80 /><br /><br />What Logo Is This?",
  "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1200px-Coca-Cola_logo.svg.png height=80 /><br /><br />What Logo Is This?",
  "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1280px-Samsung_Logo.svg.png height=80 /><br /><br />What Logo Is This?",
  "<img src=https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png height=80 /><br /><br />What Logo Is This?",
  "<img src=https://www.ipbcommunications.co.uk/wp-content/uploads/2017/02/Tesco-Logo.jpg height=80 /><br /><br />What Logo Is This?",
  "<img src=https://static.dezeen.com/uploads/2019/04/ikea-logo-new-hero-1.jpg height=80 /><br /><br />What Logo Is This?"
];

//Questions for Medium Mode
var question002 = [
  "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/1200px-Flag_of_Somalia.svg.png height=80 /><br /><br />What Flag Is This?",
  "<img src=https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg height=80 /><br /><br />What Flag Is This?",
  "<img src=https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg height=80 /><br /><br />What Flag Is This?",
  "<img src=https://cdn.britannica.com/55/1455-004-F3D1D26C/Flag-Hungary.jpg height=80 /><br /><br />What Flag Is This?",
  "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/2000px-Flag_of_Chad.svg.png height=80 /><br /><br />What Flag Is This?",
  "<img src=https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg height=80 /><br /><br />What Flag Is This?",
  "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Liberia.svg/800px-Flag_of_Liberia.svg.png height=80 /><br /><br />What Flag Is This?",
  "<img src=https://www.irishcentral.com/uploads/assets/resized_218px-Flag_of_C_te_d_Ivoire.svg.png height=80 /><br /><br />What Flag Is This?",
  "<img src=https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg height=80 /><br /><br />What Flag Is This?",
  "<img src=https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png height=80 /><br /><br />What Flag Is This?"
];

//Questions for Hard Mode
var question003 = [
  "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Kazakhstan_%28orthographic_projection%29.svg/250px-Kazakhstan_%28orthographic_projection%29.svg.png height=150 /><br /><br />What Country Is This?",
  "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Location_Benin_AU_Africa.svg/250px-Location_Benin_AU_Africa.svg.png height=150 /><br /><br />What Country Is This?",
  "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Pakistan_%28orthographic_projection%29.svg/220px-Pakistan_%28orthographic_projection%29.svg.png height=150 /><br /><br />What Country Is This?",
  "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Location_Moldova_Europe.png/250px-Location_Moldova_Europe.png height=150 /><br /><br />What Country Is This?",
  "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/EU-Estonia.svg/250px-EU-Estonia.svg.png height=150 /><br /><br />What Country Is This?",
  "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Europe-Norway_%28orthographic_projection%29.svg/220px-Europe-Norway_%28orthographic_projection%29.svg.png height=150 /><br /><br />What Country Is This?",
  "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/KNA_orthographic.svg/250px-KNA_orthographic.svg.png height=150height=150 /><br /><br />What Country Is This?",
  "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/SUR_orthographic.svg/250px-SUR_orthographic.svg.png height=150 /><br /><br />What Country Is This?",
  "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/NIC_orthographic.svg/250px-NIC_orthographic.svg.png height=150 /><br /><br />What Country Is This?",
  "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Fiji_%28orthographic_projection%29.svg/250px-Fiji_%28orthographic_projection%29.svg.png height=150 /><br /><br />What Country Is This?" 
];

//Options for Easy Mode
var options001 = [
  "<button class=buttons001 onclick=q1i()>Apple</button><br><br><button class=buttons001 onclick=q1i()>Windows</button><br><br><button class=buttons001 onclick=q1c()>Microsoft</button>",
  "<button class=buttons001 onclick=q1i()>Samsung</button><br><br><button class=buttons001 onclick=q1c()>Apple</button><br><br><button class=buttons001 onclick=q1i()>LG</button>",
  "<button class=buttons001 onclick=q1c()>Google</button><br><br><button class=buttons001 onclick=q1i()>Yahoo</button><br><br><button class=buttons001 onclick=q1i()>Ping</button>",
  "<button class=buttons001 onclick=q1i()>KFC</button><br><br><button class=buttons001 onclick=q1c()>McDonalds</button><br><br><button class=buttons001 onclick=q1i()>Burger King</button>",
  "<button class=buttons001 onclick=q1c()>Nike</button><br><br><button class=buttons001 onclick=q1i()>Adidas</button><br><br><button class=buttons001 onclick=q1i()>Under Armour</button>",
  "<button class=buttons001 onclick=q1i()>Pepsi</button><br><br><button class=buttons001 onclick=q1c()>Coca Cola</button><br><br><button class=buttons001 onclick=q1i()>Monster</button>",
  "<button class=buttons001 onclick=q1c()>Samsung</button><br><br><button class=buttons001 onclick=q1i()>OnePlus</button><br><br><button class=buttons001 onclick=q1i()>HTC</button>",
  "<button class=buttons001 onclick=q1i()>Caffè Nero</button><br><br><button class=buttons001 onclick=q1c()>Starbucks</button><br><br><button class=buttons001 onclick=q1i()>Costa</button>",
  "<button class=buttons001 onclick=q1i()>Asda</button><br><br><button class=buttons001 onclick=q1i()>Morrisons</button><br><br><button class=buttons001 onclick=q1c()>Tesco</button>",
  "<button class=buttons001 onclick=q1i()>Office Depot</button><br><br><button class=buttons001 onclick=q1c()>Ikea</button><br><br><button class=buttons001 onclick=q1i()>Rymans</button>"
];

//Options for Medium Mode
var options002 = [
  "<button class=buttons001 onclick=q2i()>Uganda</button><br><br><button class=buttons001 onclick=q2i()>Ethiopia</button><br><br><button class=buttons001 onclick=q2c()>Somalia</button>",
  "<button class=buttons001 onclick=q2i()>Kenya</button><br><br><button class=buttons001 onclick=q2c()>Egypt</button><br><br><button class=buttons001 onclick=q2i()>Yemen</button>",
  "<button class=buttons001 onclick=q2c()>Indonesia</button><br><br><button class=buttons001 onclick=q2i()>Malta</button><br><br><button class=buttons001 onclick=q2i()>Poland</button>",
  "<button class=buttons001 onclick=q2i()>Italy</button><br><br><button class=buttons001 onclick=q2c()>Hungary</button><br><br><button class=buttons001 onclick=q2i()>Bulgaria</button>",
  "<button class=buttons001 onclick=q2c()>Chad</button><br><br><button class=buttons001 onclick=q2i()>Romania</button><br><br><button class=buttons001 onclick=q2i()>Moldova</button>",
  "<button class=buttons001 onclick=q2i()>Ecuador</button><br><br><button class=buttons001 onclick=q2c()>Columbia</button><br><br><button class=buttons001 onclick=q2i()>Venezuela</button>",
  "<button class=buttons001 onclick=q2c()>Liberia</button><br><br><button class=buttons001 onclick=q2i()>United States</button><br><br><button class=buttons001 onclick=q2i()>Malaysia</button>",
  "<button class=buttons001 onclick=q2i()>Ireland</button><br><br><button class=buttons001 onclick=q2c()>Côte d'Ivoire</button><br><br><button class=buttons001 onclick=q2i()>Comoros</button>",
  "<button class=buttons001 onclick=q2i()>France</button><br><br><button class=buttons001 onclick=q2i()>Luxembourg</button><br><br><button class=buttons001 onclick=q2c()>Netherlands</button>",
  "<button class=buttons001 onclick=q2i()>Liechtenstein</button><br><br><button class=buttons001 onclick=q2c()>Germany</button><br><br><button class=buttons001 onclick=q2i()>Belgium</button>"
];

//Options for Hard Mode
var options003 = [
  "<button class=buttons001 onclick=q3i()>Turkmenistan</button><br><br><button class=buttons001 onclick=q3i()>Uzbekistan</button><br><br><button class=buttons001 onclick=q3c()>Kazakhstan</button>",
  "<button class=buttons001 onclick=q3i()>Togo</button><br><br><button class=buttons001 onclick=q3c()>Benin</button><br><br><button class=buttons001 onclick=q3i()>Gabon</button>",
  "<button class=buttons001 onclick=q3c()>Pakistan</button><br><br><button class=buttons001 onclick=q3i()>Afghanistan</button><br><br><button class=buttons001 onclick=q3i()>Iran</button>",
  "<button class=buttons001 onclick=q3i()>Romania</button><br><br><button class=buttons001 onclick=q3c()>Moldova</button><br><br><button class=buttons001 onclick=q3i()>Ukraine</button>",
  "<button class=buttons001 onclick=q3c()>Estonia</button><br><br><button class=buttons001 onclick=q3i()>Latvia</button><br><br><button class=buttons001 onclick=q3i()>Lithuania</button>",
  "<button class=buttons001 onclick=q3i()>Sweden</button><br><br><button class=buttons001 onclick=q3c()>Norway</button><br><br><button class=buttons001 onclick=q3i()>Finland</button>",
  "<button class=buttons001 onclick=q3c()>Saint Kitts and Nevis</button><br><br><button class=buttons001 onclick=q3i()>Bermuda</button><br><br><button class=buttons001 onclick=q3i()>Trinidad and Tobago</button>",
  "<button class=buttons001 onclick=q3i()>Belize</button><br><br><button class=buttons001 onclick=q3c()>Suriname</button><br><br><button class=buttons001 onclick=q3i()>Guyana</button>",
  "<button class=buttons001 onclick=q3i()>Honduras</button><br><br><button class=buttons001 onclick=q3i()>El Salvador</button><br><br><button class=buttons001 onclick=q3c()>Nicaragua</button>",
  "<button class=buttons001 onclick=q3i()>Tavalu</button><br><br><button class=buttons001 onclick=q3c()>Fiji</button><br><br><button class=buttons001 onclick=q3i()>Tonga</button>"
];

//Variable that keeps track of question you are on
var a = 0;
a++;
//Variable that keeps track of score
var score = 0;
score++;
//Function that stores the userscore
function scoreStore() {
  if (score >= users[userLoggedIn[1]].topScore) {
    users[userLoggedIn[1]].topScore = score - 1;
    localStorage.setItem("users", JSON.stringify(users));
  }
}
//First function that gives the user options after pressing Start
function begin001() {
  disappear001.innerHTML = "";
  document.getElementById("type001").style.display = "block";
}
//Easy mode
function begin002() {
  document.getElementById("type001").style.display = "none";
  disappear001.innerHTML = "";
  message001.innerHTML = question001[0];
  message002.innerHTML = options001[0];
  number001.innerHTML = a++ + " of 10";
}
//Medium Mode
function begin003() {
  document.getElementById("type001").style.display = "none";
  disappear001.innerHTML = "";
  message001.innerHTML = question002[0];
  message002.innerHTML = options002[0];
  number001.innerHTML = a++ + " of 10";
}
//Hard mode
function begin004() {
  document.getElementById("type001").style.display = "none";
  disappear001.innerHTML = "";
  message001.innerHTML = question003[0];
  message002.innerHTML = options003[0];
  number001.innerHTML = a++ + " of 10";
}

//checks if question is right then awards a point
function q1c() {
  message003.innerHTML = "Correct";
  message002.innerHTML = "";
  topScore.innerHTML = score++;
  message004.innerHTML =
    "<button class=buttons002 onclick=next001()>Next</button>";
}
function q2c() {
  message003.innerHTML = "Correct";
  message002.innerHTML = "";
  topScore.innerHTML = score++;
  message004.innerHTML =
    "<button class=buttons002 onclick=next002()>Next</button>";
}
function q3c() {
  message003.innerHTML = "Correct";
  message002.innerHTML = "";
  topScore.innerHTML = score++;
  message004.innerHTML =
    "<button class=buttons002 onclick=next003()>Next</button>";
}

//checks if question is wrong
function q1i() {
  message003.innerHTML = "Incorrect";
  message002.innerHTML = "";
  message004.innerHTML =
    "<button class=buttons002 onclick=next001()>Next</button>";
}
function q2i() {
  message003.innerHTML = "Incorrect";
  message002.innerHTML = "";
  message004.innerHTML =
    "<button class=buttons002 onclick=next002()>Next</button>";
}
function q3i() {
  message003.innerHTML = "Incorrect";
  message002.innerHTML = "";
  message004.innerHTML =
    "<button class=buttons002 onclick=next003()>Next</button>";
}

//Set of questions for easy mode
function next001() {
  if (a == "2") {
    message001.innerHTML = question001[1];
    message002.innerHTML = options001[1];
    message003.innerHTML = "";
    number001.innerHTML = a++ + " of 10";
    message004.innerHTML = "";
  } else if (a == "3") {
    message001.innerHTML = question001[2];
    message002.innerHTML = options001[2];
    message003.innerHTML = "";
    number001.innerHTML = a++ + " of 10";
    message004.innerHTML = "";
  } else if (a == "4") {
    message001.innerHTML = question001[3];
    message002.innerHTML = options001[3];
    message003.innerHTML = "";
    number001.innerHTML = a++ + " of 10";
    message004.innerHTML = "";
  } else if (a == "5") {
    message001.innerHTML = question001[4];
    message002.innerHTML = options001[4];
    message003.innerHTML = "";
    number001.innerHTML = a++;
    message004.innerHTML = "";
  } else if (a == "6") {
    message001.innerHTML = question001[5];
    message002.innerHTML = options001[5];
    message003.innerHTML = "";
    number001.innerHTML = a++ + " of 10";
    message004.innerHTML = "";
  } else if (a == "7") {
    message001.innerHTML = question001[6];
    message002.innerHTML = options001[6];
    message003.innerHTML = "";
    number001.innerHTML = a++ + " of 10";
    message004.innerHTML = "";
  } else if (a == "8") {
    message001.innerHTML = question001[7];
    message002.innerHTML = options001[7];
    message003.innerHTML = "";
    number001.innerHTML = a++ + " of 10";
    message004.innerHTML = "";
  } else if (a == "9") {
    message001.innerHTML = question001[8];
    message002.innerHTML = options001[8];
    message003.innerHTML = "";
    number001.innerHTML = a++ + " of 10";
    message004.innerHTML = "";
  } else if (a == "10") {
    message001.innerHTML = question001[9];
    message002.innerHTML = options001[9];
    message003.innerHTML = "";
    number001.innerHTML = a++ + " of 10";
    message004.innerHTML = "";
  } else {
    message001.innerHTML = "End of Quiz";
    message002.innerHTML = "";
    message003.innerHTML = "";
    message004.innerHTML =
      "<button class=buttons002 onclick=repeat001()>Repeat</button>";
  }
  //this calls up the function at the top and stores the score
  this.scoreStore();
}
//Set of questions for Medium mode
function next002() {
  if (a == "2") {
    message001.innerHTML = question002[1];
    message002.innerHTML = options002[1];
    message003.innerHTML = "";
    number001.innerHTML = a++ + " of 10";
    message004.innerHTML = "";
  } else if (a == "3") {
    message001.innerHTML = question002[2];
    message002.innerHTML = options002[2];
    message003.innerHTML = "";
    number001.innerHTML = a++ + " of 10";
    message004.innerHTML = "";
  } else if (a == "4") {
    message001.innerHTML = question002[3];
    message002.innerHTML = options002[3];
    message003.innerHTML = "";
    number001.innerHTML = a++ + " of 10";
    message004.innerHTML = "";
  } else if (a == "5") {
    message001.innerHTML = question002[4];
    message002.innerHTML = options002[4];
    message003.innerHTML = "";
    number001.innerHTML = a++;
    message004.innerHTML = "";
  } else if (a == "6") {
    message001.innerHTML = question002[5];
    message002.innerHTML = options002[5];
    message003.innerHTML = "";
    number001.innerHTML = a++ + " of 10";
    message004.innerHTML = "";
  } else if (a == "7") {
    message001.innerHTML = question002[6];
    message002.innerHTML = options002[6];
    message003.innerHTML = "";
    number001.innerHTML = a++ + " of 10";
    message004.innerHTML = "";
  } else if (a == "8") {
    message001.innerHTML = question002[7];
    message002.innerHTML = options002[7];
    message003.innerHTML = "";
    number001.innerHTML = a++ + " of 10";
    message004.innerHTML = "";
  } else if (a == "9") {
    message001.innerHTML = question002[8];
    message002.innerHTML = options002[8];
    message003.innerHTML = "";
    number001.innerHTML = a++ + " of 10";
    message004.innerHTML = "";
  } else if (a == "10") {
    message001.innerHTML = question002[9];
    message002.innerHTML = options002[9];
    message003.innerHTML = "";
    number001.innerHTML = a++ + " of 10";
    message004.innerHTML = "";
  } else {
    message001.innerHTML = "End of Quiz";
    message002.innerHTML = "";
    message003.innerHTML = "";
    message004.innerHTML =
      "<button class=buttons002 onclick=repeat001()>Repeat</button>";
  }
  //this calls up the function at the top and stores the score
  this.scoreStore();
}

//Set of questions for hard mode
function next003() {
  if (a == "2") {
    message001.innerHTML = question003[1];
    message002.innerHTML = options003[1];
    message003.innerHTML = "";
    number001.innerHTML = a++ + " of 10";
    message004.innerHTML = "";
  } else if (a == "3") {
    message001.innerHTML = question003[2];
    message002.innerHTML = options003[2];
    message003.innerHTML = "";
    number001.innerHTML = a++ + " of 10";
    message004.innerHTML = "";
  } else if (a == "4") {
    message001.innerHTML = question003[3];
    message002.innerHTML = options003[3];
    message003.innerHTML = "";
    number001.innerHTML = a++ + " of 10";
    message004.innerHTML = "";
  } else if (a == "5") {
    message001.innerHTML = question003[4];
    message002.innerHTML = options003[4];
    message003.innerHTML = "";
    number001.innerHTML = a++;
    message004.innerHTML = "";
  } else if (a == "6") {
    message001.innerHTML = question003[5];
    message002.innerHTML = options003[5];
    message003.innerHTML = "";
    number001.innerHTML = a++ + " of 10";
    message004.innerHTML = "";
  } else if (a == "7") {
    message001.innerHTML = question003[6];
    message002.innerHTML = options003[6];
    message003.innerHTML = "";
    number001.innerHTML = a++ + " of 10";
    message004.innerHTML = "";
  } else if (a == "8") {
    message001.innerHTML = question003[7];
    message002.innerHTML = options003[7];
    message003.innerHTML = "";
    number001.innerHTML = a++ + " of 10";
    message004.innerHTML = "";
  } else if (a == "9") {
    message001.innerHTML = question003[8];
    message002.innerHTML = options003[8];
    message003.innerHTML = "";
    number001.innerHTML = a++ + " of 10";
    message004.innerHTML = "";
  } else if (a == "10") {
    message001.innerHTML = question003[9];
    message002.innerHTML = options003[9];
    message003.innerHTML = "";
    number001.innerHTML = a++ + " of 10";
    message004.innerHTML = "";
  } else {
    message001.innerHTML = "End of Quiz";
    message002.innerHTML = "";
    message003.innerHTML = "";
    message004.innerHTML =
      "<button class=buttons002 onclick=repeat001()>Repeat</button>";
  }
  //this calls up the function at the top and stores the score
  this.scoreStore();
}

//this lets users restart and play again
function repeat001() {
  location.reload();
}
