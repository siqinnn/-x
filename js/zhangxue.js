


			var index = 0;
			var hash = window.location.hash;
			var xx = hash.split("#")[1]-1			
			if(xx){
			    index =  xx ;					    
			}
			else{
			    index=-1
			   
			   if(xx==0){
			        index=0
			    }
			}

  
  
  $(function () {
        doWelcome();
  
  
  
    var welcomeTimer = null;


    if (index > 0 || xx == 0) {
        $(".welcome_wrap").css("display", "none")
    }

    function doWelcome() {
        clearTimeout(welcomeTimer)
        welcomeTimer = setTimeout(function () {
            $(".welcome_content").animate({
                "top": "39%"
            }, 600)
            $(".welcome_content .welcome_animate").each(function (index, element) {
                var $this = $(this);
                setTimeout(function () {
                    $this.show().addClass("animated  fadeInUp");
                }, 300 * (index + 1))
            });
            setTimeout(function () {
                shouqi()
            }, 2500);
        }, 4000);

    }

    $(".welcome_wrap").dblclick(function () {
        shouqi()
    })

    function shouqi() {
        $(".welcome_wrap").animate({
            "height": "0"
        }, 1000);
    }
    var qpheight = $(window).height();
    var qpwidth = $(window).width();
    $(".welcome_wrap,.main_wrap").height(qpheight)
    $(".welcome_wrap,.main_wrap,.gaishu_block").width(qpwidth)
    $(".main_wrap,.main_wrap .wrap_block,.gaishu_block").height("" + qpheight - 50 + "px")
    var tophei = $(".main_wrap").height("" + qpheight - 50 + "px").height()
    $(window).resize(function () {
        qpheight = $(window).height();
        qpwidth = $(window).width();
        $(".welcome_wrap,.main_wrap").height(qpheight)
        $(".welcome_wrap,.main_wrap,.gaishu_block").width(qpwidth)
        $(".main_wrap,.main_wrap .wrap_block,.gaishu_block").height("" + qpheight - 50 + "px")
        tophei = $(".main_wrap").height("" + qpheight - 50 + "px").height()
        $(".main_list").animate({
            "top": "-" + index * tophei + "px"
        }, 10)
    });

    var bool = true;
    var len = $(".list_mx").length;


    function scrUp() {
        if (bool) {
            bool = false;
            setTimeout(function () {
                bool = true
            }, 1000)
            if (index > 0) {
                index--
                
            }
            if (index <= 1) {
                $(".nav_piece").removeClass("now").eq(0).addClass("now");
                
            } else if (index > len - 2) { 
                $(".nav_piece").removeClass("now");
                $(".nav_piece").eq(len - 2).addClass("now");              
                $(".nav_piece").eq(len - 1).addClass("now");
            } 
            else {
                $(".nav_piece").removeClass("now").eq(index - 1).addClass("now")
            }
            $(".main_list").animate({
                "top": "-" + index * tophei + "px"
            }, 1000)
        }
    }
    scrDown()
    function scrDown() {
        if (bool) {
            bool = false;
            setTimeout(function () {
                bool = true
            }, 1000)
            if (index < len - 1) {
                index++
            }
            if (index <= 1) {
                $(".nav_piece").removeClass("now").eq(0).addClass("now");
            } else if (index > len - 2) {
                $(".nav_piece").removeClass("now");
                $(".nav_piece").eq(len - 2).addClass("now");
                $(".nav_piece").eq(len - 1).addClass("now");

            } else {
                $(".nav_piece").removeClass("now").eq(index - 1).addClass("now")
            }
            $(".main_list").animate({
                "top": "-" + index * tophei + "px"
            }, 1000)

        }
    }

    window.onmousewheel = mousewheel;
    window.addEventListener("DOMMouseScroll", mousewheel)
    function mousewheel(e) {
        if (e.wheelDelta) {
            if (e.wheelDelta > 0) {         	
                scrUp();
            } else {
                scrDown();      
            }
        } else {
            if (e.detail > 0) {
                scrDown();
            } else {
                scrUp();
            }
        }
    }

    $(".btn_box .asd").click(function () {
        if ($(this).children(".yunmove_btn").index(".yunmove_btn") == 0) {
            $(".yunmove_btn").removeClass("now")
            $(this).children(".yunmove_btn").addClass("now");
            $(".yunmove_btn").animate({
                "left": "-78px"
            }, 100)
            $(this).children(".yunmove_btn").animate({
                "left": 0
            }, 500)
            $(".yun_slider").animate({
                "left": 0
            }, 1000)
        } else {
            $(".yun_slider").animate({
                "left": "-910px"
            }, 1000)
            $(".yunmove_btn").removeClass("now")
            $(this).children(".yunmove_btn").addClass("now");
            $(".yunmove_btn").animate({
                "left": "78px"
            }, 100)
            $(this).children(".yunmove_btn").animate({
                "left": 0
            }, 500)
        }
    })
    var bulings = null;
    autu()

    function autu() {
        bulings = setInterval(function () {
            buling();
        }, 1000)
    }

    function buling() {
        $(".jiazhi_shineimg").animate({
            "opacity": 0
        }, 500).animate({
            "opacity": 1
        }, 500)
    }





    $(".donext").click(function () {
        index++;
        $(".main_list").animate({
            "top": "-" + index * tophei + "px"
        }, 1000)
    })

    $(".nav_piece").click(function () {
        index = $(this).index();
       
        if (index < len - 2) {
            $(".main_list").animate({
                "top": "-" + (index + 1) * tophei + "px"
            }, 1000)
            $(".nav_piece").removeClass("now");
            $(".nav_piece").eq(index).addClass("now");
        } else if (index >= len - 2) {
            $(".nav_piece").removeClass("now");
            $(".nav_piece").eq(len - 2).addClass("now");
            $(".nav_piece").eq(len - 1).addClass("now");
            $(".main_list").animate({
                "top": "-" + (len - 1) * tophei + "px"
            }, 1000)
        }
    })
})
