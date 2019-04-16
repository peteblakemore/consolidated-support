// When we click the document anywhere, run the function "showHide"
document.addEventListener("click", showHide);

function showHide(event) {
  // If where we've clicked on the document is not the button, quit out of the function by doing: return false
  if (!event.target.classList.contains("js-submit-form")) return false;

  // toggle the class "js-hidden" on the two blocks of code we would like to show/hide. If you're just doing it once you could use classList.add or classList.remove instead of classList.toggle
  document.querySelector(".js-contact-form").classList.toggle("js-hidden");
  document.querySelector(".js-form-confirm").classList.toggle("js-hidden");
}
