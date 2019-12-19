<?php
  include('includes/header.php');
?>
<title>Signup</title>

<main style="background-color:;color: #ff7f50; padding:25px;">


<center>
    <div>
      <form name="signup" id="signUpForm" onsubmit="return registerNewUser(users) ">
        <div>
          <label for="username">Sign up to Play the Game</label>
          <br>
          <input type="text" id="username" placeholder="Enter username" name="username" required >
          <br>
          <input type="password" id="password" placeholder="Enter Password" name="password" required >
          <br>
          <input type="password" id="passwordRepeat" placeholder="Repeat Password" name="passwordRepeat" required >
          <br>
          <input type="email" id="email" placeholder="Enter Email" name="email" required >
          <br>
          <input type="number" id="phone" placeholder="Enter Phone Number" name="phone" required >
          <br>





          <button type="submit" id="register" class="regbutton">Register</button>
        </div>
            <div class="container signin">

              <p>Already have an account? <a href="login.php">Log in</a></p>
            </div>
      </form>
    </div>
  </center>
  </main>
<script type="text/javascript" src="javascript/signup.js">
</script>

<?php
include('includes/footer.php');

?>
