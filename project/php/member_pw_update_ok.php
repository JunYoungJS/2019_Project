<!-- 0806 아이디/비밀번호찾기 구현 -->

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
$pw1 = $_POST['pw'];
$pw2 = $_POST['pw2'];
echo $pw1 . $pw2;

$sessionid = $_SESSION['uid'];
if ($pw1 == $pw2) {

    $userpw = password_hash($_POST['pw'], PASSWORD_DEFAULT);

    $sql = mysqli_query($connect, "UPDATE account_info SET pw= '{$userpw}' where id = '{$sessionid}'");

    echo "<script>window.alert('비밀번호 변경이 완료되었습니다.'); location.href='../index.html'</script>";

    mysqli_close($connect);

    session_destroy();
} else {
    echo "<script> alert('일치하지 않습니다.변경할 비밀번호를 다시 확인해주세요.'); history.back();</script>";
}
?>