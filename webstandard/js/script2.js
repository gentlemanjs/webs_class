(function($){


    $(".menu").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(500);
    })
    $(".menu").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(500);
    })

    
    $(".div > h2").click(function(){
        $(".img__box").addClass("show");
        $(".img__box2").removeClass("show");
    })
    $(".div > span").click(function(){
        $(".img__box").removeClass("show")
        $(".img__box2").addClass("show");
    })

    var currentIndex = 0;
    setInterval(function(){
        if(currentIndex<2){
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        var slidePosition = currentIndex * (-1000)+"px";
        $(".slideList").animate({left: slidePosition},400);
    }, 3000);

    $(".right").click(function(){
        $(".layer").slideDown(300);
        $(".layer_bg").show();
    });
    $(".layer .close").click(function(){
        $(".layer").slideUp(300);
        $(".layer_bg").hide();
    })
})(jQuery);