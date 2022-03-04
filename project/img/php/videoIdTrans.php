<?php
    $chart = $_POST['param1'];
    $artist = $_POST['param2'];
    $title = $_POST['param3'];
    $connect = mysqli_connect('localhost','root','akejvkej123','first');
    mysqli_set_charset($connect, 'utf8');

    if( mysqli_connect_errno()){
        echo "Failed to connect MySQL: " . mysqli_connect_error();
    }

    $arr = explode(' ',$chart);
    $tablename = '';
    $diff = $arr[sizeof($arr)-1];
    if($arr[1] == '해외'){
        if($diff == '팝'){
            $tablename = 'melon_day_ab_pop_chart';
        }
        else if ($diff == '랩/힙합'){
            $tablename = 'melon_day_ab_rap_chart';
        }
        else if ($diff == 'R&B'){
            $tablename = 'melon_day_ab_rnb_chart';
        }
        else if ($diff == '일렉트로닉'){
            $tablename = 'melon_day_ab_elec_chart';
        }
        else if($diff == '록/메탈'){
            $tablename = 'melon_day_ab_rock_chart';
        }
        else if($diff == '포크/블루스'){
            $tablename = 'melon_day_ab_folk_chart';
        }
    }
    else{
        if($diff == '100'){
            $tablename = 'melon_top_100_chart';
        }
        else if($diff == '발라드'){
            $tablename = 'melon_day_ballad_chart';
        }
        else if ($diff == '댄스'){
            $tablename = 'melon_day_dance_chart';
        }
        else if ($diff == '랩/힙합'){
            $tablename = 'melon_day_hiphop_chart';
        }
        else if ($diff == 'R&B'){
            $tablename = 'melon_day_rnb_chart';
        }
        else if ($diff == '인디'){
            $tablename = 'melon_day_inde_chart';
        }
        else if($diff == '록/메탈'){
            $tablename = 'melon_day_rock_chart';
        }
        else if($diff == '포크/블루스'){
            $tablename = 'melon_day_folk_chart';
        }
    }

    $sql = "SELECT * FROM $tablename WHERE artist = '$artist' AND title = '$title'";
    $res = mysqli_query($connect,$sql);

    $videoId = '';
    if ($res){
        $chartdb = $res->fetch_array();
        $videoId = $chartdb['videoId'];
    }
    else{
        echo 'why?';
    }
    echo $videoId;
    
?>