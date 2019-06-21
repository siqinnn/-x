   
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
        $(".title_list").animate({"width":"810px",backgroundPositionX:"0px"},1300);
    });
}

	/*点击喜欢文字按钮*/
	var likeArr = ["JAVA天下第一","JS天下第一","PHP天下第一","c语言天下第一","BOOTSTRAP才是天下第一","有本事你再点我"]; 
	var woding= true; 
	$(".like_btn").click(function(){
	
if(woding){
	woding = false;
	$(".like_tips").text( likeArr[ Math.floor(Math.random()*likeArr.length) ] );
	shanxian();
	
}else if(!woding &&$(".like_tips").text()=="有本事你再点我" ){
	$(".like_tips").text("都挺好");
	shanxian();

}

function shanxian(){
	$(".like_tips").animate({"top":0,opacity:"1"},600,function(){
		$(".like_tips").animate({"top":"-150px",opacity:"1"},200).animate({"top":"-70px",opacity:"1"},200).animate({"top":"0px",opacity:"1"},200).animate({"left":"-500px",opacity:"0"},400,function(){
			$(".like_tips").animate({"top":"-370px",opacity:"0","left":"258px"},0)
			$(".like_btn").addClass("like_btn_clicked");
		})

	});
}
		
	})



// GLOBAL.articleId = getUrlParams("articleId");
function getUrlParams(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");//构造一个含有目标参数的正则表达式对象
    console.log(name)  //name=    news   type
    console.log(reg)
    var r = window.location.search.substr(1).match(reg);//匹配目标参数
    
    if(r!=null)
        return  r[2];    //返回参数值
    else 
        return "";
}

	    var news = getUrlParams("news")||getUrlParams("type");
 // news=telUs
		var result = articleData[news]; 

		$("#typeTitle").html(result.data.typeTitle);
		$("#typeEntitle").html(result.data.typeEntitle);
		$('#articleTitle').text(result.data.title); 	
		$('#updateTime').text(result.data.updateAt);	
		$('#cover').attr("src",result.data.coverImg); 	 	
		$('#author').text(result.data.creatByFullName); 	
		$('#content').html(result.data.content);
	
	
