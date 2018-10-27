"use strict";

$(document).ready (function(){
    let clientWidth = document.documentElement.clientWidth;
    let clientHeight = document.documentElement.clientHeight;
    $(".loader").offset({top:clientHeight/2});
    let i = 0;
    let j = 0;
    let clockWidth = setInterval(function(){
        $(".loader").width(i);
        i +=20;
        if ( i > clientWidth) {
            clearInterval(clockWidth);
            $(".loader").width(clientWidth);
            let clockHeight = setInterval(function(){
                $(".loader").height(j);
                $(".loader").offset({top:clientHeight/2 - j/2});
                j += 10;
                if ( j > clientHeight) {
                    clearInterval(clockHeight);
                    $("body").css({"background-color" : "#D1F3FE"});
                    $(".loader").offset({top:0}).height(clientHeight).fadeOut(100);
                    setTimeout (function(){
                        $(".mainSite").fadeIn(1000);
                    },100)
                    
                }
            },5)
        }
    },5)
})

