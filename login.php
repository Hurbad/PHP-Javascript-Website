
<?php
  include('includes/header.php');
?>
<title>Login</title>

<main style="background-color:;color: #ff7f50;padding:25px;">
  <div class="leftPadding" id="formId">
    <form name="login" id="logInForm" onsubmit="return userLogIn()">    <!-- <form> creates a login form for username and password inputs -->


      <center>  <label for="username">Username:</label> <br> <!-- Creates username label above the first empty bar -->
        <input type="text" id="username" placeholder="Enter your username" name="username" required> <br> <!-- describes the type of input it expects, id and name -->

        <label for="password">Password:</label> <br> <!-- Creates password label above second empty bar -->
        <input type="password" id="password" placeholder="Enter your password" name="password" required> <!-- describes the type of input it expects, id and name -->

          <div>
            <button type="submit" class="btn1" id="loginButton" ><strong>Login</strong></button>
          <!-- Creates a submit type button box with text "Login" -->
          </div>
    </form>
    <div class="container signin">
      <p>Don't have an account? <a href="signup.php">Sign up</a></p>
    </div>
  </div></center>

<center>  <div style="display: none;" id="logoutButton">
      <h3>You are logged in as:</h3>
      <h3 id="loggedInUsername"></h3>
      <h3> Welcome To Trivia </h3>
      <br>
  <button type="submit" class="btn1" onclick="window.location.href='/game.php'"><strong>Play</strong></button>
  <button type="submit" class="btn1" onclick="return userLogOut()"><strong>Logout</strong></button>


  </div>
  </center>
</main>

<script type="text/javascript" src="javascript/login.js"></script>
        <?php
          include('includes/footer.php');

        ?>
