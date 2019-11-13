$(document).ready(function() {
    $(window).load(function() {
         $("#fade-content").css("display","none");
         $("#fade-content").fadeIn(500);
     });
     $(".work-one").hover(function() {
         $("#work").css("background-image","url('images/kharasso-back.jpg')");
         $(".work-text").css("color","rgba(0, 0, 0, .3)");
         $(".light-back").css("color","rgba(0, 0, 0, .3)");
     },function(){
     $("#work").css("background-image","none");
     $(".work-text").css("color","#33384c");
     $(".light-back").css("color","#33384c");
   });
     $(".work-two").hover(function() {
         $("#work").css("background-image","url('images/religio-up-back.jpg')");
         $(".work-text").css("color","rgba(225, 225, 225, .3)");
         $(".light-back").css("color","rgba(225, 225, 225, .3)");
     },function(){
     $("#work").css("background-image","none");
     $(".work-text").css("color","#33384c");
     $(".light-back").css("color","#33384c");
   });
     $(".work-three").hover(function() {
         $("#work").css("background-image","url('images/crew-tools-back.jpg')");
         $(".work-text").css("color","rgba(0, 0, 0, .3)");
         $(".light-back").css("color","rgba(0, 0, 0, .3)");
     },function(){
     $("#work").css("background-image","none");
     $(".work-text").css("color","#33384c");
     $(".light-back").css("color","#33384c");
   });
     $(".work-four").hover(function() {
         $("#work").css("background-image","url('images/notesy-back.jpg')");
         $(".work-text").css("color","rgba(0, 0, 0, .5)");
         $(".light-back").css("color","rgba(0, 0, 0, .5)");
    },function(){
     $("#work").css("background-image","none");
     $(".work-text").css("color","#33384c");
     $(".light-back").css("color","#33384c");
   });
     $(".work-five").hover(function() {
         $("#work").css("background-image","url('images/religio-back.jpg')");
         $(".work-text").css("color","rgba(225, 225, 225, .5)");
         $(".light-back").css("color","rgba(225, 225, 225, .5)");
    },function(){
     $("#work").css("background-image","none");
     $(".work-text").css("color","#33384c");
     $(".light-back").css("color","#33384c");
   });
     $(".work-six").hover(function() {
         $("#work").css("background-image","url('images/notesy-back.jpg')");
         $(".work-text").css("color","rgba(0, 0, 0, .3)");
         $(".light-back").css("color","rgba(0, 0, 0, .3)");
     },function(){
     $("#work").css("background-image","none");
     $(".work-text").css("color","#33384c");
     $(".light-back").css("color","#33384c");
   });
     
     var setupParallax = function () {
         if (!mobileBrowser()) {
             $(window).scroll(function(e) {
                 var scrolled = $(window).scrollTop(),
                     header = $('.site-header');
 
                 header.css('top', -(scrolled) * 0.5 + 'px');
 
                 if (scrolled > $(document).height() - $(window).height() - 470) {
                     var scrollPos = scrolled - ($(document).height() - $(window).height() - 470);
                     var position = scrollPos / 10;
                     var opacity = (scrollPos * 1) / 470;
 
                     $('.indicator').css({ opacity: opacity, left: position + '%' });
                 }
             });
         } else {
             $('body').addClass('mobile');
         }
     };
     $(".tinkering").click(function() {
     $('html, body').animate({
         scrollTop: $("#work").offset().top
     }, 1000);
 });
 
     $('.work').click(function() {
 
         event.preventDefault();
         
         newLocation = this.href;
         
         $('body').fadeOut(500, newpage);
         
     });
     
     function newpage() {
         
         window.location = newLocation;
         
     }
     $("#about").css("display","none");
     $(".about").click(function() {
         $("#about").fadeIn(500);
     });
     $(".back").click(function() {
         $("#about").fadeOut(500);
     });
 
     $(function() {
         $('.back-page').click(function() {
             parent.history.back();
             return false;
         });
     });
     // CHECK MOBILE
     var mobileBrowser = function() {
         var mobile = false;
         (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) mobile = true; })(navigator.userAgent||navigator.vendor||window.opera,'https://detectmobilebrowser.com/mobile');
 
         return mobile;
     };
 
 
     if ($(".site-header").length > 0) { setupParallax(); }
 });
 
$(document).ready(function() {
    
    /* Give everything the before Class first */
    $('.practice a.internal').addClass('before');
    $('.first a.internal').addClass('before');
    $('.second a.internal').addClass('before');
    $('.third a.internal').addClass('before');
    
    /* Make all of the links move together practice */
    $('.practice a.internal').mouseover(function () {
        $('.practice a.internal').removeClass('before');
        $('.practice a.internal').addClass('after');
    });

    $('.practice a.internal').mouseout(function () {
        $('.practice a.internal').removeClass('after');
        $('.practice a.internal').addClass('before');
    });
    
    /* Make all of the links move together section 1 */
    $('.first a.internal').mouseover(function () {
        $('.first a.internal').removeClass('before');
        $('.first a.internal').addClass('after');
    });

    $('.first a.internal').mouseout(function () {
        $('.first a.internal').removeClass('after');
        $('.first a.internal').addClass('before');
    });
    
    /* Make all of the links move together section 2 */
    $('.second a.internal').mouseover(function () {
        $('.second a.internal').removeClass('before');
        $('.second a.internal').addClass('after');
    });

    $('.second a.internal').mouseout(function () {
        $('.second a.internal').removeClass('after');
        $('.second a.internal').addClass('before');
    });
    
    /* Make all of the links move together section 3 */
    $('.third a.internal').mouseover(function () {
        $('.third a.internal').removeClass('before');
        $('.third a.internal').addClass('after');
    });

    $('.third a.internal').mouseout(function () {
        $('.third a.internal').removeClass('after');
        $('.third a.internal').addClass('before');
    });
    
    /* Hide Paragraphs */
    
    // $( '.practice .delay' ).css("display","none");
    // $( '.main' ).css("display","none");
    
    /* Practice */
    $('.practice .one a.internal').click(function () {
        $( '.practice .one' ).removeClass('visible');
        $( '.practice .one' ).addClass('hidden');
        $( '.practice .two' ).removeClass('hidden');
        $( '.practice .two' ).addClass('visible');
        $( '.practice .delay' ).delay(500).fadeIn(1000);
        // $( '.practice ').delay(3000).fadeOut(500);
        $( '.main' ).delay(1000).fadeIn(500);
    });
    
    /* First */
    $('.first .one a.internal').click(function () {
        $( '.first .one' ).removeClass('visible');
        $( '.first .one' ).addClass('hidden');
        $( '.first .two' ).removeClass('hidden');
        $( '.first .two' ).addClass('visible');
    });
    
    $('.first .two a.internal').click(function () {
        $( '.first .two' ).removeClass('visible');
        $( '.first .two' ).addClass('hidden');
        $( '.first .three' ).removeClass('hidden');
        $( '.first .three' ).addClass('visible');
    });
    
     $('.first .three a.internal').click(function () {
        $( '.first .three' ).removeClass('visible');
        $( '.first .three' ).addClass('hidden');
        $( '.first .four' ).removeClass('hidden');
        $( '.first .four' ).addClass('visible');
    });
    
     $('.first .four a.internal').click(function () {
        $( '.first .four' ).removeClass('visible');
        $( '.first .four' ).addClass('hidden');
        $( '.first .five' ).removeClass('hidden');
        $( '.first .five' ).addClass('visible');
    });
    
     $('.first .five a.internal').click(function () {
        $( '.first .five' ).removeClass('visible');
        $( '.first .five' ).addClass('hidden');
        $( '.first .six' ).removeClass('hidden');
        $( '.first .six' ).addClass('visible');
    });
    
     $('.first .six a.internal').click(function () {
        $( '.first .six' ).removeClass('visible');
        $( '.first .six' ).addClass('hidden');
        $( '.first .seven' ).removeClass('hidden');
        $( '.first .seven' ).addClass('visible');
    });
    
     $('.first .seven a.internal').click(function () {
        $( '.first .seven' ).removeClass('visible');
        $( '.first .seven' ).addClass('hidden');
        $( '.first .eight' ).removeClass('hidden');
        $( '.first .eight' ).addClass('visible');
    });
    
    /* Second */
    $('.second .one a.internal').click(function () {
        $( '.second .one' ).removeClass('visible');
        $( '.second .one' ).addClass('hidden');
        $( '.second .two' ).removeClass('hidden');
        $( '.second .two' ).addClass('visible');
    });
    
    $('.second .two a.internal').click(function () {
        $( '.second .two' ).removeClass('visible');
        $( '.second .two' ).addClass('hidden');
        $( '.second .three' ).removeClass('hidden');
        $( '.second .three' ).addClass('visible');
    });
    
     $('.second .three a.internal').click(function () {
        $( '.second .three' ).removeClass('visible');
        $( '.second .three' ).addClass('hidden');
        $( '.second .four' ).removeClass('hidden');
        $( '.second .four' ).addClass('visible');
    });
    
     $('.second .four a.internal').click(function () {
        $( '.second .four' ).removeClass('visible');
        $( '.second .four' ).addClass('hidden');
        $( '.second .five' ).removeClass('hidden');
        $( '.second .five' ).addClass('visible');
    });
    
     $('.second .five a.internal').click(function () {
        $( '.second .five' ).removeClass('visible');
        $( '.second .five' ).addClass('hidden');
        $( '.second .six' ).removeClass('hidden');
        $( '.second .six' ).addClass('visible');
    });
    
     $('.second .six a.internal').click(function () {
        $( '.second .six' ).removeClass('visible');
        $( '.second .six' ).addClass('hidden');
        $( '.second .seven' ).removeClass('hidden');
        $( '.second .seven' ).addClass('visible');
    });
    
     $('.second .seven a.internal').click(function () {
        $( '.second .seven' ).removeClass('visible');
        $( '.second .seven' ).addClass('hidden');
        $( '.second .eight' ).removeClass('hidden');
        $( '.second .eight' ).addClass('visible');
    });
    
    /* Third */
    $('.third .one a.internal').click(function () {
        $( '.third .one' ).removeClass('visible');
        $( '.third .one' ).addClass('hidden');
        $( '.third .two' ).removeClass('hidden');
        $( '.third .two' ).addClass('visible');
    });
    
    $('.third .two a.internal').click(function () {
        $( '.third .two' ).removeClass('visible');
        $( '.third .two' ).addClass('hidden');
        $( '.third .three' ).removeClass('hidden');
        $( '.third .three' ).addClass('visible');
    });
    
     $('.third .three a.internal').click(function () {
        $( '.third .three' ).removeClass('visible');
        $( '.third .three' ).addClass('hidden');
        $( '.third .four' ).removeClass('hidden');
        $( '.third .four' ).addClass('visible');
    });
    
     $('.third .four a.internal').click(function () {
        $( '.third .four' ).removeClass('visible');
        $( '.third .four' ).addClass('hidden');
        $( '.third .five' ).removeClass('hidden');
        $( '.third .five' ).addClass('visible');
    });
    
     $('.third .five a.internal').click(function () {
        $( '.third .five' ).removeClass('visible');
        $( '.third .five' ).addClass('hidden');
        $( '.third .six' ).removeClass('hidden');
        $( '.third .six' ).addClass('visible');
    });
    
     $('.third .six a.internal').click(function () {
        $( '.third .six' ).removeClass('visible');
        $( '.third .six' ).addClass('hidden');
        $( '.third .seven' ).removeClass('hidden');
        $( '.third .seven' ).addClass('visible');
    });
    
     $('.third .seven a.internal').click(function () {
        $( '.third .seven' ).removeClass('visible');
        $( '.third .seven' ).addClass('hidden');
        $( '.third .eight' ).removeClass('hidden');
        $( '.third .eight' ).addClass('visible');
    });
    
    
/* End */
});