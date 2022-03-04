function ables() {
    $('#idtext').removeAttr('disabled');
    $('#pwtext').removeAttr('disabled');
    $('#nametext').removeAttr('disabled');
    $('#emailtext').removeAttr('disabled');
    $('.sex_').removeAttr('disabled');
    // $('.sex_').removeAttr('checked');
    $('#changeinform').css('display','none');
    $('.saveinforms').css('display','block');
}
function cancel(){
    location.reload();
}