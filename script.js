var btnWatch = document.getElementById("btn-watch");
var urlInput = document.getElementById("url-input");
btnWatch.addEventListener("click", function () {
  changeSource(urlInput.value);
  urlInput.value = "";
});

// JavaScript Code
function changeSource(src) {
  var vidElement = document.getElementById("myVideo");

  // Remove all source elements
  while (vidElement.firstChild) vidElement.removeChild(vidElement.firstChild);

  // Initiating readyState of HTMLMediaElement
  vidElement.load();

  // Add new source element
  var source = document.createElement("source");
  source.setAttribute("src", src);
  vidElement.appendChild(source);
}
