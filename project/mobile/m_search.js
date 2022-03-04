var videoIdBox = new Array();
var availableData = [];


$(function() {
  $.getJSON("./json/total_charts.json", function(json) {
    for (var i = 0; i < json.entries.length; i++) {
      var tmp = String(json.entries[i].artist + " - " + json.entries[i].title);
      tmp = tmp.trim();
      if (availableData.indexOf(tmp) < 0) {
        availableData.push(tmp);
        videoIdBox[tmp] = json.entries[i].videoId;
      }
    }
  });

});


$("#sin").autocomplete({
  source: availableData,
  select: function(event, ui) {
    $('#user-playlist').on('dbclick', function(event) {
      var videoId = String(videoIdBox[ui.item.value]).trim();
      var modal = document.getElementById("upload_");
      var text = String(ui.item.value);
      text = text.split(' - ');
      var artist = text[1].trim();
      var title = text[0].trim();
      serach_addPlaylist(title, artist, videoId); //플레이리스트 추가
      modal.style.display = "none"; //모달 숨김
    });
  },
  focus: function(event, ui) {
    return false;
    //event.preventDefault();
  }
});



function serach_addPlaylist(title, artist, videoId) {

  if (!Find_duplicate(title, artist)) {
    alert("플레이리스트에 담았습니다.(중복 X)");
    return; //중복인지 확인하고 중복이면 종료시킴
  }

  var name = String(artist + " - " + title);
  var text = '<ol class="item">\
        <div class="img"><img src="img/li_play.png" class="play" onClick="play_Music(\'' + videoId + '\',\'' + name + '\')">\
        </div>\
        <div class="info">\
            <span class="title">' + title + '</span>\
            <br>\
            <span class="artist">' + artist + '</span>\
        </div>\
        <img class="remove" src="img/x_button.png">\
    </ol>';

  $("#user-playlist").append(text);

}


$('#sbtn').on('touchstart', function() { //검색 텍스트값 비워주기
  $('.liist_').css('display', 'block');
  var videoId = String(videoIdBox[document.getElementById("sin").value]).trim();
  var modal = document.getElementById("upload_");
  var text = String(document.getElementById("sin").value);
  text = text.split(' - ');
  var title = text[1].trim();
  var artist = text[0].trim();
  serach_addPlaylist(title, artist, videoId); //플레이리스트 추가
  $('#sin').val('');
  // $('.liist_').css('display','block');
  return;
});


$('#chart_').on('touchmove', function() { //검색 텍스트값 비워주기
  // $('.liist_').css('display','block');
});
$('#chart_').click(function() { //검색 텍스트값 비워주기
  // $('.liist_').css('display','block');
});

$('body').click(function(e) {
  var class_by_id = $('#collapse4').attr('class');
  if (class_by_id == "collapse show") {
    $('#ui-id-1').css('display', 'block');
  } else {
    $('#ui-id-1').css('display', 'none');
  }
});

$('#ui-id-1').click(function(e) {
  $('#ui-id-1').css('display', 'none');
});

$('#ui-id-1').attr('class', '');
// $('#ui-id-1').attr('data-toggle','collapse');  
// $('#ui-id-1').attr('data-target','#collapseThree'); 
// $('#ui-id-1').attr('aria-expanded','false'); 
// $('#ui-id-1').attr('aria-controls','collapseThree'); 
$('.liist_').attr('data-toggle', 'collapse');
$('.liist_').attr('data-target', '#collapseTwo');
$('.liist_').attr('aria-expanded', 'false');
$('.liist_').attr('aria-controls', 'collapseTwo');

$('#ui-id-1').css('background-color', 'black;');
$('#ui-id-1').css('height', '496px');
$('#ui-id-1').css('overflow', 'auto');
$('#ui-id-1').css('top', '170.2px');
$('#ui-id-1').css('padding-left', '24px');
$('#ui-id-1').css('font-size', '19px');
$('.ui-helper-hidden-accessible').css('display', 'none');
$('#sbtn').click(function(e) {

});

//해쉬맵