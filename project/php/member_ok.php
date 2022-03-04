<?php
session_start();
$connect = mysqli_connect('localhost', 'root', 'akejvkej123', 'first');
mysqli_set_charset($connect, 'utf8');

if (mysqli_connect_errno()) {
    echo "Failed to connect MySQL: " . mysqli_connect_error();
}
$sessionid = $_SESSION['sess_userid'];
$get = mysqli_query($connect, "SELECT * FROM account_info WHERE id='{$sessionid}'");
$member = $get->fetch_array();
$id = $_POST['userid'];
if ($id == "") {
    $id = $member['id'];
}
$name = $_POST['name'];
if ($name == "") {
    $name = $member['name'];
}
$email = $_POST['email'];
if ($email == "") {
    $email = $member['email'];
}
$sex = $_POST['sex'];
$pw = $_POST['userpw'];
if ($pw == "") {
    $pw = $member['pw'];
}
if ($pw != $member['pw'] || $id != $member['id']) {
    $pw = password_hash($pw, PASSWORD_DEFAULT);
    $sql = mysqli_query($connect, "UPDATE account_info SET id='{$id}', pw='{$pw}',sex='{$sex}' ,name='{$name}',email='{$email}' WHERE id= '{$sessionid}'");

    echo "<script>alert('정보 변경이 완료되었습니다. 아이디 혹은 비밀번호가 변경되었으므로 다시 로그인해주세요.'); </script>";
    session_destroy();
    echo '<meta http-equiv="refresh" content="0 url=../index.html">';
} else {
    $sql = mysqli_query($connect, "UPDATE account_info SET id='{$id}', pw='{$pw}',sex='{$sex}' , name='{$name}',email='{$email}' WHERE id= '{$sessionid}'");
    echo "<script>alert('정보 변경이 완료되었습니다.');</script>";
    echo '<meta http-equiv="refresh" content="0 url=/php/my_page.php">';
}
?>