 var isOpen = true;


$(document).ready(function(){
    $("#dropDown").on('click', windowSlideDown);
    $(window).on('scroll', unhideHeader);

}); 


function windowSlideDown(){
    if(isOpen){
        $('nav').addClass('expandNav');
        $('#mobileLinks li').css('visibility', 'visible');
    }else{
        $('nav').removeClass('expandNav');
        $('#mobileLinks li').css('visibility', 'hidden');
    }
    isOpen = !isOpen;
};


function unhideHeader(){
    if ($(window).scrollTop() < 950){
        $('#site1').css('margin-top', '-63px');
    }
    else {
        $('#site1').css('margin-top', '4px');
    }
}
