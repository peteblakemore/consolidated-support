/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
	window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
	window.GOVUKFrontend.initAll()

	console.log('yes')
	var toggleTarget = $('.js-class-toggle');

	if(!inputIsEmpty()) {
		addFocusClass();
	}

	toggleTarget.on('focus', addFocusClass);
	toggleTarget.on('blur', removeFocusClassFromEmptyInput);

	function inputIsEmpty() {
		return toggleTarget.val() === '';
	}

	function addFocusClass() {
		toggleTarget.addClass('focus');
	}

	function removeFocusClassFromEmptyInput() {
		if(inputIsEmpty()) {
			toggleTarget.removeClass('focus');
		}
	}

})

var jsButton = document.querySelector(".js-button")
jsButton.addEventListener("click", showHide)

console.log("%cFIXED IT", "font-size: 22px;")

function showHide(event) {
	console.log(event);
	event.preventDefault();
	var form = document.getElementById("contactForm");
	if (form.style.display === "block") {
			form.style.display = "none";
	} else {
		form.style.display = "block";
	}
}
