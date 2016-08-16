

$(document).ready(function(){
    $(document).on('scroll', toggleSize);


});
    
function toggleSize(){
    if ($(window).scrollTop() > 10){
        $('.main-header').animate( { height:"70px" }, { duration:0 });
        $('#title').slideUp(0);
        $('#name').css('display', 'unset');
        $('#name').fadeIn(100);
       
    }
    else{
        $('.main-header').animate( { height:"450px" }, { duration:0 });
         $('#name').fadeOut(100);
         $('#name').css('display', 'none');
         $('#title').fadeIn(400);
         $('#title').slideDown(300);
    }
  
};