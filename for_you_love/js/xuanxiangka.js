$(".teshu1").click(function() {
	f = $(".dringbuy-first").css("display")
	if(f == "block") {

	} else {
		$(".dringbuy-first").css("display", "block");
		$(".dringbuy-sec").css("display", "none");
		$(".teshu1").css("border-bottom", "2px solid #000");
		$(".leiji").css("border-bottom", "0");
		$(".shouhou").css("border-bottom", "0");
		$(".ringbuy_img").css("display", "none");
		$(".goumai").css("border-bottom", "0");
		$(".ringbuy_img1").css("display", "none");
	}
});

$(".leiji").click(function() {
	f = $(".dringbuy-sec").css("display")
	if(f == "block") {

	} else {
		$(".dringbuy-sec").css("display", "block");
		$(".dringbuy-first").css("display", "none");
		$(".leiji").css("border-bottom", "2px solid #000");
		$(".teshu1").css("border-bottom", "0");
		$(".shouhou").css("border-bottom", "0");
		$(".ringbuy_img").css("display", "none");
		$(".goumai").css("border-bottom", "0");
		$(".ringbuy_img1").css("display", "none");
	}
});

$(".shouhou").click(function() {
	f = $(".ringbuy_img").css("display")
	if(f == "block") {

	} else {
		$(".ringbuy_img").css("display", "block");
		$(".shouhou").css("border-bottom", "2px solid #000");
		$(".dringbuy-first").css("display", "none");
		$(".teshu1").css("border-bottom", "0");
		$(".dringbuy-sec").css("display", "none");
		$(".leiji").css("border-bottom", "0");
		$(".goumai").css("border-bottom", "0");
		$(".ringbuy_img1").css("display", "none");
	}
});

$(".goumai").click(function() {
	f = $(".ringbuy_img1").css("display")
	if(f == "block") {

	} else {
		$(".ringbuy_img1").css("display", "block");
		$(".goumai").css("border-bottom", "2px solid #000");
		$(".dringbuy-first").css("display", "none");
		$(".teshu1").css("border-bottom", "0");

		$(".dringbuy-sec").css("display", "none");
		$(".leiji").css("border-bottom", "0");

		$(".ringbuy_img").css("display", "none");
		$(".shouhou").css("border-bottom", "0");

	}
});