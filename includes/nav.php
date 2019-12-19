<ul>

<?php

foreach ($navItems as $item) {

echo "<li><a href=\"$item[slug]\">$item[title]</a></li>";
}
 ?>

<li style="float:right" class="dropdown">
<a href="#" class="circle2">Account</a>

<div class="dropdown-content">
<a href="login.php"class="circle2">Log In</a>
<a href="signup.php"class="circle2">Signup</a>

</div>
</ul>
