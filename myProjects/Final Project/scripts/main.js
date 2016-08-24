 var isOpen = true;


$(document).ready(function(){
    $("#dropDown").on('click', windowSlideDown);

}); 


function windowSlideDown(){
    if(isOpen){
        $('nav').addClass('expandNav');
        $('#mobileLinks a').show(0);
    }else{
        $('nav').removeClass('expandNav');
        $('#mobileLinks a').hide(0);
    }
    isOpen = !isOpen;
};

