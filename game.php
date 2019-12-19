<?php
  include('includes/header.php');
?>
<title>Game</title>

  <main style="background-color:;color:white;padding:px;" id= "check">

  <center>  <div id="frame001">
        <div>
            <h2>Welcome</h2>  <strong><p> Trivia</p></strong><text>Question: <text id="number001">0</text></text><br />

            <text>Score: <text id="topScore">0</text></text>
            <hr />
            <div id="disappear001">
                <button class="buttons002" onclick="begin001()">Start</button>
              </div>
            <strong><div id="type001" style="display: none;">
                <p> Easy </p>
                <button class="buttons003" onclick="begin002()">Famous Logos </button>

                <p> Medium </p>
                <button class="buttons004" onclick="begin003()">Flags </button>

                <p> Hard </p>
                <button class="buttons005" onclick="begin004()">World Map </button>
                
              </div></strong>

            <p id="message001"></p>
            <p id="message002"></p>
            <p id="message003"></p>
            <p id="message004"></p>
        </div>
    </div> </center>          ‏‏‎
<div style="display: none; text-align: center;padding:25px;" id="frame002">
<p>
Please<a href="login.php"> Log in </a> If you have an account or alternatively <a href="signup.php"> Signup </a>
</p>
</div>
</main>


<script type="text/javascript" src="javascript/game.js">

</script>
<?php
  include('includes/footer.php');

?>
