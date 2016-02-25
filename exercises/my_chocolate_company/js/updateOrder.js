function updateOrder(f) {
	CHERRY_CHOC_VALUE = 2.50;
	GLUTTONY_VALUE = 4.00;
	LOVE_VALUE = 3.00;
	SPAM_VALUE = 2.00;

	cherryChocQuantity = document.getElementById("cherrychoc_quantity").value;
	gluttonyQuantity = document.getElementById("gluttony_quantity").value;
	loveQuantity = document.getElementById("love_quantity").value;
	spamQuantity = document.getElementById("spam_quantity").value;

	cherryChocTotal = CHERRY_CHOC_VALUE*cherryChocQuantity;
	gluttonyTotal = GLUTTONY_VALUE*gluttonyQuantity;
	loveTotal = LOVE_VALUE*loveQuantity;
	spamTotal = SPAM_VALUE*spamQuantity;

	document.getElementById("cherrychoc_total").innerHTML = "$" + cherryChocTotal.toFixed(2);
	document.getElementById("gluttony_total").innerHTML = "$" + gluttonyTotal.toFixed(2);
	document.getElementById("love_total").innerHTML = "$" + loveTotal.toFixed(2);
	document.getElementById("spam_total").innerHTML = "$" + spamTotal.toFixed(2);

	subTotal = cherryChocTotal + gluttonyTotal + loveTotal + spamTotal;

	document.getElementById("subtotal").innerHTML = "$" + subTotal.toFixed(2);

	TAX_VALUE = 0.07;
	tax = subTotal*TAX_VALUE;

	document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);

	total = subTotal + tax;

	document.getElementById("total").innerHTML = "$" + total.toFixed(2);
}
