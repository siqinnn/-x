$("#header").load("header.html");
$("#footer").load("footer.html");


$(function(){
    setTimeout(function(){
        pendong()
    })
})
$(".title_list .pen").click(function(){
 pendong()
})

function pendong(){
	
	
    $(".title_list").animate({"width":"100px",backgroundPositionX:"-1000px"},0,function(){
        $(".title_list").animate({"width":"1100px",backgroundPositionX:"0px"},1300);
    });
}
//创建一个global对象 用来存储对象 防止变量污染
var GLOBAL = GLOBAL || {};  //避免变量钟名 命名冲突
GLOBAL.loadstar=0; 
GLOBAL.listCount=null;
loadArticleList()


    function loadArticleList(){
    //判断第一次加载 
    if(GLOBAL.loadstar==0){
        $("#articleList").html("")
    }
        var res=listData['listData0'+GLOBAL.loadstar]
        var list=res.data.list;
        // 判断数据存不存在 
        if(!list||!list.length){
            $("#articleList").html("您请求的数据不存在")
        }else{
            //渲染数据
            for (let i = 0; i < list.length; i++) {
                var htmlmodel=$("#itemHtml").html();
                htmlmodel=htmlmodel.replace('$articleId$',list[i].sysId);
                htmlmodel=htmlmodel.replace("article_img/article_image01.jpg",list[i].coverImg);
                htmlmodel=htmlmodel.replace('$articleTitle$',list[i].title);
                htmlmodel=htmlmodel.replace('$updateTime$',list[i].creatAt); 
                htmlmodel=htmlmodel.replace('$describe$',list[i].describe); 
                $("#articleList").append(htmlmodel);
            }
        }
        
        
        GLOBAL.loadstar++;
        GLOBAL.loadCount=Math.ceil(res.data.count/res.data.pageSize)
        console.log( GLOBAL.loadCount)
        if(GLOBAL.loadstar>=GLOBAL.loadCount){
            $("#listMore").css("opacity","0").prev("img").attr("src","article_img/list_gomore_bg_nomore.jpg");
        }
}


		$("#listMore").click(function(){
		    if( GLOBAL.loadstar< GLOBAL.loadCount){
		          loadArticleList() 
		    }
		})


		$(".list_content").delegate(".content_one","click",function(){
		    var xx=$(this).attr("articleId");
		    window.open("telus.html?news=xiaoniaoNews"+xx);
		})
