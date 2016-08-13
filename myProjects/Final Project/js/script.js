

$(document).ready(function(){
    $(document).on('scroll', hideBar);
    $(document).on('scroll', fixNav);
});

function hideBar(){

    var speed = 700
    if ($(window).scrollTop() < 60) {
    $('.nav').slideUp(speed);
    $('#myName').css('display', 'unset');
    
}else {
    $('.nav').slideDown(speed);
    $('#myName').addClass('slideIn');
    $('#myName').css('display', 'none');
}
};

function fixNav(){

    if ($(window).scrollTop() > 750){
        $('.nav').css('background-attachment', 'fixed');
        $('.about').css('background-attachment', 'fixed');
    } else{

    }
}