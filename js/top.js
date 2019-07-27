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

function personImg(){
	iString = String(i);
	$(".Top_personImgBox").eq(iString).css("display","inline");
	i++;

	if(i >= 15){
		clearInterval(timer);
	}
}

function titleScale(){
	$(".Top_titleBox").css("display","block");
	$(".Top_detailBox").css("display","block");
	$(".Top_scrollBox").css("display","block");
}