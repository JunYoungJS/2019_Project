<?php
session_start();
$connect = mysqli_connect('localhost', 'root', 'akejvkej123', 'first');
mysqli_set_charset($connect, 'utf8');

if (mysqli_connect_errno()) {
    echo "Failed to connect MySQL: " . mysqli_connect_error();
}

$playlistname = $_REQUEST["name"];

mysqli_query($connect, "DROP TABLE " . $_SESSION['sess_userid'] . "_" . $playlistname . "");

$result = $playlistname . " 플레이리스트가 정상적으로 삭제되었습니다.";
echo $result;

mysqli_close($connect);
?>