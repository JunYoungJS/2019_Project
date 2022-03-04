<?php
error_reporting(E_ALL | E_STRICT);
ini_set('display_errors', 1);
ini_set('html_errors', 1);
session_start();

$connect = mysqli_connect('localhost', 'root', 'akejvkej123', 'first');
mysqli_set_charset($connect, 'utf8');

if (mysqli_connect_errno()) {
	echo "Failed to connect MySQL: " . mysqli_connect_error();
}
if (isset($_SESSION['sess_userid'])) {
	?>
<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>SoundsHub-MyPage</title>

  <!-- Bootstrap core CSS -->
  <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom fonts for this template -->
  <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet">
  <link href="/vendor/fontawesome-free/css/all.min.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="/BootStrap/resume.min.css" rel="stylesheet">
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <link type="text/css" href="/CSS/page.css" rel="stylesheet">
  
</head>

<body id="page-top">

  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="sideNav">
    <a class="navbar-brand js-scroll-trigger" href="#page-top">
      <span class="d-block d-lg-none">SoundHub</span>
      <span class="d-none d-lg-block">
      </span>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
          <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="javascript:window.close()">홈으로</a>
            </li>
        <li class="nav-item">
          <a class="nav-link nav__ js-scroll-trigger" href="#about">내 정보</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav__ js-scroll-trigger" href="#experience">버그 리포트</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav__ js-scroll-trigger" href="#education">회원 탈퇴</a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container-fluid p-0">

    <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="about">
      <div class="find">
        <form method="POST">
          <?php
           $sql = mysqli_query($connect, "SELECT * FROM account_info WHERE id='{$_SESSION['sess_userid']}'");
           while ($member = $sql->fetch_array()) {
            ?>
            <h2>내 정보</h2>
            
            <fieldset >
              
              <table id="info_tabel">
                <tr>
                  <td>아이디</td>
                  <td><input class="input_" id="idtext" type="text" size="35" name="userid" value="<?php echo $member['id']; ?>" disabled></td>
                </tr>
                <tr>
                  <td>비밀번호</td>
                  <td><input class="input_" id="pwtext" type="password" size="35" name="userpw" placeholder="비밀번호 변경" disabled></td>
                </tr>
                <tr>
                  <td>이름</td>
                  <td><input class="input_" type="text" size="35" name="name" placeholder="이름" value="<?php echo $member['name']; ?>" disabled></td>
                </tr>
                <tr>
                    <td>성별</td>
                    <td><input type="radio" class="sex_" name="sex" value="남자" id="male_" <?php if ($member['sex'] == 'male' or $member['sex'] == '남자') echo 'checked';
                                                        else echo 'disabled'; ?>>
                      <span>남자</span> <input type="radio" class="sex_" name="sex" value="여자" id="female_" <?php if ($member['sex'] == 'female' or $member['sex'] == '여자') echo 'checked';
                                                                else echo 'disabled'; ?>>&nbsp;<span>여자</span></td>
                  </tr>
                  <tr>
                  <td>이메일</td>
                  <td><input class="input_" id="emailtext" type="email" size="35" name="email" placeholder="이메일" value="<?php echo $member['email']; ?>" disabled></td>
                </tr>
              
              <tr>
                <td>
              
            </td>
            <td>
                <input type="button" onclick="ables()" id="changeinform" value="정보 변경"> 
               <input type="submit" class="saveinforms" value="정보 저장" formaction="./member_ok.php">  <input type="button" onclick="cancel()" class="saveinforms" value="변경 취소"></td>
        
            </tr>
          </table>
        </fieldset>
				<?php } ?>
			</form>
      </div>
    </section>

    <hr class="m-0">

    <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div class="require">
            <form method="POST">
              <h2>버그 리포트</h2>
              <fieldset>
                <legend>고객 불편 접수</legend>
                <table>
                  <tr>
                    <p>이용중에 발견하신 기능상의 오류 혹은 불편하신 점들,</p>
                    <p>그리고 추가적으로 필요한 기능들을 500자 이내로 적어주세요.</p>
                    <p>여러분의 쾌적한 이용을 위해 오류 개선에 최선을 다하겠습니다.</p>
                  </tr>
                  <tr>
                    <td class="table_h">제목</td>
                    <td><input class="table_i" type="text" size="80" name="reqtitle" placeholder="제목" required></td>
                  </tr>
                  <tr>
                    <td class="table_h">내용</td>
                    <td><textarea class="table_i" rows="13" cols="80" name="reqcont" placeholder="500자 이내로 내용을 작성해주세요." required></textarea></td>
                  </tr>
                </table>
                <input  type="submit" value="제출" formaction="/php/cs_req.php">
      
              </fieldset>
            </form>
          </div>

    </section>

    <hr class="m-0">

    <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="education">
        <div class="require">
            <form method="POST">
                <h2>회원 탈퇴</h2>
              <fieldset>
                <legend>고객 불편 접수</legend>
                <table>
                    <tr>
                      <p>탈퇴 절차를 진행하시려면 아래 양식에 사유를 작성해주세요.</p>
                      <p>완료되면 회원님과 관련된 모든 정보가 삭제됩니다.</p>
                    </tr>
                    <tr>
                      <td>제목</td>
                      <td><input class="table_i" type="text" size="70" name="secesstitle" placeholder="제목" required></td>
                    </tr>
                    <tr>
                      <td>내용</td>
                      <td><textarea class="table_i" rows="10" cols="70" name='secesscont' placeholder="300자 이내로 내용을 작성해주세요." required></textarea></td>
                    </tr>
                  </table>
                  <input type="submit" value="탈퇴" formaction="/php/cs_secess.php">
      
              </fieldset>
            </form>
          </div>

    </section>

 

  </div>

  <!-- Bootstrap core JavaScript -->
  <script src="/vendor/jquery/jquery.min.js"></script>
  <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Plugin JavaScript -->
  <script src="/vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Custom scripts for this template -->
  <script src="js/resume.min.js"></script>
	<script type="text/javascript" src="/JavaScript/member_updates.js"></script>

</body>

</html>
<?php } else {
	echo "<script>alert('잘못된 접근입니다.'); history.back();</script>";
}
?>
