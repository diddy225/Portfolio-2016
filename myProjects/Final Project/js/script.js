

$(document).ready(function(){
    //HEADER//


    //END OF HEADER//

    //SKILL BOXES//
    $('#html').on('mouseenter', type);
    $('#html').on('mouseleave', reset);
    $('#css').on('mouseenter', moveHeader);
    $('#css').on('mouseleave', stopHeader);
    //END OF SKILL BOXES//
    
});

   //MAIN HEADER// 

function hideHeader(){
    if ($(window).scrollTop() > 260){
        $('.main-header').slideUp(10);
    }
    else {
        $('.main-header').slideDown(10);
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
function moveHeader(){
    $('#css h1').css('position', 'absolute');
    $('#css h1').css('animation', 'move 5s infinite');
}

function stopHeader(){
    $('#css h1').css('position', 'static');
    $('#css h1').css('animation', 'none');
}



//END OF SKILL BOXES//