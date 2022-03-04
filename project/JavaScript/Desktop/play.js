var maxtime;
var player1;
var event;
var plid;
var na;
//곡 넘길려고 next_cnt 변수 추가 0801

//재생목록 인덱스 정렬시키기위한 배열
var IndexArray = new Array();
var current_title;
//중복방지 변수


//재생리스트의 상태를 나타내는변수
var shuffle = false;
var totalLoop = false;
var OneLoop = false;
var shufflecnt = 0;




function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('pl1', {
        width: '1px',
        height: '1px',
        playerVars: {
            'controls': 0,
            'showinfo': 0,
            'playsinline': 1,
            'rel': 0,
            'fs': 0,
            'origin': "https://www.youtube.com"
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onPlayerError
        }
    });

    $("#pl1").stop().animate({
        opacity: '0'
    }, 0);
};



function onPlayerError(event) { //에러 발생시 일로 이동함
    var errorCheck = Number(event.data);
    console.log(errorCheck);
    if (errorCheck == 150) {
        ErrorControl = true;
        return;
    }
} //에러테스팅 


function onPlayerReady(event) {
    event.target.playVideo();
}



function onPlayerStateChange(ev) { //재생 및 정지일떄감지하는이벤트 함수


    stateOfLoop(); //이미지에 따른 상태확인 코드 넣기 totalLoop oneLoop true false로
    stateOfShuffle(); //셔플 상태확인

    if (ev.data == YT.PlayerState.PLAYING) { //동영상이 재생중일떄    
        init_Setting(); //현재 재생 중인거에 대한 셋팅
    }

    if (ev.data == YT.PlayerState.ENDED) { //0804 플레이리스트 관련 버그 개선 플레이어목록가지고 인덱스번호갱신
        if (shuffle) {
            shufflecnt++; //
        } //끝났을떄 셔플이 켜있으면 
        else {
            shufflecnt = 0; //셔플이 꺼잇으면  다시 0으로 
        }
        //재생종료시 
        //  prev_index=next_cnt; //현재 인덱스를 저장함


        R_bu();
    }

}


function getCurrentTime() {
    return player1.getCurrentTime();
}

function getDuration() {
    return player1.getDuration();
}


///일시정지, 재생, 멈춤,볼륨, 재생바 기능 js
function playVideo() {
    player1.playVideo();
}

function stopVideo() {
    player1.stopVideo();
}

function pauseVideo() {
    player1.pauseVideo();
}

function soundControl(number) {
    player1.setVolume(number);
}

function Progress(number) {
    player1.seekTo(number, Boolean);
}

function Destory() {
    player1.destroy();
}


function loadVideoById(id, start, quality) {
    player1.loadVideoById(id, start, quality);
}




function init_Setting() {
    current_title = String(document.querySelector(".ongoing-player #music-title").innerText); //현재재생중인거
    current_title = current_title.split(' - ');
    current_title = String(current_title[0] + current_title[1]); //현재 재생중인노래 제목
    current_title = current_title.trim();
  

    Find_Index(); //플레이 인덱스 번호를 찾음

    var Element = document.getElementsByClassName('play')[next_cnt];

    Element.style.backgroundColor = "black"; //재생중인거 색깔 바꿈
    Element.setAttribute("src", "img/rad_play_button.png");

    $("#jb-footer .ongoing-player #control").attr('src', '/img/pause.png'); //이미지를 바꿈
    maxtime = getDuration(); //해당 동영상의 시간을 가져옴
    $(".timeBar").attr("min", 0); //timebar 부분 속성 적용 type=range min값 0
    $(".timeBar").attr("max", maxtime); //max값을 maxTime의값
    $(".timeBar").val(0);


    playerSetTime = setInterval(function () { //일정시간마다실행되는함수 =>재생하는데 시간을 나타내주는거같음

        var empty = String(document.querySelector('#music-title').innerText); //8월 1일 엘리먼트 삭제부분추가
        if (empty == "") { //타이틀이 비어있으면 //8월 1일 엘리먼트 삭제부분추가
            clearInterval(playerSetTime); //타이머 중단시켜버리기//8월 1일 엘리먼트 삭제부분추가
            $(".time-bar").text(""); //8월 1일 엘리먼트 삭제부분추가
            return;
        }

        currentTime = getCurrentTime(); //현재시간을 가져와서저장하고
        $(".timeBar").val(currentTime); //타임바의값을 현재시간으로 정함

        min = currentTime / 60; //분으로 표시하고 
        sec = currentTime % 60; //초로 표시함 나머지값을

        (min < 10) ? min = "0" + Math.floor(min): min = Math.floor(min); //10분보다작으면
        (sec < 10) ? sec = "0" + Math.floor(sec): sec = Math.floor(sec);

        maxMin = maxtime / 60;
        maxSec = maxtime % 60;

        (maxMin < 10) ? maxMin = "0" + Math.floor(maxMin): maxMin = Math.floor(maxMin);
        (maxSec < 10) ? maxSec = "0" + Math.floor(maxSec): maxSec = Math.floor(maxSec);

        $(".time-bar").text(min + ":" + sec + " - " + maxMin + ":" + maxSec); //재생시간을 나타내줌


    }, 100);
}


(function () {
    var obj = JSON.parse(sessionStorage.getItem("now-playing"));
    if (obj != null) {
        play_Music(obj['videoId'], obj['song']);
    }
}());