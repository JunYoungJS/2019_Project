<?php
session_start();
$connect = mysqli_connect('localhost', 'root', 'akejvkej123', 'first');
mysqli_set_charset($connect, 'utf8');

if (mysqli_connect_errno()) {
    echo "Failed to connect MySQL: " . mysqli_connect_error();
}

$playlistname = $_REQUEST["playlistname"];
$length = $_REQUEST["dataLength"];
$songlist = $_REQUEST["songlist"];


$checkTable = mysqli_query($connect, "SHOW TABLES LIKE '" . $_SESSION['sess_userid'] . "_" . $playlistname . "%'");
$row_exist = mysqli_fetch_array($checkTable);

if ($row_exist == true) {
    mysqli_query($connect, "DELETE FROM " . $_SESSION['sess_userid'] . "_" . $playlistname . "");
    for ($cnt = 0; $cnt < $length; $cnt++) {
        // $getcontent = mysqli_query($connect, "SELECT * FROM " . $_SESSION['sess_userid'] . "_" . $playlistname . " WHERE videoId= '" . $songlist[$cnt]['videoId']."'");
        // if (mysqli_num_rows($getcontent) == 0) {
        mysqli_query($connect, "INSERT INTO " . $_SESSION['sess_userid'] . "_" . $playlistname . " (title,artist,videoId) VALUES ('" . $songlist[$cnt]['title'] . "' , '" . $songlist[$cnt]['artist'] . "' , '" . $songlist[$cnt]['videoId'] . "')");
        // } else {
        //     continue;
        // }
    }
    // $result['success'] = true;
    $result = $playlistname . " 플레이리스트가 정상적으로 업데이트되었습니다.";
    echo $result;
} else if ($row_exist == false) {
    mysqli_query($connect, "CREATE TABLE " . $_SESSION['sess_userid'] . "_" . $playlistname . " (title VARCHAR(100) NOT NULL, artist VARCHAR(100) NOT NULL, videoId VARCHAR(50) NOT NULL)");
    for ($cnt = 0; $cnt < $length; $cnt++) {
        mysqli_query($connect, "INSERT INTO " . $_SESSION['sess_userid'] . "_" . $playlistname . " (title,artist,videoId) VALUES ('" . $songlist[$cnt]['title'] . "' , '" . $songlist[$cnt]['artist'] . "' , '" . $songlist[$cnt]['videoId'] . "')");
    }

    // $result['success'] = true;
    $result = $playlistname . " 플레이리스트가 정상적으로 저장되었습니다.";
    echo $result;
}

mysqli_close($connect);
?>