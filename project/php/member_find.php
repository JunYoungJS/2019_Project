<!-- 0805 ID/PW 찾기 기능 추가 -->

<?php

$connect = mysqli_connect('localhost', 'root', 'akejvkej123', 'first');
mysqli_set_charset($connect, 'utf8');

if (mysqli_connect_errno()) {
    echo "Failed to connect MySQL: " . mysqli_connect_error();
}

if (isset($_SESSION['sess_userid'])) {
    echo "<script>alert('잘못된 접근입니다.'); history.back();</script>";
} else { 
    ?>


    <!DOCTYPE html>

    <head>
    <link rel="stylesheet" href="/CSS/member_find.css">
    <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700,800&amp;subset=korean" rel="stylesheet">
        <meta charset="utf-8" />
        <title>Mutube - ID,PW찾기</title>
        <style>
     
        </style>
    </head>

    <body>
        <div class="main_top">
    <h1 class="top">계정정보 찾기</h1>
     <a href="/"> <img src="/img/home.png"></a><p class="top" id="p_">홈으로</p>
     </div>
     <div id="div_nav">
     <p class ="nav" id="nav_id" onclick="display_on_id()">아이디 찾기</p> 
     <p class ="nav" id="nav_pw" onclick="display_on_pw()">비밀번호 찾기</p>
     </div>
        <div class="find" id="find_id">
            <form method="post" action="/php/member_find_id.php">
                <div>
               
                <fieldset class="field">
                    <table>
                        <tr>
                            <td style="padding-top: 10px;">이름</td>
                            <td style="padding-top: 10px;"><input type="text" size="25" name="name" placeholder="이름"></td>
                        </tr>
                        <tr>
                            <td>이메일</td>
                            <td><input type="text" size="35" name="email" placeholder="이메일"></td>
                        </tr>
                    </table>
                    <input type="submit" class="sub sub_id" value="아이디 찾기" />
                </fieldset>
                </div>
            </form>
        </div>
        <div class="find find_pw" id="find_pw">
            <form method="post" action="/php/member_find_pw.php">
                <div>
                <fieldset class="field f_pw">
                    <table>
                        <tr>
                            <td style="padding-top: 10px;">이름</td>
                            <td style="padding-top: 10px;"><input type="text" size="25" name="username" placeholder="이름"></td>
                        </tr>
                        <tr>
                            <td>아이디</td>
                            <td><input type="text" size="25" name="userid" placeholder="아이디"></td>
                        </tr>
                        <tr>
                            <td>이메일</td>
                            <td><input type="email" size="35" name="useremail" placeholder="이메일"></td>
                        </tr>
                        <tr>
                            <td>생년월일</td>
                            <td><input type="date" name="userbirth" placeholder="생년월일"></td>
                        </tr>
                    </table>
                    <input type="submit" class="sub sub_pw" value="비밀번호 찾기" />
                </fieldset>
                </div>
            </form>
        </div>
        <script>
            function display_on_id(){
                var con1 = document.getElementById("find_id");
                var con2 = document.getElementById("find_pw"); 
                con1.style.display = 'block';
                con2.style.display = 'none';
            //     if(con.style.display=='none')
            //     { 
            //     con.style.display = 'block';
            //  }
            //     else{ 
            //         con.style.display = 'none'; 
            //     }
            }
            function display_on_pw(){
                var con1 = document.getElementById("find_id");
                var con2 = document.getElementById("find_pw"); 
                con2.style.display = 'block';
                con1.style.display = 'none';
            }
        </script>
    </body>
    </html>
<?php
 }
mysqli_close($connect); 
?>