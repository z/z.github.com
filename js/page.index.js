// Javascript written by Tyler Mulligan
// http://www.detrition.net

$(document).ready(function(){
	
	$("#content").hide();
	
	var duration = 1000;
	
	$("#header")
		.animate({ height: "100px", marginBottom: 10 }, { queue: false, duration: 7000 })
		.animate({ backgroundColor: "yellow" }, duration)
		.animate({ backgroundColor: "green" }, duration)
		.animate({ backgroundColor: "blue" }, duration)
		.animate({ backgroundColor: "indigo" }, duration)
		.animate({ backgroundColor: "violet" }, duration)
		.animate({ backgroundColor: "pink" }, duration)
		.animate({ backgroundColor: "white" }, duration)
		.animate({ paddingTop: "20px" }, duration, "elasinout")
		.animate({ height: "56px" }, duration, "elasinout")
		.animate({ color: "darkgrey" }, duration, "elasinout")
		.animate({ borderBottomColor: "yellow" }, duration, "elasinout");
	setTimeout(function(){
		//$("div:animated").css("border", "2px solid red");
		textanim();
	}, 3000);
	setTimeout(function(){
		//$("div:animated").css("border", "2px solid red");
		$("#text").fadeOut();
	}, 5000);
	setTimeout(function(){
		$("#text").css("text-align", "right");
	}, 6000);
	setTimeout(function(){
		$("#text").fadeIn();
	}, 7000);
	setTimeout(function(){
		$("#line").fadeIn();
	}, 9000);
	setTimeout(function(){
		$("#content").fadeIn();
	}, 9500);

});


function textanim() {
	if ( !$("#text span").length )
		$("#text").html(jQuery.map( $("#text").html().split(""), function(letter){
			return "<span>" + letter + "</span>";
		}).join(""));

	$("#text span").each(function(i, letter){
		setTimeout(function(){
			$(letter)
				.animate({ fontSize: "4em" }, 1000, "elasinout")
				.animate({ fontSize: "3em" }, 8000, "elasinout");
		}, i * 10 + (i * 15));
	});
}
