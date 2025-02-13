const mainButton = document.getElementById("mainButton");
const button2 = document.getElementById("mainButton2");
const button3 = document.getElementById("mainButton3");
const button4 = document.getElementById("mainButton4");
const button5 = document.getElementById("mainButton5");
const button6 = document.getElementById("mainButton6");
const closeButton = document.getElementById("closeButton");
const counter = document.getElementById("prompt");
var windows = [];

let beans = 0;

function openWindow(url) {
  var topPos = Math.floor(Math.random() * 1000);
  var leftPos = Math.floor(Math.random() * 2000);
  var params = `width=250, height=350, top=${topPos}, left=${leftPos}`;
  let newWindow = window.open(url, "", params);

  if (newWindow) {
    windows.push(newWindow);
    beans++;
    updateCounter();
  }
}

function spawnBeans(num) {
  for (let i = 0; i < num; i++) {
    openWindow(`${document.URL}/bean.html`);
  }
}

function deleteBeans() {
  for (let i = 0; i < windows.length; i++) {
    if (!windows[i].closed) {
      windows[i].close();
    }
  }
  windows = [];
  beans = 0;
  updateCounter();
}

function updateCounter() {
  counter.innerHTML = "Total beans: " + beans;
}

setInterval(() => {
  windows = windows.filter(win => !win.closed);
  beans = windows.length;
  updateCounter();
}, 500);

mainButton.addEventListener("click", function () {
  spawnBeans(1);
});

closeButton.addEventListener("click", function () {
  if (beans > 49) {
    alert("You currently have more than 50 beans opened. Deleting all beans may lag your computer. Please wait a moment.")
  }
  deleteBeans();
});

button2.addEventListener("click", function () {
  spawnBeans(5);
});

button3.addEventListener("click", function () {
  spawnBeans(20);
});

button4.addEventListener("click", function () {
  spawnBeans(50);
});

button5.addEventListener("click", function () {
  let con = confirm("Are you sure you want to spawn 100 beans?")
  if (con) {
    spawnBeans(100);
  }
});

button6.addEventListener('click', function () {
  let num = prompt("How many beans do you want to spawn?")
  if (num) {
    spawnBeans(num);
  }
});


/*
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
});*/