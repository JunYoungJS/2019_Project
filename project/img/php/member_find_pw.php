<!-- 0806 아이디/비밀번호찾기 구현 -->
<?php
session_start();

$connect = mysqli_connect('localhost', 'root', 'akejvkej123', 'first');
mysqli_set_charset($connect, 'utf8');

if (mysqli_connect_errno()) {
    echo "Failed to connect MySQL: " . mysqli_connect_error();
}

$username = $_POST['username'];
$userid = $_POST['userid'];
$useremail = $_POST['useremail'];
$userbirth = $_POST['userbirth'];

$sql = "select * from account_info where id = '{$userid}'";
$result = mysqli_query($connect,$sql);
$check = mysqli_num_rows($result);
if(!$check){
    echo "<script> window.alert('가입 정보가 존재하지 않습니다.'); history.back();</script>";
}
else{
    $row = mysqli_fetch_array($result);

    $db_birth = $row['birth'];
    $db_name = $row['name'];
    $db_email = $row['email'];

    if(($userbirth != $db_birth) || ($username != $db_name) || ($useremail != $db_email)){
        echo "<script> window.alert('입력하신 정보와 가입 정보가 일치하지 않습니다.'); history.back();</script>";
        exit;
    }
    else{
        $_SESSION['uid'] = $userid;
        $_SESSION['uemail'] = $useremail;
        echo "<script> window.alert('비밀번호 변경 페이지로 이동합니다.'); location.href='/php/member_pw_update.php';</script>";
    }
}
mysqli_close($connect);
?>