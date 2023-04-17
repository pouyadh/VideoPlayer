var btnWatch = document.getElementById("btn-watch");
var btnY = document.getElementById("btn-y");
var urlInput = document.getElementById("url-input");
var recentLink = document.getElementById("recent-link");

recentLink.innerHTML = localStorage.getItem("recent-link");

btnWatch.addEventListener("click", function () {
  changeSource(urlInput.value);
  recentLink.innerHTML = urlInput.value;
  localStorage.setItem("recent-link", urlInput.value);
  urlInput.value = "";
});
btnY.addEventListener("click", function () {
  urlInput.value =
    "http://dl6.mvbznet.link/Double/Yasak-Elma/Sib-Mamnooe-E052-Double-540p[MovieBaz].mkv";
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
