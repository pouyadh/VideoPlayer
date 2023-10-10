var btnWatch = document.getElementById("btn-watch");
var btnY = document.getElementById("btn-y");
var urlInput = document.getElementById("url-input");
var recentLink = document.getElementById("recent-link");
var progressBar = document.querySelector("progress");
var vidElement = document.getElementById("myVideo");

recentLink.innerHTML = localStorage.getItem("recent-link");

function loading() {
  progressBar.style.display = "block";
}
function notLoading() {
  progressBar.style.display = "none";
}

btnWatch.addEventListener("click", function () {
  changeSource(urlInput.value);
  recentLink.innerHTML = urlInput.value;
  localStorage.setItem("recent-link", urlInput.value);
  urlInput.value = "";
});
btnY.addEventListener("click", function () {
  //urlInput.value =
  //  "http://dl6.mvbznet.link/Double/Yasak-Elma/Sib-Mamnooe-E052-Double-540p[MovieBaz].mkv";
  urlInput.value =
    "https://ir11.uploadboy.com/d/y6x6ir5dsmjd/ubnkaxwijdfx3pohsyuwdf6v6yahodogapiadlpmtcqjvfgfdh43ppik4nhad6zhosq27j7b/[FIlmtak.IR]Yasak-Elma.E162.HardSub.720p.mkv";
});

// JavaScript Code
function changeSource(src) {
  // Remove all source elements
  while (vidElement.firstChild) vidElement.removeChild(vidElement.firstChild);

  // Initiating readyState of HTMLMediaElement
  vidElement.load();

  // Add new source element
  var source = document.createElement("source");
  source.setAttribute("src", src);
  vidElement.appendChild(source);
}

vidElement.addEventListener("loadstart", loading);
vidElement.addEventListener("canplay", notLoading);
vidElement.addEventListener("error", notLoading);

// vidElement.addEventListener("loadstart", () => console.log("loadstart"));
// vidElement.addEventListener("durationchange", () =>
//   console.log("durationchange")
// );
// vidElement.addEventListener("loadedmetadata", () =>
//   console.log("loadedmetadata")
// );
// vidElement.addEventListener("loadeddata", () => console.log("loadeddata"));
// vidElement.addEventListener("progress", () => console.log("progress"));
// vidElement.addEventListener("canplay", () => console.log("canplay"));
// vidElement.addEventListener("canplaythrough", () =>
//   console.log("canplaythrough")
// );

notLoading();
