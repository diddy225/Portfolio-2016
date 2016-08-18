

$(document).ready(function(){
    //HEADER//
    $(document).on('scroll', toggleSize);
    $(document).on('scroll', hideHeader);
    //END OF HEADER//

    //SKILL BOXES//
    $('#html').on('mouseenter', type);
    $('#html').on('mouseleave', reset);
    $('#css').on('mouseenter', moveCss);
    $('#css').on('mouseleave', resetCss);
    $('#responsive').on('mouseenter', moveResponsive);
    $('#responsive').on('mouseleave', resetResponsive);
    $('#github').on('mouseenter', moveGithub);
    $('#github').on('mouseleave', resetGithub);
    //END OF SKILL BOXES//
    
});

   //MAIN HEADER// 
function toggleSize(){
    if ($(window).scrollTop() > 10){
        $('.main-header').animate( { height:"70px" }, { duration:0 });
        $('#title').slideUp(0);
        $('#name').css('display', 'unset');
        $('#name').fadeIn(50);
        $('.main-header').css('background-color', 'transparent');
    }

    else {
        $('.main-header').animate( { height:"326px" }, { duration:0 });
        $('#name').fadeOut(50);
        $('#name').css('display', 'none');
        $('#title').fadeIn(50);
        $('#title').slideDown(0);
        $('.main-header').css('background-color', '#3F88C5');
    }
}
function hideHeader(){
    if ($(window).scrollTop() > 260){
        $('.main-header').slideUp(50);
    }
    else {
        $('.main-header').slideDown(50);
    }
}
  //END OF MAIN HEADER//

  //SKILL BOXES FUNCTION//

  //TYPED.JS//
function type(){
    $('#typed').addClass('unhide');
    $('#typed').css('float', 'left');
    $('#bumpRight').css('float', 'right');
    $('#bumpRight').css('font-size', '4em');
    $('#typed').typed({
    strings: ["<!DOCTYPE html>\n<html>\n<head></head>\n<body>\n<p>Hello World</p>\n</body>\n</html>"],
    contentType: 'text',
    showCursor: false,
    typeSpeed: 50,
    });
}

function reset(){
    $('#typed').addClass('hide');
    $('#typed').css('float', 'none');
    $('#bumpRight').css('float', 'none');
    $('#bumpRight').css('font-size', '3em');
    $('#typed').typed({
    strings: [" "],
    contentType: 'text',
    showCursor: false,
    });
}

//END TYPED.JS//

function moveCss(){
    $('#css h1').css('float', 'right');
    $('#css h1').css('text-shadow', '2px 2px 8px #000000');
    $('#css h1').css('font-size', '4em');


}

function resetCss(){
    $('#css h1').css('float', 'none');
    $('#css h1').css('text-shadow', 'none');
    $('#css h1').css('font-size', '3em');
}


function moveResponsive(){
    $('#responsive h1').css('float', 'right');
    $('#responsive h1').css('text-shadow', '2px 2px 8px #000000');
    $('#responsive h1').css('font-size', '4em');


}

function resetResponsive(){
    $('#responsive h1').css('float', 'none');
    $('#responsive h1').css('text-shadow', 'none');
    $('#responsive h1').css('font-size', '3em');
}

function moveGithub(){
    $('#github h1').css('float', 'right');
    $('#github h1').css('text-shadow', '2px 2px 8px #000000');
    $('#github h1').css('font-size', '4em');
}

function resetGithub(){
    $('#github h1').css('float', 'none');
    $('#github h1').css('text-shadow', 'none');
    $('#github h1').css('font-size', '3em');
}

//END OF SKILL BOXES//