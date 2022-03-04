<?php
// header('Content-Type: application/json');

session_start();

$connect = mysqli_connect('localhost', 'root', 'akejvkej123', 'first');
mysqli_set_charset($connect, 'utf8');

if (mysqli_connect_errno()) {
    echo "Failed to connect MySQL: " . mysqli_connect_error();
}

$playlistname = $_REQUEST["name"];

$tabledata = mysqli_query($connect, "SELECT * FROM " . $_SESSION['sess_userid'] ."_". $playlistname . "");
$resultArr = array();

while ($row = mysqli_fetch_array($tabledata,MYSQLI_ASSOC)) {
    $json["title"] = $row['title'];
    $json["artist"] = $row['artist'];
    $json["videoId"] = $row['videoId'];
    array_push($resultArr, $json);
}

$result = json_encode($resultArr);
echo $result;

mysqli_close($connect);
?>