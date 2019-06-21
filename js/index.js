$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    // //选项卡

    xuanxiangka(".banchange .prev",".banchange .next",".dmain span",".banner_wrap .banner","active")
    function xuanxiangka(prev,next,dian,content,name){
        var index=0
        var len=$(content).length;
        
        $(prev).click(function(){
            index--
             console.log(index)
            if(index<0){
                index=len-1
                console.log(index)
                
            }
            $(dian).removeClass(name).eq(index).addClass(name)
            $(content).css("display","none").eq(index).css("display","block")
        })
        $(next).click(function(){
            index++
             
            if(index>len-1){
                index=0
                console.log(index)
              
            }
            $(dian).removeClass(name).eq(index).addClass(name)
            $(content).css("display","none").eq(index).css("display","block")
        })
    
        $(dian).click(function(){
            var _index= $(this).index();
            $(dian).removeClass(name)
            $(this).addClass(name)
            $(content).css("display","none").eq(_index).css("display","block")
        })
    }

    xuanxiangka1(".change_line .prev",".change_line .next",".now_linebtn_one",".contents .aa","now")

    function xuanxiangka1(prev,next,dian,content,name){
        var index=0
        var len=$(content).length;
        // console.log(len)
        $(prev).click(function(){
            index--
            if(index<0){
                index=len-1
            }
            $(dian).removeClass(name).eq(index).addClass(name)
            $(content).css("display","none").eq(index).css("display","block")
            $(content).eq(index).find("img").removeClass("fadeInRight").addClass("fadeInLeft")
            $(content).eq(index).find("h1").removeClass("fadeInRight").addClass("fadeInLeft")
            $(content).eq(index).find("p").removeClass("fadeInRight").addClass("fadeInLeft")
        })
        $(next).click(function(){
            index++
            if(index>len-1){
                index=0
            }
            $(dian).removeClass(name).eq(index).addClass(name)
            $(content).css("display","none").eq(index).css("display","block")
            $(content).eq(index).find("img").removeClass("fadeInLeft").addClass("fadeInRight")
            $(content).eq(index).find("h1").removeClass("fadeInLeft").addClass("fadeInRight")
            $(content).eq(index).find("p").removeClass("fadeInLeft").addClass("fadeInRight")
        })
           var bood=true;
        var zhensuo=true;
         if(zhensuo){
            $(dian).click(function(){
         
                var _index= $(this).index();
    
                if(index==_index){
                    zhensuo=false;
                }else if(index>_index){
                    zhensuo=true;
                    index=_index;
                    $(dian).removeClass(name)
                    $(this).addClass(name)
                    $(content).css("display","none").eq(_index).css("display","block")
                    $(content).eq(_index).find("img").removeClass("fadeInRight").addClass("fadeInLeft")
                    $(content).eq(_index).find("h1").removeClass("fadeInRight").addClass("fadeInLeft")
                    $(content).eq(_index).find("p").removeClass("fadeInRight").addClass("fadeInLeft")

                } else if(index<_index){
                    zhensuo=true;
                    index=_index;
                    $(dian).removeClass(name)
                    $(this).addClass(name)
                    $(content).css("display","none").eq(_index).css("display","block")
                    $(content).eq(_index).find("img").removeClass("fadeInLeft").addClass("fadeInRight")
                    $(content).eq(_index).find("h1").removeClass("fadeInLeft").addClass("fadeInRight")
                    $(content).eq(_index).find("p").removeClass("fadeInLeft").addClass("fadeInRight")

                }
              
            })
        }

       
    }
//  点击切换隐藏显示
    $(".centerimg").mouseenter(function () { 
        $(this).addClass("tada")
    });
    $(".centerimg").mouseleave(function () { 
        $(".centerimg").removeClass("tada")
    });
    $(".shousuo_icon").mouseenter(function () { 
        $(this).addClass("tada")
    });
    
    
    $(".shousuo_icon").mouseleave(function () { 
        $(".shousuo_icon").removeClass("tada")
    });
    $(".mx").click(function(){
        var _index= $(this).index('.mx');
        if($(this).hasClass("zhankai")){
            $(".mx").removeClass("zhankai")
            $(".yewucontent_ditail").css("display","none")
        }else{
            $(".mx").removeClass("zhankai")
            $(this).addClass("zhankai");
            $(".yewucontent_ditail").css("display","none")
            $(".yewucontent_ditail").eq(_index).css("display","block")
        }
    })


    var num=0
    var tjhd= $(".twoteam_wrap").length;
    var suoding=true;  //节流
    $(".team_change .prev").click(function(){
        clearInterval(timer)
        num--;
        if(num<0){
            num=tjhd-1
        }
        if(suoding){
            suoding=false;
            $(".twoteam_wrap").last().prependTo( $(".team_move"));
            $(".team_move").css("left","-1130px");
            $(".team_move").animate({"left":-1330},300).animate({"left":0},500,function(){
                $(".middle span").removeClass("now").eq(num).addClass("now")
                suoding=true
            })
        }
        autoplay()
    })
    $(".team_change .next").click(function(){
        clearInterval(timer)
         play()
         autoplay();
    })
    function play(){
        num++;
        if(num>tjhd-1){
            num=0
        }
        if(suoding){
            suoding=false;
            $(".team_move").animate({"left":200},300).animate({"left":-1130},500,function(){
                $(".twoteam_wrap").first().appendTo( $(".team_move"));
                $(".team_move").css("left","0");
                $(".middle span").removeClass("now").eq(num).addClass("now")
                suoding=true
            })
        }
    }
    var timer=null;
    function autoplay(){
        clearInterval(timer)
        timer=setInterval(
            function(){
                play()
            },3000)
    }
    autoplay();
})