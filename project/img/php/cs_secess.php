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

$seceT = $_POST['secesstitle'];
$seceC = $_POST['secesscont'];
$wrotetime = date("Y-m-d H:i:s");

$sessionid = $_SESSION['sess_userid'];
$sql = mysqli_query($connect, "INSERT INTO customer_secession (id,content,title,time) VALUES ('{$sessionid}', '{$seceC}','{$seceT}','{$wrotetime}')");
$sql2 = mysqli_query($connect, "DELETE FROM account_info WHERE id='$sessionid' ");

if ($sql && $sql2) {
    echo '<script>window.alert("회원 탈퇴가 완료되었습니다.\n그동안 이용해주셔서 감사합니다.");</script>';
    echo '<meta http-equiv="refresh" content="0 url=../index.html">';
}
session_destroy();
mysqli_close($connect);
?>