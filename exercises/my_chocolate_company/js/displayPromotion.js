function showCurrentPromotion(f) {
	var timeAndDate = new Date();

	currentYear = timeAndDate.getFullYear();
	currentDay = timeAndDate.getDate();
	currentMonth = timeAndDate.getMonth() + 1;
	currentHour = timeAndDate.getHours();
	currentMin = timeAndDate.getMinutes();

	if (currentMonth == 2) {
		if (currentDay == 9) {
			// Fat Tuesday Sale Promotion
			document.getElementById("text_promotion").innerHTML = "<p> Fat Tuesday Sale! Promotion will be available until the end of today (February 09).";
			document.getElementById("current_promotion").innerHTML = "<img src='img/promotion_0209.png' width='570px' height='190px'>";
		}
		else if (currentDay == 14) {
			// Valentine's Day Promotion
			document.getElementById("text_promotion").innerHTML = "<p> Valentine's Day Promotion will be available until the end of today (February 14).";
			document.getElementById("current_promotion").innerHTML = "<img src='img/promotion_0214.png' width='570px' height='190px'>";
		}
		else if (currentDay == 29) {
			// Leap Day Sale Promotion
			document.getElementById("text_promotion").innerHTML = "<p> Leap Day Sale! Promotion will be available until the end of today (February 29).";
			document.getElementById("current_promotion").innerHTML = "<img src='img/promotion_0229.png' width='570px' height='190px'>";
		}
		else {
			// No Current Promotion
			document.getElementById("text_promotion").innerHTML = "<p> There's no promotion today. Check again another time!";
		}
	}
	else if (currentMonth == 3) {
		// March Madness Sale Promotion
		document.getElementById("text_promotion").innerHTML = "<p> March Madness Sale will be available during the entire month!";
		document.getElementById("current_promotion").innerHTML = "<img src='img/promotion_03.png' width='570px' height='190px'>";
	}
	else {
		// No Current Promotion
		document.getElementById("text_promotion").innerHTML = "<p> There's no promotion today. Check again another time!";
	}
}
