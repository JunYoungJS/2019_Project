<?php
session_cache_expire();
session_unset();
header("location:" . "/main.php");
 ?>