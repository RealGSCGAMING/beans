/*const mainButton = document.getElementById("mainButton");
const closeButton = document.getElementById("closeButton");
const contentArea = document.getElementById("mainContent");
var windows = [];

var channel = new BroadcastChannel("windows");

mainButton.addEventListener("click", function() {
  setInterval(function () {openWindow("https://google.com")}, 1000);
})

closeButton.addEventListener("click", function() {
  for (i=0; i<windows.length; i++) {
    windows[i].close();
  }
})

function createNewButton(number) {
  var newButton = mainButton.cloneNode(true);
  contentArea.appendChild(newButton);
  newButton.addEventListener("click", function () {
    //createNewButton()
  });
}

/*mainButton.addEventListener("click", function () {
  //createNewButton()
  openWindow(document.URL);
});

*/function openWindow(url) {
  var topPos = Math.floor(Math.random() * innerHeight);
  var leftPos = Math.floor(Math.random() * innerWidth);
  var params = `width=500, height=200, top=${topPos}, left=${leftPos}`;
  windows.push(window.open(url, "", params));
}/*

closeButton.addEventListener("click", function () {
  for (var i = 0; i < windows.length; i++) {
    windows[i].close();
  }
});

channel.onmessage(function (e) {
  data = e.data;
  windows.push(data);
  alert(windows);
});

window.onload(function () {
  channel.postMessage(window);
  virus();
});*/