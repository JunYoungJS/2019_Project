<?php
$id = $_POST['id'];
$pw = password_hash($_POST['pw'], PASSWORD_DEFAULT);
$sex = $_POST['sex'];
$email = $_POST['email'];
$birth = $_POST['birth'];
$name = $_POST['name'];

if($id == '' || $pw == '' || $sex == '' || $email == '' || $birth == '' || $name ==''){
    echo '<script>alert("잘못된 접근입니다.");</script>';
    echo '<meta http-equiv="refresh" content="0 url=../index.html">';
    exit;
}


$connect = new mysqli("localhost", "root", "akejvkej123", "first", "3306");
mysqli_set_charset($connect, "utf8");

if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$sql = "SELECT * FROM account_info WHERE id = '$id'";
$res = mysqli_query($connect, $sql);
if ($res->num_rows >= 1) {
    echo '<script>window.alert("이미 존재하는 아이디입니다");</script>';
    echo '<script>history.back();</script>';
    exit;
}

$checkEmailAddress = filter_var($email, FILTER_VALIDATE_EMAIL);

if ($checkEmailAddress != true) {
    echo '<script>window.alert("이메일 주소가 잘못되었습니다.");</script>';
    echo '<script>history.back();</script>';
    exit;
}
$sqls = "INSERT INTO account_info (id,pw,sex,email,birth,name) VALUES ('$id','$pw','$sex','$email','$birth','$name')";
$result = mysqli_query($connect, $sqls);
if ($result) {
    echo '<script>window.alert("회원가입이 완료되었습니다");</script>';
    echo '<script>history.back();</script>';
}
mysqli_close($connect);
?>