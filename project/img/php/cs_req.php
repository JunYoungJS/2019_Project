<?php
// error_reporting(E_ALL | E_STRICT);
// ini_set('display_errors', 1);
// ini_set('html_errors', 1);

session_start();

$connect = mysqli_connect('localhost', 'root', 'akejvkej123', 'first');
mysqli_set_charset($connect, 'utf8');

if (mysqli_connect_errno()) {
    echo "Failed to connect MySQL: " . mysqli_connect_error();
}

$reqT = $_POST['reqtitle'];
$reqC = $_POST['reqcont'];
$wrotetime = date("Y-m-d H:i:s");

$sessionid = $_SESSION['sess_userid'];
$sql = mysqli_query($connect, "INSERT INTO customer_requirements (id,content,title,time) VALUES ('{$sessionid}', '{$reqC}','{$reqT}','{$wrotetime}')");

if ($sql) {
    echo '<script>window.alert("의견을 남겨주셔서 감사합니다.");</script>';
    echo '<script>history.back();</script>';
}
mysqli_close($connect);
?>