<!-- 0806 아이디/비밀번호찾기 구현 -->
<?php
// error_reporting(E_ALL);

// ini_set("display_errors", 1);
$connect = mysqli_connect('localhost', 'root', 'akejvkej123', 'first');
mysqli_set_charset($connect, 'utf8');

if (mysqli_connect_errno()) {
    echo "Failed to connect MySQL: " . mysqli_connect_error();
}

if ($_POST["name"] == "" || $_POST["email"] == "") {
    echo '<script> alert("항목을 입력하세요"); history.back(); </script>';
} else {

    $username = $_POST['name'];
    $email = $_POST['email'];


    $sql = mysqli_query($connect,"select * from account_info where name = '{$username}' && email = '{$email}'");
    $result = $sql->fetch_array();

    if ($result["name"] == $username) {
        echo "<script>alert('회원님의 ID는 " . $result['id'] . "입니다.'); history.back();</script>";
    } else {
        echo "<script>alert('존재하지 않는 계정입니다.'); history.back();</script>";
    }

}
mysqli_close($connect);
?>