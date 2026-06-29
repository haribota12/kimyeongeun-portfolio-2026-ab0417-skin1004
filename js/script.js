$(function(){


    $("nav>ul>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
    })


    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    })

    $("nav>ul>li").focusin(function(){
        $(this).find(".sub").slideDown();
        $(this).addClass("on");
    })

    $(".sub li:last-child").focusout(function(){
        $(".sub").slideUp();
        $("nav>ul>li").removeclass("on");
    })

    
    
    $(".header_icon_phone button").click(function(){
        $(".header_menu_phone").slideDown();
        $(".header_icon_phone_close").show();
        $(".header_icon_phone button").hide();
    })

    $(".header_icon_phone_close button").click(function(){
        $(".header_menu_phone").slideUp();
        $(".header_icon_phone button").show();
        $(".header_icon_phone_close").hide();
    })


})