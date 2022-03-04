    var videoIdBox=new Array();
    var availableData=[];


    $(function() {   
        $.getJSON("json/total_charts.json", function (json) {
            for (var i = 0; i < json.entries.length; i++) {
               var tmp=String(json.entries[i].artist+" - "+json.entries[i].title);
                tmp=tmp.trim();
                if(availableData.indexOf(tmp)<0){
                    availableData.push(tmp);
                    videoIdBox[tmp]=json.entries[i].videoId;
                }
            }
            });
            
        });
        
        $("#sin").autocomplete({ 
            source: availableData,
            select: function(event, ui) {
                var videoId=String(videoIdBox[ui.item.value]).trim();
                var modal = document.getElementById("upload_");
                var text=String(ui.item.value);
                text=text.split(' - ');

                var title=text[1].trim();
                var artist=text[0].trim();
                
                serach_addPlaylist(title,artist,videoId); //플레이리스트 추가

                modal.style.display = "none"; //모달 숨김
            },
            focus: function(event, ui) {
                return false;
                //event.preventDefault();
            }
        });
    

function serach_addPlaylist(title,artist,videoId) { 

    if(!Find_duplicate(title,artist)){
        alert("재생목록에 이미 존재 합니다.");
        return; //중복인지 확인하고 중복이면 종료시킴
    } 

    var name=String(artist+" - "+title);
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
         sessionStorage.setItem("'" + videoId + "'", text);
 
        $("#user-playlist").append(text);        
 }


 $('#sbtn').on('click',function(){ //검색 텍스트값 비워주기
    $('#sin').val('');
    return;
});

$('#ui-id-1').css('background-color','black;');
$('#ui-id-1').attr('class','ui-menu  ui-autocomplete');
$('#ui-id-1').css('height','200px');
$('#ui-id-1').css('overflow','auto');
//해쉬맵
