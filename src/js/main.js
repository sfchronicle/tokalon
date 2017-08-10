// require("./lib/social");

$(window).scroll(function() {
	var pos = $(this).scrollTop();
	var intro_pos = $('.one').offset().top;
	console.log(pos);
	console.log("first img: " + intro_pos);

	if (pos > 400 && pos < 800) {
		$('.one').addClass("hide");
		$('.two').removeClass("hide");
	} else if (pos > 800 && pos < 1200) {
		console.log("hi");
		$('.two').addClass("hide");
		$('.three').removeClass("hide");
	} else if (pos > 1200 && pos < 1600) {
		console.log("hi");
		$('.three').addClass("hide");
		$('.four').removeClass("hide");
	} else if (pos > 1600 && pos < 2000) {
		console.log("hi");
		$('.four').addClass("hide");
		$('.five').removeClass("hide");
	} else if (pos > 2000 && pos < 2400) {
		console.log("hi");
		$('.five').addClass("hide");
	}
})


