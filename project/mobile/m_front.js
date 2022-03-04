var startpos;
var endpos;
var next_cnt = 0;
var prev_index = -1;
var randNumArr = [];
var randCnt = 0;
var duplicate_index;

function logout_ing() {
  var logout_check = confirm("로그아웃 하시겠습니까?");
  if (logout_check == true) {
    location.href = '/php/logout.php';
  } else if (logout_check == false) {
    return false;
  }
}

function my_page() {
  window.open("about:blank").location.href = '/php/my_page.php';
}

//위에 추가 부분 건드리면 x




window.onload = function() {
  var chart1div = document.getElementById('a1_');

  $.getJSON("./json/melon_day_ab_pop.json", function(json) {
    chart1div.setAttribute('style', 'background-image: url("' + json.entries[0].imgsrc + '");')
  });
  var chart2div = document.getElementById('a2_');

  $.getJSON("./json/melon_day_ab_rap.json", function(json) {
    chart2div.setAttribute('style', 'background-image: url("' + json.entries[0].imgsrc + '");')
  });
  var chart3div = document.getElementById('a3_');

  $.getJSON("./json/melon_day_ab_rock.json", function(json) {
    chart3div.setAttribute('style', 'background-image: url("' + json.entries[0].imgsrc + '");')

  });
  var chart4div = document.getElementById('a4_');

  $.getJSON("./json/melon_day_ab_rnb.json", function(json) {
    chart4div.setAttribute('style', 'background-image: url("' + json.entries[0].imgsrc + '");')
  });
  var chart5div = document.getElementById('a5_');

  $.getJSON("./json/melon_day_ab_elec.json", function(json) {
    chart5div.setAttribute('style', 'background-image: url("' + json.entries[0].imgsrc + '");')

  });
  var chart6div = document.getElementById('a6_');

  $.getJSON("./json/melon_day_ab_folk.json", function(json) {
    chart6div.setAttribute('style', 'background-image: url("' + json.entries[0].imgsrc + '");')

  });
  var chart7div = document.getElementById('a7_');

  $.getJSON("./json/melon_top_100.json", function(json) {
    chart7div.setAttribute('style', 'background-image: url("' + json.entries[0].imgsrc + '");')

  });
  var chart8div = document.getElementById('a8_');

  $.getJSON("./json/melon_day_ballad.json", function(json) {
    chart8div.setAttribute('style', 'background-image: url("' + json.entries[0].imgsrc + '");')

  });
  var chart9div = document.getElementById('a9_');

  $.getJSON("./json/melon_day_dance.json", function(json) {
    chart9div.setAttribute('style', 'background-image: url("' + json.entries[0].imgsrc + '");')

  });
  var chart10div = document.getElementById('a10_');
  $.getJSON("./json/melon_day_hiphop.json", function(json) {
    chart10div.setAttribute('style', 'background-image: url("' + json.entries[0].imgsrc + '");')

  });
  var chart11div = document.getElementById('a11_');
  $.getJSON("./json/melon_day_rnb.json", function(json) {
    chart11div.setAttribute('style', 'background-image: url("' + json.entries[0].imgsrc + '");')

  });
  var chart12div = document.getElementById('a12_');
  $.getJSON("./json/melon_day_inde.json", function(json) {
    chart12div.setAttribute('style', 'background-image: url("' + json.entries[0].imgsrc + '");')

  });
  var chart13div = document.getElementById('a13_');
  $.getJSON("./json/melon_day_rock.json", function(json) {

    chart13div.setAttribute('style', 'background-image: url("' + json.entries[0].imgsrc + '");')

  });
  var chart14div = document.getElementById('a14_');
  $.getJSON("./json/melon_day_folk.json", function(json) {
    chart14div.setAttribute('style', 'background-image: url("' + json.entries[0].imgsrc + '");')

  });

  var te = document.getElementById('user-playlist');
  if (te.children.length == 0) {

    for (var i = 0; i < sessionStorage.length; i++) {
      if (Object.keys(sessionStorage)[i] != 'now-playing') {
        $("#user-playlist").prepend(sessionStorage.getItem(Object.keys(sessionStorage)[i]));
      }
    }
  }


}

function show_melon_apop_chart(this_id) {
  var b = document.getElementById('chartlist-ul');
  b.innerHTML = "";

  $.getJSON("./json/melon_day_ab_pop.json", function(json) {
    for (var i = 0; i < json.entries.length; i++) {
      $(b).append('<tr class="chart" id=' + json.entries[i].videoId + '>' + '<td class="rank">' + json.entries[i].rank + '</td>' +
        '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc +
        '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td >' + '<h3 class="artist">' + json.entries[i].artist + '</h3>' + '<h4 class="title">' + json.entries[i].title + '</h4>' + '<td class="onplay"><img id="playbutton" onclick="showtube(event)" class="state" src="img/play_button.png"></img></td>' +
        '</td><td class="addtolist"><img class="listaddbutton" onclick="" src="img/plus_button.png"></img></td>' + '</tr>');
    }
  });
  // var temp_1 = document.getElementById(this_id);
  // document.getElementById('h2_1').innerHTML = temp_1.innerText;
}


function show_melon_arap_chart(this_id) {
  var c = document.getElementById('chartlist-ul');
  c.innerHTML = "";
  $.getJSON("./json/melon_day_ab_rap.json", function(json) {
    for (var i = 0; i < json.entries.length; i++) {
      $(c).append('<tr class="chart" id=' + json.entries[i].videoId + '>' + '<td class="rank">' + json.entries[i].rank + '</td>' +
        '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc +
        '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td >' + '<h3 class="artist">' + json.entries[i].artist + '</h3>' + '<h4 class="title">' + json.entries[i].title + '</h4>' + '</td>' + '<td class="onplay"><img id="playbutton" onclick="showtube(event)" class="state" src="img/play_button.png"></img></td>' +
        '</td><td class="addtolist"><img class="listaddbutton" onclick="" src="img/plus_button.png"></img></td>' + '</tr>');
    }

  });
  // var temp_1 = document.getElementById(this_id);
  // document.getElementById('h2_1').innerHTML = temp_1.innerText;
}


function show_melon_arock_chart(this_id) {
  var d = document.getElementById('chartlist-ul');
  d.innerHTML = "";
  $.getJSON("./json/melon_day_ab_rock.json", function(json) {
    for (var i = 0; i < json.entries.length; i++) {
      $(d).append('<tr class="chart" id=' + json.entries[i].videoId + '>' + '<td class="rank">' + json.entries[i].rank + '</td>' +
        '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc +
        '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td >' + '<h3 class="artist">' + json.entries[i].artist + '</h3>' + '<h4 class="title">' + json.entries[i].title + '</h4>' + '</td>' + '<td class="onplay"><img id="playbutton" onclick="showtube(event)" class="state" src="img/play_button.png"></img></td>' +
        '</td><td class="addtolist"><img class="listaddbutton" onclick="" src="img/plus_button.png"></img></td>' + '</tr>');
    }
  });

  // var temp_1 = document.getElementById(this_id);
  // document.getElementById('h2_1').innerHTML = temp_1.innerText;
}

function show_melon_arnb_chart(this_id) {
  var e = document.getElementById('chartlist-ul');
  e.innerHTML = "";
  $.getJSON("./json/melon_day_ab_rnb.json", function(json) {
    for (var i = 0; i < json.entries.length; i++) {
      $(e).append('<tr class="chart" id=' + json.entries[i].videoId + '>' + '<td class="rank">' + json.entries[i].rank + '</td>' +
        '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc +
        '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td >' + '<h3 class="artist">' + json.entries[i].artist + '</h3>' + '<h4 class="title">' + json.entries[i].title + '</h4>' + '</td>' + '<td class="onplay"><img id="playbutton" onclick="showtube(event)" class="state" src="img/play_button.png"></img></td>' +
        '</td><td class="addtolist"><img class="listaddbutton" onclick="" src="img/plus_button.png"></img></td>' + '</tr>');
    }

  });
  // var temp_1 = document.getElementById(this_id);
  // document.getElementById('h2_1').innerHTML = temp_1.innerText;
}


function show_melon_aelec_chart(this_id) {
  var a = document.getElementById('chartlist-ul');
  a.innerHTML = "";
  $.getJSON("./json/melon_day_ab_elec.json", function(json) {
    for (var i = 0; i < json.entries.length; i++) {
      $(a).append('<tr class="chart" id=' + json.entries[i].videoId + '>' + '<td class="rank">' + json.entries[i].rank + '</td>' +
        '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc +
        '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td >' + '<h3 class="artist">' + json.entries[i].artist + '</h3>' + '<h4 class="title">' + json.entries[i].title + '</h4>' + '</td>' + '<td class="onplay"><img id="playbutton"onclick="showtube(event)" class="state" src="img/play_button.png"></img></td>' +
        '</td><td class="addtolist"><img class="listaddbutton" onclick="" src="img/plus_button.png"></img></td>' + '</tr>');
    }
  });

  // var temp_1 = document.getElementById(this_id);
  // document.getElementById('h2_1').innerHTML = temp_1.innerText;

}

function show_melon_afolk_chart(this_id) {
  var z = document.getElementById('chartlist-ul');
  z.innerHTML = "";
  $.getJSON("./json/melon_day_ab_folk.json", function(json) {
    for (var i = 0; i < json.entries.length; i++) {
      $(z).append('<tr class="chart" id=' + json.entries[i].videoId + '>' + '<td class="rank">' + json.entries[i].rank + '</td>' +
        '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc +
        '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td >' + '<h3 class="artist">' + json.entries[i].artist + '</h3>' + '<h4 class="title">' + json.entries[i].title + '</h4>' + '</td>' + '<td class="onplay"><img id="playbutton" onclick="showtube(event)" class="state" src="img/play_button.png"></img></td>' +
        '</td><td class="addtolist"><img class="listaddbutton" onclick="" src="img/plus_button.png"></img></td>' + '</tr>');
    }
  });

  // var temp_1 = document.getElementById(this_id);
  // document.getElementById('h2_1').innerHTML = temp_1.innerText;
}

function show_melon_top100_chart(this_id) {
  var f = document.getElementById('chartlist-ul');
  f.innerHTML = "";
  $.getJSON("./json/melon_top_100.json", function(json) {
    for (var i = 0; i < json.entries.length; i++) {
      $(f).append('<tr class="chart" id=' + json.entries[i].videoId + '>' + '<td class="rank">' + json.entries[i].rank + '</td>' +
        '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc +
        '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td >' + '<h3 class="artist">' + json.entries[i].artist + '</h3>' + '<h4 class="title">' + json.entries[i].title + '</h4>' + '</td>' + '<td class="onplay"><img id="playbutton" onclick="showtube(event)" class="state" src="img/play_button.png"></img></td>' +
        '</td><td class="addtolist"><img class="listaddbutton" onclick="" src="img/plus_button.png"></img></td>' + '</tr>');
    }

  });
  // var temp_1 = document.getElementById(this_id);
  // document.getElementById('h2_1').innerHTML = temp_1.innerText;
}

function show_melon_bal_chart(this_id) {
  var g = document.getElementById('chartlist-ul');
  g.innerHTML = "";
  $.getJSON("./json/melon_day_ballad.json", function(json) {
    for (var i = 0; i < json.entries.length; i++) {
      $(g).append('<tr class="chart" id=' + json.entries[i].videoId + '">' + '<td class="rank">' + json.entries[i].rank + '</td>' +
        '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc +
        '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td >' + '<h3 class="artist">' + json.entries[i].artist + '</h3>' + '<h4 class="title">' + json.entries[i].title + '</h4>' + '</td>' + '<td class="onplay"><img id="playbutton" onclick="showtube(event)" class="state" src="img/play_button.png"></img></td>' +
        '</td><td class="addtolist"><img class="listaddbutton" onclick="" src="img/plus_button.png"></img></td>' + '</tr>');
    }

  });
  // var temp_1 = document.getElementById(this_id);
  // document.getElementById('h2_1').innerHTML = temp_1.innerText;
}

function show_melon_dance_chart(this_id) {
  var h = document.getElementById('chartlist-ul');
  h.innerHTML = "";
  $.getJSON("./json/melon_day_dance.json", function(json) {
    for (var i = 0; i < json.entries.length; i++) {
      $(h).append('<tr class="chart" id=' + json.entries[i].videoId + '>' + '<td class="rank">' + json.entries[i].rank + '</td>' +
        '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc +
        '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td >' + '<h3 class="artist">' + json.entries[i].artist + '</h3>' + '<h4 class="title">' + json.entries[i].title + '</h4>' + '</td>' + '<td class="onplay"><img id="playbutton" onclick="showtube(event)" class="state" src="img/play_button.png"></img></td>' +
        '</td><td class="addtolist"><img class="listaddbutton" onclick="" src="img/plus_button.png"></img></td>' + '</tr>');
    }

  });
  // var temp_1 = document.getElementById(this_id);
  // document.getElementById('h2_1').innerHTML = temp_1.innerText;
}

function show_melon_hiphop_chart(this_id) {
  var j = document.getElementById('chartlist-ul');
  j.innerHTML = "";
  $.getJSON("./json/melon_day_hiphop.json", function(json) {
    for (var i = 0; i < json.entries.length; i++) {
      $(j).append('<tr class="chart" id=' + json.entries[i].videoId + '>' + '<td class="rank">' + json.entries[i].rank + '</td>' +
        '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc +
        '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td >' + '<h3 class="artist">' + json.entries[i].artist + '</h3>' + '<h4 class="title">' + json.entries[i].title + '</h4>' + '</td>' + '<td class="onplay"><img id="playbutton" onclick="showtube(event)" class="state" src="img/play_button.png"></img></td>' +
        '</td><td class="addtolist"><img class="listaddbutton" onclick="" src="img/plus_button.png"></img></td>' + '</tr>');
    }

  });
  // var temp_1 = document.getElementById(this_id);
  // document.getElementById('h2_1').innerHTML = temp_1.innerText;
}

function show_melon_inde_chart(this_id) {
  var k = document.getElementById('chartlist-ul');
  k.innerHTML = "";
  $.getJSON("./json/melon_day_inde.json", function(json) {
    for (var i = 0; i < json.entries.length; i++) {
      $(k).append('<tr class="chart" id=' + json.entries[i].videoId + '>' + '<td class="rank">' + json.entries[i].rank + '</td>' +
        '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc +
        '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td >' + '<h3 class="artist">' + json.entries[i].artist + '</h3>' + '<h4 class="title">' + json.entries[i].title + '</h4>' + '</td>' + '<td class="onplay"><img id="playbutton" onclick="showtube(event)" class="state" src="img/play_button.png"></img></td>' +
        '</td><td class="addtolist"><img class="listaddbutton" onclick="" src="img/plus_button.png"></img></td>' + '</tr>');
    }

  });
  // var temp_1 = document.getElementById(this_id);
  // document.getElementById('h2_1').innerHTML = temp_1.innerText;
}

function show_melon_rnb_chart(this_id) {
  var l = document.getElementById('chartlist-ul');
  l.innerHTML = "";
  $.getJSON("./json/melon_day_rnb.json", function(json) {
    for (var i = 0; i < json.entries.length; i++) {
      $(l).append('<tr class="chart" id=' + json.entries[i].videoId + '>' + '<td class="rank">' + json.entries[i].rank + '</td>' +
        '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc +
        '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td >' + '<h3 class="artist">' + json.entries[i].artist + '</h3>' + '<h4 class="title">' + json.entries[i].title + '</h4>' + '</td>' + '<td class="onplay"><img id="playbutton" onclick="showtube(event)" class="state" src="img/play_button.png"></img></td>' +
        '</td><td class="addtolist"><img class="listaddbutton" onclick="" src="img/plus_button.png"></img></td>' + '</tr>');
    }

  });
  // var temp_1 = document.getElementById(this_id);
  // document.getElementById('h2_1').innerHTML = temp_1.innerText;
}

function show_melon_rock_chart(this_id) {
  var m = document.getElementById('chartlist-ul');
  m.innerHTML = "";
  $.getJSON("./json/melon_day_rock.json", function(json) {
    for (var i = 0; i < json.entries.length; i++) {
      $(m).append('<tr class="chart" id=' + json.entries[i].videoId + '>' + '<td class="rank">' + json.entries[i].rank + '</td>' +
        '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc +
        '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td >' + '<h3 class="artist">' + json.entries[i].artist + '</h3>' + '<h4 class="title">' + json.entries[i].title + '</h4>' + '</td>' + '<td class="onplay"><img id="playbutton" onclick="showtube(event)"" class="state" src="img/play_button.png"></img></td>' +
        '</td><td class="addtolist"><img class="listaddbutton" onclick="" src="img/plus_button.png"></img></td>' + '</tr>');
    }
  });

  // var temp_1 = document.getElementById(this_id);
  // document.getElementById('h2_1').innerHTML = temp_1.innerText;
}

function show_melon_folk_chart(this_id) {
  var n = document.getElementById('chartlist-ul');
  n.innerHTML = "";
  $.getJSON("./json/melon_day_folk.json", function(json) {
    for (var i = 0; i < json.entries.length; i++) {
      $(n).append('<tr class="chart" id=' + json.entries[i].videoId + '>' + '<td class="rank">' + json.entries[i].rank + '</td>' +
        '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc +
        '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td >' + '<h3 class="artist">' + json.entries[i].artist + '</h3>' + '<h4 class="title">' + json.entries[i].title + '</h4>' + '</td>' + '<td class="onplay"><img id="playbutton" onclick="showtube(event)" class="state" src="img/play_button.png"></img></td>' +
        '</td><td class="addtolist"><img class="listaddbutton" onclick="" src="img/plus_button.png"></img></td>' + '</tr>');
    }
  });

  // var temp_1 = document.getElementById(this_id);
  // document.getElementById('h2_1').innerHTML = temp_1.innerText;
}
//각 차트별 리스트의 내용으로 탐색된 유튜브 영상을 우측 화면에 띄워주는 함수이다.








function ControlVideo() { //8월 1일 노드 재배치 수정

  //노드 재배치

  if ($("#jb-footer .ongoing-player #control").attr('src') == "img/play.png") //플레이 버튼이면
  {
    playVideo(); //재생
    $("#jb-footer .ongoing-player #control").attr('src', 'img/pause.png');
  } else {
    pauseVideo();
    $("#jb-footer .ongoing-player #control").attr('src', 'img/play.png');
  }

}



$(function() {
  $(".timeBar").val(0);
  $(".timeBar").attr("min", 0);
  $(".timeBar").attr("max", 0);

  $(".timeBar span").width(0);
  $(".timeBar span").height("100%");

  $('.timeBar').on('input', function() {
    $(".timeBar").val(this.value);
    Progress(this.value);
  });
}); //무조건 실행하는함수 default값이라 보면됨 0730일추가


////////////////요기는 인기차트 목록 넘기기위한 js
function list1() {


  $('#a1_').css('display', 'block');
  $('#a2_').css('display', 'block');
  $('#a3_').css('display', 'block');
  $('#a4_').css('display', 'block');
  $('#a5_').css('display', 'block');
  $('#a6_').css('display', 'block');
  $('#a7_').css('display', 'block');
  $('#a8_').css('display', 'none');
  $('#a9_').css('display', 'none');
  $('#a10_').css('display', 'none');
  $('#a11_').css('display', 'none');
  $('#a12_').css('display', 'none');
  $('#a13_').css('display', 'none');
  $('#a14_').css('display', 'none');
  $('#bu_1').css('display', 'none');
  $('#bu_2').css('display', 'block');
}

function list2() {


  $('#a14_').css('display', 'block');
  $('#a13_').css('display', 'block');
  $('#a12_').css('display', 'block');
  $('#a11_').css('display', 'block');
  $('#a10_').css('display', 'block');
  $('#a9_').css('display', 'block');
  $('#a8_').css('display', 'block');
  $('#a7_').css('display', 'none');
  $('#a6_').css('display', 'none');
  $('#a5_').css('display', 'none');
  $('#a4_').css('display', 'none');
  $('#a3_').css('display', 'none');
  $('#a2_').css('display', 'none');
  $('#a1_').css('display', 'none');
  $('#bu_1').css('display', 'block');
  $('#bu_2').css('display', 'none');
}

function search() {
  $('#sin').css('display', 'block');
}
// 검색을 위한 모달박스
function modal(this_id) {
  var modal = document.getElementById("upload_");
  modal.style.display = "block";



  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
// L_bu R_bu 기능 추가
var cnt = 1;

function R_nextbut() {
  cnt = cnt + 1;

  if (cnt == 1) {
    $('#R_bu').css('display', 'block');
    $('#L_bu').css('display', 'none');
    $('.m_list1').css('display', 'block');
    $('.m_list2').css('display', 'none');
    $('.m_list3').css('display', 'none');
    $('.m_list4').css('display', 'none');
  }
  if (cnt == 2) {
    $('.m_list1').css('display', 'none');
    $('.m_list2').css('display', 'block');
    $('.m_list3').css('display', 'none');
    $('.m_list4').css('display', 'none');
    $('#L_bu').css('display', 'block');
    $('#R_bu').css('display', 'block');
  }
  if (cnt == 3) {
    $('.m_list1').css('display', 'none');
    $('.m_list2').css('display', 'none');
    $('.m_list3').css('display', 'block');
    $('.m_list4').css('display', 'none');
    $('#L_bu').css('display', 'block');
    $('#R_bu').css('display', 'block');
  }
  if (cnt == 4) {
    $('.m_list1').css('display', 'none');
    $('.m_list2').css('display', 'none');
    $('.m_list3').css('display', 'none');
    $('.m_list4').css('display', 'block');
    $('#R_bu').css('display', 'none');
    $('#L_bu').css('display', 'block');
    $('#bu_2').css('display', 'none');
  }
}


function L_nextbut() {
  cnt = cnt - 1;

  if (cnt == 1) {
    $('#R_bu').css('display', 'block');
    $('#L_bu').css('display', 'none');
    $('.m_list1').css('display', 'block');
    $('.m_list2').css('display', 'none');
    $('.m_list3').css('display', 'none');
    $('.m_list4').css('display', 'none');
  }
  if (cnt == 2) {
    $('#R_bu').css('display', 'block');
    $('#L_bu').css('display', 'block');
    $('.m_list1').css('display', 'none');
    $('.m_list2').css('display', 'block');
    $('.m_list3').css('display', 'none');
    $('.m_list4').css('display', 'none');
  }
  if (cnt == 3) {
    $('#L_bu').css('display', 'block');
    $('.m_list1').css('display', 'none');
    $('.m_list2').css('display', 'none');
    $('.m_list3').css('display', 'block');
    $('.m_list4').css('display', 'none');
    $('#R_bu').css('display', 'block');
  }
  if (cnt == 4) {
    $('#L_bu').css('display', 'block');
    $('.m_list1').css('display', 'none');
    $('.m_list2').css('display', 'none');
    $('.m_list3').css('display', 'none');
    $('.m_list4').css('display', 'block');
    $('#R_bu').css('display', 'none');
    $('#bu_2').css('display', 'none');

  }
}
//반응형 기능 추가 0729 30
var width = $(window).width();

function setResponsive() {

  if ($(window).width() < 1100) {
    if ($(".list1").css("display") == "block") {

      cnt = 1;
      $('#R_bu').css('display', 'block');
      $('#L_bu').css('display', 'none');
      $('.m_list1').css('display', 'block');
      $('.m_list2').css('display', 'none');
      $('.m_list3').css('display', 'none');
      $('.m_list4').css('display', 'none');
    } else if ($(".list1").css("display") == "none") {

      cnt = 2;
      $('#R_bu').css('display', 'block');
      $('#L_bu').css('display', 'block');
      $('.m_list1').css('display', 'none');
      $('.m_list2').css('display', 'block');
      $('.m_list3').css('display', 'none');
      $('.m_list4').css('display', 'none');
      $('#bu_1').css('display', 'none');
      $('#bu_2').css('display', 'none');
    }
  }
  if ($(window).width() >= 1100) {
    if ($(".m_list1").css("display") == "block") {

      $('#R_bu').css('display', 'none');
      $('#bu_2').css('display', 'block');
      $('.list1').css('display', 'block');
      $('.list2').css('display', 'none');
    } else if ($(".m_list2").css("display") == "block") {

      $('#L_bu').css('display', 'none');
      $('#R_bu').css('display', 'none');
      $('#bu_1').css('display', 'block');
      $('#bu_2').css('display', 'none');
      $('.list2').css('display', 'block');
      $('.list1').css('display', 'none');
    }
  }
}

$(window).on('load', function() {
  setResponsive();
});

$(window).on('resize', function() {
  setResponsive();
});



function getCurrentTime() {
  return player1.getCurrentTime();
}

function getDuration() {
  return player1.getDuration();
}


$('#chartlist-ul').on('touchstart', function(event) {
  if (event.target.className != "listaddbutton")
    return;


  add_playlist(event);
}); //이벤트 바인딩 플레이리스트 추가 8월1일자


$('#user-playlist').on('touchstart', function(event) {
  if (event.target.className != "remove")
    return;

  remove_playlist(event);

  sessionStorage.removeItem(event.target.parentNode.children[0].children[0].id);
  var obj = JSON.parse(sessionStorage.getItem("now-playing"));

  if ("'" + obj['videoId'] + "'" == event.target.parentNode.children[0].children[0].id) {
    sessionStorage.removeItem('now-playing');
  }

}); //이벤트 바인딩 플레이리스트 삭제



//플레이리스트 삭제 8월 1일 구현부분
function remove_playlist(event) {

  var cnt = document.getElementsByClassName('play').length //길이
  var title = String(event.target.previousElementSibling.children[0].innerText + event.target.previousElementSibling.children[2].innerText).trim(); //
  var current_title = String(document.querySelector(".ongoing-player #music-title").innerText); //현재재생중인거랑 비교
  var tmp = current_title.split(' - ');
  current_title = String(tmp[1] + tmp[0]).trim();



  if (current_title == "") { //아무것도없으면
    var user_playlist = document.querySelector('#user-playlist');
    var child = event.target.parentElement;

    user_playlist.removeChild(child);
    return;
  }

  // 다른 재생리스트 삭제하면 아무변화 x


  if (YT.PlayerState.PLAYING && cnt > 1 && current_title == title) {
    stopVideo(); //멈추고 다음 재생목록으로
    var p_Node = event.target.parentElement.parentElement;
    var c_Node = event.target.parentElement;
    p_Node.removeChild(c_Node);

    if (OneLoop == true || totalLoop == true) {
      OneLoop = false;
      totalLoop = false;
    } //예외처리

    if (shuffle == true) {
      next_cnt = next_cnt;
    } //셔플이 트루면 값안바꿈
    else {
      next_cnt = next_cnt - 1; //인덱스갱신
      cnt--; //추가
    }


    //새로추가부분
    if (next_cnt == cnt - 1) { //지웠을떄 마지막 인덱스면
      var fun1 = document.getElementsByClassName('play')[0].onclick;
      fun1();
      return; //0번부터 재생
    } //8월 12일 추가..



    R_bu(); //재생목록 개수가 하나보다 클떄 다음으로넘김
    return;

  } else if (cnt == 1) { //남은 재생목록이 하나일떄
    stopVideo(); //멈추고 다음 재생목록으로
    Destory(); //삭제
    var p_Node = event.target.parentElement.parentElement;
    var c_Node = event.target.parentElement;
    p_Node.removeChild(c_Node);

    onYouTubeIframeAPIReady(); //ytplayer 다시만들기
    $("#music-title").text("");
    Find_Index(); //인덱스 정렬
    return;
  } else { //현재 재생리스트가아닌 다른재생리스트 면 그냥삭제만
    var p_Node = event.target.parentElement.parentElement;
    var c_Node = event.target.parentElement;
    p_Node.removeChild(c_Node);
    Find_Index(); //인덱스 정렬
    return;
  }


}

function add_playlist(event) { //플레이리스트추가 부분   8월3일 수정




  var target = event.target.parentElement.parentElement;
  var artist = target.children[2].firstElementChild.innerText;
  var title = target.children[2].lastElementChild.innerText;
  var videoId = target.id;
  var name = String(artist + " - " + title);

  if (!Find_duplicate(title, artist)) {
    var fun = document.getElementsByClassName('play')[duplicate_index].onclick; //현재 노래다시재생
    fun();
    return; //중복인지 확인하고 중복이면 종료시킴
  }


  //재생목록추가
  var text = '<ol class="item">\
            <div class="img"><img id="\'' + videoId + '\'" src="img/li_play.png" class="play" onClick="play_Music(\'' + videoId + '\',\'' + name + '\')">\
            </div>\
            <div class="info">\
                <span class="title">' + title + '</span>\
                <br>\
                <span class="artist">' + artist + '</span>\
            </div>\
            <img class="remove" src="img/x_button.png">\
        </ol>';

  $("#user-playlist").append(text);
  alert(title + "가 재생목록에 추가되었습니다."); //재생목록추가시 알림

  sessionStorage.setItem("'" + event.target.parentNode.parentNode.id + "'", text);

}



$('#user-playlist').on('touchstart', function(event) { //8월 2일 버그 수정
  if (event.target.className != "play") //클래스명이 play가아니면
    return; //종료


  var j = $(".play").index(event.target); //index 갱신
  next_cnt = j;
});



function showtube(ev) {


  $("#control123").attr('src', '/img/pause.png');
  event = ev;
  var video = event.target.parentElement.parentElement.id;
  var parent = event.target.parentElement.parentElement;
  var title = parent.children[2].firstElementChild.innerText;
  var artist = parent.children[2].lastElementChild.innerText;

  var name = String(artist + " - " + title);



  if (!Find_duplicate(title, artist)) {
    var fun = document.getElementsByClassName('play')[duplicate_index].onclick; //현재 노래다시재생
    fun();
    return; //중복인지 확인하고 중복이면 종료시킴
  }



  var cnt = document.getElementsByClassName('play').length;
  if (cnt >= 1) {
    image_change(); //play_Music 실행시 style 제거

  }





  //위치변경 0801 remove img로 변경
  var text = '<ol class="item">\
        <div class="img"><img id="\'' + video + '\'" src="img/li_play.png" class="play" onClick="play_Music(\'' + video + '\',\'' + name + '\')">\
        </div>\
		<div class="info">\
			<span class="title">' + title + '</span>\
			<br>\
			<span class="artist">' + artist + '</span>\
        </div>\
        <img class="remove" src="img/x_button.png">\
    </ol>';




  $("#user-playlist").prepend(text);
  next_cnt = 0;

  sessionStorage.setItem("'" + event.target.parentNode.parentNode.id + "'", text);
  play_Music(video, String(artist + " - " + title));

}


//재생목록 넘기는 버튼 0801
function R_bu() {
  Find_Index(); //인덱스정렬
  var cnt = document.getElementsByClassName('play').length; //play 개수를 가져옴

  image_change(); //현재 재생상태에 맞게 이미지를 변경함



  if (OneLoop) { //한곡만 재생이 true면     //바로 종료시킴  =>가장우선순위높음
    var fun = document.getElementsByClassName('play')[next_cnt].onclick; //현재 노래다시재생
    fun();
    shufflecnt = 0;
    return;
  }





  if (cnt - 1 != next_cnt) { //재생목록이 끝이아니고
    if (shuffle && totalLoop == false) { //셔플인데 전체재생이 off면
      if (shufflecnt == cnt) { //재생이 끝이면
        alert("재생이 다되었습니다.");
        $("#repeat-btn").attr('src', 'img/repeat_off.png');
        $("#random-btn").attr('src', 'img/random_off.png'); //
        stopVideo();
        return;
      } else { //재생이 끝이 x
        if (randCnt >= cnt) { //더이상 실행할수없다면 값 초기화
          randCnt = 0;
          randNumArr = randomIndexsort(); //난수 배열 값 섞음
        }
        var fun = document.getElementsByClassName('play')[randNumArr[randCnt++]].onclick; //노래재생후
        fun(); //종료
        return;
      }
    } else if (shuffle && totalLoop == true) { //셔플인데 전체재생이 on이고
      if (randCnt >= cnt) { //더이상 실행할수없다면 값초기화
        randCnt = 0;
        randNumArr = randomIndexsort(); //난수 배열 값 섞음
      }
      var fun = document.getElementsByClassName('play')[randNumArr[randCnt++]].onclick; //노래재생후
      fun(); //종료
      return;
    } else { //그외
      next_cnt = next_cnt + 1;
      var fun = document.getElementsByClassName('play')[next_cnt].onclick; //해당 next_cnt 재생
      fun();
      return;
    }
  } else { //재생목록이 끝이면
    if (shuffle && totalLoop == false) { //셔플이고 전체재생이 off인데
      if (shufflecnt == cnt) { //재생이 끝이면
        alert("재생이 다되었습니다.");
        $("#repeat-btn").attr('src', 'img/repeat_off.png');
        $("#random-btn").attr('src', 'img/random_off.png'); //
        stopVideo();
        return;
      } else { //재생이 끝이 x
        if (randCnt >= cnt) { //더이상 실행할수없다면 값 초기화
          randCnt = 0;
          randNumArr = randomIndexsort(); //난수 배열 값 섞음
        }
        var fun = document.getElementsByClassName('play')[randNumArr[randCnt++]].onclick; //노래재생후
        fun(); //종료
        return;
      }
    } else if (shuffle && totalLoop == true) { //셔플인데 전체재생이 on이고
      if (randCnt >= cnt) { //더이상 실행할수없다면 값초기화
        randCnt = 0;
        randNumArr = randomIndexsort(); //난수 배열 값 섞음
      }
      var fun = document.getElementsByClassName('play')[randNumArr[randCnt++]].onclick; //노래재생후
      fun(); //종료
      return;
    } else { //그외
      if (totalLoop) { //전체반복이 true면
        next_cnt = 0; // 다시처음부터 재생
        var fun1 = document.getElementsByClassName('play')[0].onclick;
        fun1();
      } else { //아니면 종료
        alert("재생이 다되었습니다.");
        $("#repeat-btn").attr('src', 'img/repeat_off.png');
        $("#random-btn").attr('src', 'img/random_off.png');
        stopVideo();
        return;
      }
    }

  }

}

function L_bu() {
  Find_Index(); //인덱스정렬
  image_change(); //상태에 맞게 변화


  if (next_cnt != 0) { //재생할 노래가있고

    if (OneLoop) { //한곡만 반복이 true면
      var fun = document.getElementsByClassName('play')[next_cnt].onclick;
      fun(); //현재꺼 다시 실행
      return;
    }


    if (shuffle && totalLoop == false) { //셔플인데 전체재생이 off면
      if (shufflecnt == cnt) { //재생이 끝이면
        alert("재생이 다되었습니다.");
        $("#repeat-btn").attr('src', 'img/repeat_off.png');
        $("#random-btn").attr('src', 'img/random_off.png'); //
        stopVideo();
        return;
      } else { //재생이 끝이 x
        if (randCnt >= cnt) { //더이상 실행할수없다면 값 초기화
          randCnt = 0;
          randNumArr = randomIndexsort(); //난수 배열 값 섞음
        }
        var fun = document.getElementsByClassName('play')[randNumArr[randCnt++]].onclick; //노래재생후
        fun(); //종료
        return;
      }
    } else if (shuffle && totalLoop == true) { //셔플인데 전체재생이 on이고
      if (randCnt >= cnt) { //더이상 실행할수없다면 값초기화
        randCnt = 0;
        randNumArr = randomIndexsort(); //난수 배열 값 섞음
      }
      var fun = document.getElementsByClassName('play')[randNumArr[randCnt++]].onclick; //노래재생후
      fun(); //종료
      return;
    } else { //그외
      next_cnt = next_cnt - 1;
      var fun = document.getElementsByClassName('play')[next_cnt].onclick;
      fun();

      return;
    }
  } else {
    return;
  }
}

//재생목록 실행하기위해 옮김 0801
function play_Music(video, name) {

  image_change(); //play_Music 실행시 style 제거

  loadVideoById(video, 0, 5);
  $("#music-title").text(name);

  for (var i = 0; i < $('.play').length; i++) {
    $('.play')[i].setAttribute("src", "img/li_play.png");
  }
}


var cur_title; //현재재생중인거
var check_title;


function Find_Index() {
  IndexArray = new Array();
  var userPlayer = document.querySelector('#user-playlist') //노래재생이끝나면
  var playLen = userPlayer.children.length;
  for (var i = 0; i < playLen; i++) {
    var tmp = String(userPlayer.children[i].children[1].children[2].innerText + userPlayer.children[i].children[1].children[0].innerText);
    tmp = tmp.trim();
    IndexArray[i] = tmp;
  }

  for (var i = 0; i < IndexArray.length; i++) {
    if (IndexArray[i] == current_title) { //현재 노래와 맞는 재생목록 번호를 찾음
      next_cnt = i; //찾았으면 다음노래를 위해 인덱스번호 지정후 break
      break;
    }
  }
}


function Find_duplicate(cur_title, cur_artist) { //중복검사


  var userPlayer = document.querySelector('#user-playlist')
  var playLen = userPlayer.children.length;
  var name = String(cur_artist + cur_title);
  name = name.trim();


  for (var i = 0; i < playLen; i++) {
    var tmp = String(userPlayer.children[i].children[1].children[2].innerText + userPlayer.children[i].children[1].children[0].innerText);
    tmp = tmp.trim();

    IndexArray[i] = tmp;
  } //재생리스트 목록 배열에 다넣음


  for (var i = 0; i < IndexArray.length; i++) {
    if (name == IndexArray[i]) { //같으면
      duplicate_index = i;
      return false;
    }

  }

  return true;
}




$(function() {
  $("#user-playlist").disableSelection();
});


function image_change() {
  var Element = document.getElementsByClassName('play')[next_cnt]; // 현재 재생 노드를 가져와서
  if (Element != null) { //예외처리
    var check = Element.getAttribute('style'); //style을 가져오고
    if (check != null) { //스타일이 적용되있으면
      Element.removeAttribute('style'); //제거
      Element.setAttribute("src", "img/li_play.png"); //원래 이미지로 바꿈
    }
  }
}


//반복 재생 실행


$('#repeat-btn').on('touchstart', function() { //반복 버튼을 누를경우

  if ($("#repeat-btn").attr('src') == "img/repeat_off.png") { //플레이 버튼이면
    $("#repeat-btn").attr('src', 'img/repeat_on.png');
    stateOfLoop();
  } //전체반복 off면 on
  else if ($("#repeat-btn").attr('src') == "img/repeat_on.png") {
    $("#repeat-btn").attr('src', 'img/repeat_one.png');
    stateOfLoop();
  } //전체반복 on이면 1 repaet
  else {
    $("#repeat-btn").attr('src', 'img/repeat_off.png');
    stateOfLoop();
  } //off상태

});


function stateOfLoop() {
  if ($("#repeat-btn").attr('src') == "img/repeat_off.png") { //off면 둘다끔
    OneLoop = false;
    totalLoop = false;
  } else if ($("#repeat-btn").attr('src') == "img/repeat_on.png") { //전체반복 on이면
    totalLoop = true;
    OneLoop = false;


  } else { //한곡만재생
    totalLoop = false;
    OneLoop = true;
  }

}

//셔플구현
function stateOfShuffle() {
  if ($("#random-btn").attr('src') == "img/random_off.png") { //off 면
    shuffle = false; //셔플 false
  } else {
    shuffle = true; //셔플 on
  }
  return;
}

$('#random-btn').on('touchstart', function() { //랜덤 버튼을 누르면


  if ($("#random-btn").attr('src') == "img/random_off.png") { //랜덤이 꺼져잇으면
    $("#random-btn").attr('src', 'img/random_on.png'); //랜덤 on으로
    randNumArr = randomIndexsort(); //셔플이켜질때 랜덤배엷배치

  } else {
    $("#random-btn").attr('src', 'img/random_off.png'); //랜덤 off
  }

  return;
});


function randomIndexsort() {

  stateOfShuffle(); //셔플상태확인
  var randarr = new Array();
  var cnt = document.getElementsByClassName('play').length; //현재 플레이리스트 개수를 가져옴
  var rnum;
  var tmp;


  for (var i = 0; i < cnt; i++) {
    randarr.push(i);
  } //배열에 플레이리스트 인덱스번호를 다넣음



  if (shuffle) { //셔플이 true면
    for (var i = 0; i < randarr.length; i++) {
      rnum = Math.floor(Math.random() * (cnt - 1)) + 0; //난수발생
      tmp = randarr[i];
      randarr[i] = randarr[rnum];
      randarr[rnum] = tmp;
    }
    return randarr;
  } //중복되지않는 난수 배열을 만듬



}
// 내 재생목록 모달박스 작업 0811
function myplaylist_on() {
  var modal = document.getElementById("myplaylistmodal");
  modal.style.display = "block";
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}


function deleteAll() { //전체 삭제 구현
  stopVideo(); //비디오 재생멈춤

  $('#user-playlist').empty();
  alert("현재 재생 목록들이 제거가 되었습니다.");
  Destory(); //삭제
  onYouTubeIframeAPIReady(); //ytplayer 다시만들기
  $("#music-title").text("");

  next_cnt = 0; //초기상태로 바꿔버림


  sessionStorage.clear();
  location.reload(); //새로고침
}

var multi_selcet = false;
var multiOn = false;

// 멀티 선택 구현 코드

$('#multi-add').css("display", "none");
$('#total-select').css("display", "none");

$('#multi-select').on('touchstart', function() { //여러개선택을 눌럿을떄
  var chartlist = document.querySelector('.chartlist-ul');
  var multiSelcet = document.querySelector('#multi-select');

  if (chartlist.children.length == 0) {
    alert("차트 선택을 하지 않았습니다.");
    return;
  }

  if (multiSelcet.value == "MultiOn") {
    multiOn = true;
  } else {
    multiOn = false;
  }

  if (multiOn) {
    multi_selcet = true;
    $('.onplay').css("display", "none");
    $('.listaddbutton').css("display", "none");
    $('#multi-add').css("display", "block"); //보이게함 활성화가되면
    $('#total-select').css("display", "block");
    multiOn = false;
    multiSelcet.value = "MultiOff";
    multiSelcet.innerText = "여러개취소";
    alert("여러개 선택이 켜졌습니다.");
  } else {
    multi_selcet = false;
    $('#multi-add').css("display", "none"); //작업이 끝나면 안보이게
    $('#total-select').css("display", "none");
    $('.chartlist-ul .onplay').removeAttr("style");
    $('.listaddbutton').removeAttr("style");
    multiSelcet.value = "MultiOn";
    multiSelcet.innerText = "여러개선택";
    var element = $('#chartlist-ul tr .addtolist'); //추가할 element를 가져옴
    for (var i = 0; i < element.length; i++) {
      if ($(element[i].children[1]).attr('src') == "img/finger.png") {
        $(element[i].children[1]).remove();
        continue;
      }
    }

  }
});

$('.chartlist-ul').on('touchstart', function(ev) {
  if (!multi_selcet) //true가아니면
    return; //종료
  if (ev.target.parentElement.tagName == "TD") {
    var tmp = ev.target.parentElement.parentElement.childNodes[4];
  }
  if (ev.target.parentElement.tagName == "TR") {
    var tmp = ev.target.parentElement.childNodes[4];
  }
  //    var tmp=ev.target.parentElement.childNodes[4];
  var p_node = tmp.parentElement;
  var artist = p_node.childNodes[2].firstElementChild.innerText;
  var title = p_node.children[2].lastElementChild.innerText;


  if (!Find_duplicate(title, artist)) {
    alert("재생목록에 이미 존재 합니다.");
    return; //중복인지 확인하고 중복이면 종료시킴
  }

  if (tmp.children.length == 1) { //자식이 한개일때만 추가
    var text = '<img class="selected-music" src="img/finger.png">'
    $(tmp).append(text);
    return;
  } else {
    $(tmp.children[1]).remove(); //해당 이미지 제거 //원상복구과정
  }



});


$('#multi-add').on('touchstart', function() {
  var multiSelcet = document.querySelector('#multi-select');
  var total_select = document.querySelector('#total-select');
  if (!multi_selcet) {
    return;
  } //꺼져잇으면 동작못하게
  var element = $('#chartlist-ul tr .addtolist').find('.selected-music');
  //element들을 가져옴
  if (element.length == 0) {
    alert("선택한 음악이 없습니다.");
    return;
  }


  for (var i = 0; i < element.length; i++) {
    var tmp = element[i].parentElement.parentElement;
    var cNode = element[i];
    $(cNode).remove(); //해당 이미지 제거 //원상복구과정
    add_selected_playlist(tmp);
  }


  $('#multi-add').css("display", "none"); //작업이 끝나면 안보이게
  $('#total-select').css("display", "none");
  $('.chartlist-ul .onplay').removeAttr("style");
  $('.listaddbutton').removeAttr("style");

  alert("플레이리스트에 담아 졌습니다.");
  multi_selcet = false;

  total_select.innerText = "전체선택";
  total_select.value = "totalOn";
  multiSelcet.innerText = "여러개선택";
  multiSelcet.value = "MultiOn";
  return;

});



var totalOn = false;
$('#total-select').on('touchstart', function() { //전체선택
  var text = '<img class="selected-music" src="img/finger.png">'
  var total_select = document.querySelector('#total-select');
  var element = $('#chartlist-ul tr .addtolist'); //추가할 element를 가져옴

  if (total_select.value == "totalOn") {
    totalOn = true;
  } else {
    totalOn = false;
  }



  if (!totalOn) { //전체선택이 off면
    for (var i = 0; i < element.length; i++) {
      $(element[i].children[1]).remove();
    }
    total_select.innerText = "전체선택";
    total_select.value = "totalOn";
    return;
  } else { //on이면
    for (var i = 0; i < element.length; i++) {
      if ($(element[i].children[1]).attr('src') == "img/finger.png") {
        continue;
      } else {
        $(element[i]).append(text);
      }
    }
    total_select.innerText = "전체취소";
    total_select.value = "totalOff";
  } //전체 선택이 x

});



function add_selected_playlist(node) { //플레이리스트추가 부분   8월3일 수정

  var parent = node;
  var artist = parent.childNodes[2].firstElementChild.innerText;
  var title = parent.children[2].lastElementChild.innerText;
  var videoId = node.id;
  var name = String(artist + " - " + title);

  if (!Find_duplicate(title, artist)) {
    return; //중복인지 확인하고 중복이면 종료시킴
  }


  //재생목록추가
  var text = '<ol class="item">\
            <div class="img"><img id="\'' + videoId + '\'" src="img/li_play.png" class="play" onClick="play_Music(\'' + videoId + '\',\'' + name + '\')">\
            </div>\
            <div class="info">\
                <span class="title">' + title + '</span>\
                <br>\
                <span class="artist">' + artist + '</span>\
            </div>\
            <img class="remove" src="img/x_button.png">\
        </ol>';

  $("#user-playlist").append(text);

  sessionStorage.setItem("'" + videoId + "'", text);

}

function savethislist() {
  var txtforlist = document.getElementById("listsavetitleinput");
  var nowplaylist = document.getElementById("user-playlist");
  var nowsongs = nowplaylist.children;
  var playlistlist = document.getElementById("listofmyplaylist");


  if (nowsongs.length == 0) {
    alert("저장할 노래가 존재하지 않습니다.");
    return;
  }

  if (txtforlist.value == '') {
    alert('플레이리스트의 제목을 입력해주세요.');
    return;
  }

  var forsending = new Object();
  forsending.playlistname = txtforlist.value;
  forsending.dataLength = nowsongs.length;

  var playingsongArray = new Array();

  var playlistdata = function(title, artist, videoId) {
    this.title = title;
    this.artist = artist;
    this.videoId = videoId;
  }

  for (var i = 0; i < nowsongs.length; i++) {

    var title = nowsongs[i].children[1].children[0].innerText;
    var artist = nowsongs[i].children[1].children[2].innerText;
    var videoID = nowsongs[i].children[0].children[0].id;


    var data = new playlistdata(title, artist, videoID);
    playingsongArray.push(data);

  }


  forsending.songlist = playingsongArray;

  var jsondata = JSON.stringify(forsending);
  jsondata = jsondata.replaceAll("'", "");






  $.ajax({
    url: "/php/addplaylist.php",
    type: "POST",
    data: JSON.parse(jsondata),
    success: function(result) {
      var playli = document.createElement('li');
      var playliname = document.createElement('span');
      var playlidltbtn = document.createElement('button');
      playli.className = "playli";
      playlidltbtn.className = "mypldltbtn btn btn-primary";
      playlidltbtn.setAttribute("onclick", "playlist_delete(event)");
      playliname.innerHTML = txtforlist.value;
      playliname.className = "mypl";
      playliname.setAttribute("onclick", "get_thisplaylist(event)");
      playlidltbtn.innerHTML = 'X';
      playli.appendChild(playliname);
      playli.appendChild(playlidltbtn);


      if (playlistlist.children.length == 0) {
        playlistlist.appendChild(playli);
        alert(result);
      } else {
        for (var i = 0; i < playlistlist.children.length; i++) {
          if (playlistlist.children[i].children[0].innerText == txtforlist.value) {
            alert(result);

            break;
          } else {
            if (i == playlistlist.children.length - 1) {
              playlistlist.appendChild(playli);
              alert(result);
              break;
            }
          }

        }
      }
    },
    error: function(request, error) {

      alert(" Can't do because: " + error);
    }
  });
}

function playlist_delete(ev) {
  var deleteCheck = confirm("이 재생목록을 삭제하시겠습니까?")
  var playlilist = document.getElementById("listofmyplaylist");
  var playliname = playlilist.children[0].children[0].innerText;

  if (deleteCheck) {
    $.ajax({
      url: "/php/delete_playlist.php",
      type: "POST",
      data: {
        "name": playliname
      },
      success: function(result) {
        playlilist.removeChild(ev.target.parentNode);
        alert(result);
      }
    });
  } else {
    return false;
  }
}


String.prototype.replaceAll = function(org, dest) {
  return this.split(org).join(dest);
}

function get_thisplaylist(ev) {
  var playlistname = ev.target.innerText;

  $.ajax({
    url: "/php/getPlaylist.php",
    type: "POST",
    data: {
      "name": playlistname
    },
    success: function(result) {
      data = JSON.parse(result);

      stopVideo(); //비디오 재생멈춤
      $('#user-playlist').empty();
      Destory(); //삭제
      onYouTubeIframeAPIReady(); //ytplayer 다시만들기
      $("#music-title").text("");
      next_cnt = 0; //초기상태로 바꿔버림
      sessionStorage.clear();


      for (var i = 0; i < data.length; i++) {
        name = String(data[i]['artist'] + " - " + data[i]['title']);

        var text = '<ol class="item">\
           <div class="img"><img id="\'' + data[i]['videoId'] + '\'" src="/img/li_play.png" class="play" onClick="play_Music(\'' + data[i]['videoId'] + '\',\'' + name + '\')">\
           </div>\
           <div class="info">\
           <span class="title">' + data[i]['title'] + '</span>\
           <br>\
           <span class="artist">' + data[i]['artist'] + '</span>\
           </div>\
           <img class="remove" src="/img/x_button.png">\
           </ol>';

        $("#user-playlist").append(text);
        sessionStorage.setItem("'" + data[i]['videoId'] + "'", text);
      }
      alert('' + playlistname + ' 목록을 정상적으로 불러왔습니다.');
      location.reload(); //새로고침
    }
  });

}

var mo_cnt = 0;

function list1() {
  mo_cnt = mo_cnt - 1;
  if (mo_cnt == 0) {

    $('#bu_L').css('visibility', 'hidden');
    $('.mobile1').css('display', 'block');
    $('.mobile2').css('display', 'none');
    $('.mobile3').css('display', 'none');
  }
  if (mo_cnt == 1) {
    $('#bu_R').css('visibility', 'inherit');
    $('#bu_L').css('display', 'block');
    $('#bu_R').css('display', 'block');
    $('.mobile1').css('display', 'none');
    $('.mobile2').css('display', 'block');
    $('.mobile3').css('display', 'none');
  }
  if (mo_cnt == 2) {
    $('#bu_R').css('visibility', 'hidden');
    $('.mobile2').css('display', 'none');
    $('.mobile3').css('display', 'block');
    $('.mobile1').css('display', 'none');
  }
}

function list2() {
  mo_cnt = mo_cnt + 1;

  if (mo_cnt == 1) {

    $('#bu_L').css('visibility', 'inherit');
    $('#bu_L').css('display', 'block');
    $('.mobile1').css('display', 'none');
    $('.mobile2').css('display', 'block');
    $('.mobile3').css('display', 'none');
  }
  if (mo_cnt == 2) {

    $('#bu_R').css('visibility', 'hidden');
    $('.mobile1').css('display', 'none');
    $('.mobile3').css('display', 'block');
    $('.mobile2').css('display', 'none');
  }
}

$('#bu_L').on('touchstart', function() { //검색 텍스트값 비워주기
  list1();
});
$('#bu_R').on('touchstart', function() { //검색 텍스트값 비워주기
  list2();
});

$('#myplaylist_btn').on('touchstart', function() { //검색 텍스트값 비워주기
  myplaylist_on();
});


$('#control123').on('touchstart', function() { //검색 텍스트값 비워주기
  ControlVideo();
});

function ControlVideo() { //8월 1일 노드 재배치 수정

  //노드 재배치
  if ($("#control123").attr('src') == "/img/play.png") //플레이 버튼이면
  {
    playVideo(); //재생
    $("#control123").attr('src', '/img/pause.png');
  } else {
    pauseVideo();
    $("#control123").attr('src', '/img/play.png');
  }

}
$('#chart_').on('touchstart', function() { //검색 텍스트값 비워주기
  var multiSelcet = document.querySelector('#multi-select');
  if (multiSelcet.value == "MultiOff") {
    alert("여러개 담기중입니다.");
  }
});