const mainButton = document.getElementById("singleButton");
const button2 = document.getElementById("fiveButton");
const button3 = document.getElementById("twentyButton");
const button4 = document.getElementById("fiftyButton");
const button5 = document.getElementById("hundredButton");
const customButton = document.getElementById("customButton");
const closeButton = document.getElementById("closeButton");
const expandButton = document.getElementById("expandButton");
const expandMenu = document.getElementById("expandMenu");
const counter = document.getElementById("prompt");
const spawnLog = document.getElementById("spawnLog");
var windows = [];

let beans = 0;
let spawning = false;
let dev = false;

let password = "bacon";

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

function log(txt) {
  spawnLog.innerHTML = txt;
}

function spawnBeans(num) {
  if (num > 49) {
    alert("Spawning more than 50 beans may take a while.")
  }
  log('Spawning ' + num + ' beans...')
  for (let i = 0; i < num; i++) {
    openWindow(`${document.URL}/bean.html`);
  }
  log('Spawned ' + num + ' beans.')
}

function deleteBeans() {
  let curlen = windows.length;
  log('Removing all beans...')
  while (windows.length > 0) {
    for (let i = 0; i < windows.length; i++) {
      if (!windows[i].closed) {
        windows[i].close();
        windows.splice(i, 1)
      }
    }
  }
  log('Removed ' + curlen + ' beans.')
  beans = 0;
  updateCounter();
}

function updateCounter() {
  counter.innerHTML = "Total Beans: " + beans;
}

setInterval(() => {
  let curlen = windows.length;
  windows = windows.filter(win => !win.closed);
  if (curlen != windows.length) {
    log('User closed '+ (curlen - windows.length) + ' beans.')
  }
  beans = windows.length;
  updateCounter();
}, 500);

mainButton.addEventListener("click", function () {
  spawnBeans(1);
});

closeButton.addEventListener("click", function () {
  if (beans > 49) {
    alert("You currently have more than 50 beans opened. Deleting all beans may take a while. Do not close this browser tab during this process.")
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

customButton.addEventListener('click', function () {
  let num = prompt("How many beans do you want to spawn?")
  if (num) {
    if (num == password) {
      if (dev) {
        dev = false;
        alert("dev mode disabled")
      }
      else {
        dev = true;
        alert("dev mode active - you can now spawn unlimited beans")
      }
      return
    }
    if (num <= 100 || dev == true) {
      spawnBeans(num);
    }
    else {
      alert("You cannot spawn more than 100 beans at a time. Sorry...")
    }
  }
});

let isExpanded = false;
expandButton.addEventListener("click", function () {
  if (!isExpanded) {
    expandMenu.style = "display: block;";
    isExpanded = true;
  }
  else {
    expandMenu.style = "display: none;";
    isExpanded = false;
  }
})

window.onbeforeunload = function () {
  deleteBeans();
};