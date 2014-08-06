(function (global) {
	var RESULT_LENGTH = 16;

	function hashPassword(srcText) {
		var base64 = new jsSHA(srcText, "ASCII").getHash("SHA-256", "B64");
		return base64.replace(/[+/=]/g, "").substring(0, RESULT_LENGTH);
	}

	function onSubmit(event) {
		event.preventDefault();
		var srcText = document.getElementById("src-text").value;
		var resText = hashPassword(srcText);
		document.getElementById("res-text").value = resText;
	}

	function onLoad() {
		var mainForm = document.getElementById("main-form");
		mainForm.addEventListener("submit", onSubmit);
	}

	global.addEventListener("load", onLoad);
})(this);
