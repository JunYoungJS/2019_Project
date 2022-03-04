<!-- 0806 아이디/비밀번호찾기 구현 -->

<?php
session_start();
$connect = mysqli_connect('localhost', 'root', 'akejvkej123', 'first');
mysqli_set_charset($connect, 'utf8');

if (mysqli_connect_errno()) {
    echo "Failed to connect MySQL: " . mysqli_connect_error();
}
if (isset($_SESSION['sess_userid'])) {
    echo "<script>alert('잘못된 접근입니다.'); history.back();</script>";
} else { ?>
    <!DOCTYPE html>

    <head>
        <meta charset="utf-8" />
        <title>Mutube-비밀번호 변경</title>
        <style>
            * {
                margin: 0 auto;
            }

            .find {
                text-align: center;
                width: 500px;
                margin-top: 30px;
            }
        </style>
    </head>

    <body>
        <div class="find">
            <form method="post" action="/php/member_pw_update_ok.php">
                <h1>비밀번호 변경</h1>
                <fieldset>
                    <legend></legend>
                    <table>
                        <tr>
                            <td> 변경할 비밀번호 입력 : </td>
                            <td><input type="password" size="35" name="pw" placeholder="변경 비밀번호"></td>
                        </tr>
                        <tr>
                            <td> 비밀번호 확인 : </td>
                            <td><input type="password" size="35" name="pw2" placeholder="비밀번호 확인"></td>
                        </tr>
                    </table>
                    <input type="submit" value="변경하기" />
                </fieldset>
            </form>
        </div>
    </body>

    </html>
<?php } mysqli_close($connect); ?>