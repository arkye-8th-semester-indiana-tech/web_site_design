function displayTime(f) {
	var timeAndDate = new Date();

	theYear = timeAndDate.getFullYear();
	theDay = timeAndDate.getDate();
	theMonth = timeAndDate.getMonth() + 1;
	theHour = timeAndDate.getHours();
	theMin = timeAndDate.getMinutes();

	document.timeForm.yearBox.value = theYear;
	document.timeForm.dayBox.value = theDay;
	document.timeForm.monthBox.value = theMonth;
	document.timeForm.hourBox.value = theHour;
	document.timeForm.minuteBox.value = theMin;

	if (theMonth == 2) {
	}
}
