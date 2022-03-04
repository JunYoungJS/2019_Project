<?php

class Register
{
    function Saves(int $num)
    {
        $members = fopen("member.txt", "a+") or die("File Not Found");
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (empty($_POST["ID"]) || empty($_POST["PW"])) {
                print "아이디와 비밀번호를 올바르게 입력하세요.";
            } else {
                if ($num == 1) {
                    print "이미 존재하는 아이디입니다";
                } else {
                    fwrite($members, $_POST["ID"]);
                    fwrite($members, "|");
                    fwrite($members, $_POST["PW"]);
                    fwrite($members, chr(10));
                    fclose($members);
                    print "회원가입이 완료되었습니다.";
                }
            }
        }
    }
    function check()
    {
        $members = fopen("member.txt", "r") or die("File Not Found");
        while (!feof($members)) {
            $line = fgets($members);
            $inform = explode("|", $line);
            if ($_POST["ID"] == $inform[0]) {
                return 1;
            }
        }
        return 0;
    }
}

$register = new Register();
$regcheck = $register->check();
echo $regcheck;
$register->Saves($regcheck);
