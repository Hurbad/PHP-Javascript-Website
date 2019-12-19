<?php
  include('includes/header.php');
?>



<center> <main style="color: #ff7f50;">
 <h1>Ranking</h1>
 <hr>
<p style="text-align: left;font-weight: bold;padding:5px 10px">
  ‍Position  ‍    ‍‍  ‍‍‍‍‍‍       ‍‍‍       ‍‍‍       ‍‍‍       ‍‍‍                ‍‍‍‍‍‍        ‍‍
  Name  ‍   ‍    ‍‍‍‍‍       ‍‍‍       ‍‍‍       ‍‍‍       ‍‍‍         ‍‍‍‍    ‍‍ ‍    ‍‍ ‍    ‍‍ ‍  ‍‍  ‍‍
  Score
</p>
<hr>
<strong> ‍ <ol id="rankings">
<p id="p1"></p>
</ol></strong>

<button style=" background-color: white;position: fixed; right: 10px;  bottom: 0px;" onclick="clearStorage()"> Clear Storage </button>
</main>
</center>



<script type="text/javascript" src="javascript/rankings.js"></script>

<?php
  include('includes/footer.php');

?>
