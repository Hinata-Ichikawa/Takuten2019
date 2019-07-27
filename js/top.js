// $(function(){
// 	$('#fullpage').fullpage();
// });

var rellax = new Rellax('.rellax');

var timer;

window.onload = function(){
	setTimeout("personImgInterval()",1000);
	setTimeout("titleScale()",2500);
}

function personImgInterval(){
	timer = setInterval("personImg()",100);
}

var i = 0;
var iString;

var loaded = 0;

function personImg(){
	iString = String(i);
	$(".Top_personImgBox").eq(iString).css("display","inline");
	i++;

	if(i >= 15){
		clearInterval(timer);
		loaded = 1;
	}
}

function titleScale(){
	$(".Top_titleBox").css("display","block");
	$(".Top_detailBox").css("display","block");
	$(".Top_scrollBox").css("display","block");
}

$(window).on('load resize', function(){
	if(loaded == 1){
		$(".Top_personImgBox").css("display","inline");
	}
});