//라이트모드 다크모드 쿠키로 만들기
var cookieCheck = document.cookie.indexOf('moon');

if(cookieCheck > -1){
    $('body').addClass('moon').removeClass('sun');
    $('.btn_moon').hide();
    $('.btn_sun').show();
} else {
    $('body').addClass('sun').removeClass('moon');
    $('.btn_sun').hide();
    $('.btn_moon').show();
}


function springCookie(brightness){
    if(brightness == 'moon'){
        $('body').addClass('moon').removeClass('sun');
        $('.btn_moon').hide();
        $('.btn_sun').show();
        deleteCookie('moon')
    } else {
        $('body').addClass('sun').removeClass('moon');
        $('.btn_sun').hide();
        $('.btn_moon').show();
        deleteCookie('sun')
    }


    var date = new Date();
    date.setDate(date.getDate() + 365);

    var setCookie = '';
    setCookie += 'bodyClassName = ' + brightness + ';'
    setCookie += 'expires = ' + date.toUTCString();

    document.cookie = setCookie;
}


function deleteCookie(brightness){
    var date = new Date();
    date.setDate(date.getDate() - 1);

    var setCookie = '';
    setCookie += 'bodyClassName = ' + brightness + ';'
    setCookie += 'expires = ' + date.toUTCString(); 

    document.cookie = setCookie;
}








$(document).ready(function(){  

    /* var merong = Math.round(Math.random() * 5);    // 0 ~ 5
    console.log(merong);


    if(merong == 1){
        $('body').css({background:'red'})
    }
    if(merong == 2){
        $('body').css({background:'green'})
    }
    if(merong == 3){
        $('body').css({background:'blue'})
    } */


    var cookieInfo = '';
    //document.cookie = 'CookieName = one;'  //새로고침시 항상 one이 찍히기 때문에 안됨

    // if(document.cookie.indexOf('two') > -1){
    //     cookieInfo = cookieInfo + 'CookieName = three;'
    //     document.cookie = cookieInfo;
    //     alert('벌써 3번이나 봤네??')
    // }
    // else if(document.cookie.indexOf('one') > -1){
    //     cookieInfo = cookieInfo + 'CookieName = two;'
    //     document.cookie = cookieInfo;
    // }
    // else if(document.cookie.indexOf('one') <= -1){
    //     cookieInfo = cookieInfo + 'CookieName = one;'
    //     document.cookie = cookieInfo;
    // }





    console.log(document.cookie)





    //메뉴관련
     $('.gnb > li').mouseenter(function(){
         $('.lnb').stop().fadeIn();
         $('.lnb_bg').stop().fadeIn();
     })

     $('.lnb_bg, .gnb').mouseleave(function(){
         $('.lnb').stop().fadeOut();
         $('.lnb_bg').stop().fadeOut();
     })


     var lnbArray = [];
     $('.lnb').each(function(){         
         var lnbH = $(this).height();
         lnbArray.push(lnbH)
     })
     lnbArray = Math.max(...lnbArray)
     $('.lnb, .lnb_bg').height(lnbArray)

          

     $(window).resize(function(){
         if($(this).width() <= 1200){
             $('.lnb').hide();
             $('.lnb_bg').hide();
         }
     })
     //메뉴관련//
     

     
    $('.board_list li em:contains("공지사항")').parent().css({background:'#efefef'});
 
 
     var gnb2 = $('.gnb').clone();
     $('.gnb2').html(gnb2).find('.gnb').attr('class','hidden_menu').find('.lnb').attr('class','lnb2');
 
     $('.hambuger').click(function(){
         $('.sidemenu').addClass('action');
         $('.sidebox').css({zIndex:777});
         $('body').css({height:'100%', overflow:'hidden'})
     })
     $('.sidemenu .btn_close').click(function(){
         $('.sidemenu').removeClass('action');
         $('.sidebox').css({zIndex:-1});
         $('body').css({height:'', overflow:''})
     })
 
 
 
 
 
 
 
 
     var sec1DivTop,
         sec2DivTop,
         sec3DivTop,
         scrT,
         winH
 
 
     function section1Action(){
         if(scrT >= sec1DivTop - winH/1.2){
             $('#section1 > div').stop().animate({top:-100});
         } else {
             $('#section1 > div').stop().animate({top:0});
         }
     }
 
     function section2Action(mt1, mt2){
         if(scrT > sec2DivTop - winH/2){
             $('#section2 > div ul').eq(0).stop().animate({marginTop:mt1+'px'});
             $('#section2 > div ul').eq(1).stop().animate({marginTop:mt2+'px'});
             $('#section2 > div ul').eq(2).stop().animate({marginTop:mt1+'px'});
             $('#section2 > div ul').eq(3).stop().animate({marginTop:mt2+'px'});
         } else {
             $('#section2 > div ul').eq(0).stop().animate({marginTop:''});
             $('#section2 > div ul').eq(1).stop().animate({marginTop:''});
             $('#section2 > div ul').eq(2).stop().animate({marginTop:''});
             $('#section2 > div ul').eq(3).stop().animate({marginTop:''});
         }
     }
 
     function section3Action(){
         if(scrT > sec3DivTop - winH/1.5) {
             $('#section3').addClass('action');
         } else {
             $('#section3').removeClass('action');
         }
     }
     
     function pcAction(bgBottom){
         sec1DivTop = $('#section1').offset().top;
         sec2DivTop = $('#section2').offset().top;
         sec3DivTop = $('#section3').offset().top;
         scrT = $(window).scrollTop();
         winH = $(window).height();
 
         if(scrT < sec1DivTop){            
             $('#visual_main').css({backgroundPositionY:scrT/1.5});
             $('.building').css({backgroundPosition:'center bottom ' + (bgBottom+scrT/7) + 'px'});
             $('.text_box').css({top:300+scrT/2, opacity:1-(scrT/1000)});            
         }
     }
 
 






     //게시판 파일첨부
     $('#file').change(function(){
        var km1 = $(this).val(); //파일경로+파일명
        alert(km1)
        var km2 = km1.split('\\') //역슬레시 기준으로 글자 자르기
        var km3 = km2.length; // km2의 배열의 전체갯수
        var km4 = km2[km3-1] // km2의 전체갯수에서 하나빼서 마지막배열 선택하기
        console.log(km4)
        $('.board_write li em').text(km4)
    })
    //게시판 파일첨부//
 
 
 
    //  function cVP(){
         
    //         buildingBottom = $('#visual_main .building').css('backgroundPosition');  //  50% bottom -200px
    //         daYeon = parseInt(buildingBottom.split(' ')[2]);   // ['50%', 'bottom', '-200px']
    //         console.log(daYeon);  //  -200
    //  }
    //  if($('#visual_main').length >= 1){
    //     cVP();
    // }
 
    //  $(window).resize(function(){
    //     if($('#visual_main').length >= 1){
    //         cVP();
    //     }
    //  })
     







        
     var floatingTop = parseInt($('#floating_menu').css('top'));
     var scrT;

     $(window).scroll(function(){   
         var winW = $(window).width();

         if($('#visual_main').length >= 1){
            if(winW > 1200){
                pcAction(-300);
                section1Action();
                section2Action(35,130);
                section3Action();
            }
            else {
                pcAction(-200);
                section1Action();
                section2Action(20,20);
                section3Action();
            }
        }
        


        //플로팅메뉴
        var docH = $(document).height();  
        scrT = $(this).scrollTop();
        var footerH = $('#footer').outerHeight(true);

        if(scrT >= floatingTop-100 && scrT < docH-(footerH+floatingTop+100)){  //400-100
            $('#floating_menu').css({position:'fixed', top:'100px'})
        } 
        else if(scrT >= docH-(footerH+floatingTop+100)){
            $('#floating_menu').css({position:'absolute', top:docH-(footerH+floatingTop)}); 
        }
        else {
            $('#floating_menu').css({position:'', top:''});
        }

        floating()


     })  //scroll function
 



     //플로팅메뉴
     $('#floating_menu').css({position:'fixed', top:'100px'})

     floating()
     function floating(){
        scrT = $(window).scrollTop();
        
        $('#floating_menu .go_top').click(function(){
            $('html').stop().animate({scrollTop:0});
            return false;
        });

        $('#floating_menu li a').click(function(){
            var floatingHref = $(this).attr('href');  //#section1~5
            var scrollTarget = $(floatingHref).offset().top;
            $('html').stop().animate({scrollTop:scrollTarget-140})
            return false
        })
        
        $('#floating_menu li').each(function(){
            var floatingHref2 = $(this).find('a').attr('href');
            var scrollTarget2 = $(floatingHref2).offset().top-140;

            if(scrT >= scrollTarget2){
                $('#floating_menu li').css({background:''}).children().css({color:''})
                $(this).css({background:'var(--gray1)'}).children().css({color:'var(--hoverColor2)'})
            } else if (scrT <= 300){
                $('#floating_menu li').css({background:''}).children().css({color:''})
            }
        })
     }
     //플로팅메뉴//








 
     $('.snb li a').each(function(){
         if(window.location.href.indexOf(this.href) != -1){
             $(this).parent().addClass('on')
         }
     })
 
 
 
 })
 
 