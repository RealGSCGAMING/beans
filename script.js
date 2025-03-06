const mainButton = document.getElementById("singleButton");
const button2 = document.getElementById("fiveButton");
const button3 = document.getElementById("twentyButton");
const button4 = document.getElementById("fiftyButton");
const button5 = document.getElementById("hundredButton");
const customButton = document.getElementById("customButton");
const closeButton = document.getElementById("closeButton");
const expandButton = document.getElementById("expandButton");
const expandMenu = document.getElementById("expandMenu");
const devPanel = document.getElementById("devArea");
const devCustomButton = document.getElementById("devCustom");
const devInput = document.getElementById("devInput");
const counter = document.getElementById("prompt");
const spawnLog = document.getElementById("spawnLog");
var windows = [];

let beans = 0;
let spawning = false;
let dev = false;
let custom;

let password = "bacon";

function openWindow(url) {
  var topPos = Math.floor(Math.random() * 1000);
  var leftPos = Math.floor(Math.random() * 2000);
  var params = `width=250, height=350, top=${topPos}, left=${leftPos}`;
  let newWindow = window.open(url, "", params);
  var rolledBean = rollBean();
  newWindow["bean"] = rolledBean;
  log(rolledBean);

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
    alert("Spawning more than 50 beans may take a while.");
  }
  log("Spawning " + num + " beans...");
  for (let i = 0; i < num; i++) {
    openWindow(`${document.URL}/bean.html`);
  }
  log("Spawned " + num + " beans.");
}

function deleteBeans() {
  let curlen = windows.length;
  log("Removing all beans...");
  while (windows.length > 0) {
    for (let i = 0; i < windows.length; i++) {
      if (!windows[i].closed) {
        windows[i].close();
        windows.splice(i, 1);
      }
    }
  }
  log("Removed " + curlen + " beans.");
  beans = 0;
  updateCounter();
}

function updateCounter() {
  counter.innerHTML = "Total Beans: " + beans;
}

// bean rfunctions
function rollBean() {
  let bean;

  if (custom && dev) {
    bean = custom;
    return bean;
  }

  bean = Math.floor(Math.random() * 13);

  if (Math.floor(Math.random() * 50) == 0) {
    bean = -1;
  } else if (Math.floor(Math.random() * 25) == 0) {
    bean = -2;
  } else if (Math.floor(Math.random() * 2000) == 0) {
    bean = -3;
  } else if (Math.floor(Math.random() * 1000) == 0) {
    bean = -4;
  }

  return bean;
}
function getImage(bean) {
  if (bean == -4) {
    return "./beans/crash.gif";
  }
  if (bean == -3) {
    return "./beans/reactivewolf.png";
  }
  if (bean == -2) {
    return "./beans/pineapple.png";
  }
  if (bean == -1) {
    return "./beans/goldenbean.webp";
  }
  if (bean == 0) {
    return "./beans/mrbean.png";
  }
  if (bean == 1) {
    return "./beans/stringbean.jpg";
  }
  if (bean == 2) {
    return "./beans/refriedbean.png";
  }
  if (bean == 3) {
    return "./beans/jellybean.jpg";
  }
  if (bean == 4) {
    return "./beans/pintobean.jpg";
  }
  if (bean == 5) {
    return "./beans/blackbean.jpg";
  }
  if (bean == 6) {
    return "./beans/edamamebean.jpg";
  }

  if (bean == 7) {
    return "./beans/magicbean.jpg";
  }

  if (bean == 8) {
    return "./beans/kidneybean.jpg";
  }

  if (bean == 9) {
    return "./beans/burgerbean.jpg";
  }

  if (bean == 10) {
    return "./beans/wingedbean.jpg";
  }

  if (bean == 11) {
    return "./beans/chocolatebean.jpg";
  }

  if (bean == 12) {
    return "./beans/springbean.webp";
  }
}
function getName(bean) {
  if (bean == -4) {
    return "Green Screen Car Crash";
  }
  if (bean == -3) {
    return "ReactiveWolfGaming";
  }
  if (bean == -2) {
    return "Pineapple";
  }
  if (bean == -1) {
    return "Golden Bean";
  }
  if (bean == 0) {
    return "Mr. Bean";
  }
  if (bean == 1) {
    return "String Bean";
  }
  if (bean == 2) {
    return "Refried Bean";
  }
  if (bean == 3) {
    return "Jelly Bean";
  }
  if (bean == 4) {
    return "Pinto Bean";
  }
  if (bean == 5) {
    return "Black Bean";
  }
  if (bean == 6) {
    return "Edamame Bean";
  }

  if (bean == 7) {
    return "Magic Bean";
  }

  if (bean == 8) {
    return "Kidney Bean";
  }

  if (bean == 9) {
    return "Bean Burger?";
  }

  if (bean == 10) {
    return "Winged Bean";
  }

  if (bean == 11) {
    return "Chocolate Bean";
  }

  if (bean == 12) {
    return "Spring Bean";
  }
}

setInterval(() => {
  let curlen = windows.length;
  windows = windows.filter((win) => !win.closed);
  if (curlen != windows.length) {
    log("User closed " + (curlen - windows.length) + " beans.");
  }
  beans = windows.length;
  updateCounter();
}, 500);

mainButton.addEventListener("click", function () {
  spawnBeans(1);
});

closeButton.addEventListener("click", function () {
  if (beans > 49) {
    alert(
      "You currently have more than 50 beans opened. Deleting all beans may take a while. Do not close this browser tab during this process.",
    );
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
  let con = confirm("Are you sure you want to spawn 100 beans?");
  if (con) {
    spawnBeans(100);
  }
});

customButton.addEventListener("click", function () {
  let num = prompt("How many beans do you want to spawn?");
  if (num) {
    if (num <= 100) {
      spawnBeans(num);
    } else {
      alert("You cannot spawn more than 100 beans at a time. Sorry...");
    }
  }
});

let isExpanded = false;
expandButton.addEventListener("click", function () {
  if (!isExpanded) {
    expandMenu.style = "display: block;";
    isExpanded = true;
  } else {
    expandMenu.style = "display: none;";
    isExpanded = false;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "d" || event.key === "D") {
    if (dev) {
      dev = false;
      alert("dev mode disabled");
      devPanel.style.display = "none";
      return;
    }
    const passInput = prompt("enter password");
    if (passInput == password) {
      dev = true;
      alert("dev mode active");
      devPanel.style.display = "block";
    }
  }
});

devCustomButton.addEventListener("click", function () {
  let num = prompt("How many beans do you want to spawn?");
  if (num) {
    spawnBeans(num);
  }
});

devInput.addEventListener("input", function () {
  if (devInput.value) {
    custom = devInput.value;
  } else {
    custom = null;
  }
});

window.onbeforeunload = function () {
  deleteBeans();
};
