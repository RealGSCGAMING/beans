const content = document.getElementById("mainContent");

let bean = Math.floor(Math.random() * 5);

if (bean == 0) {
  content.innerHTML =
    "<h1>Mr. Bean</h1><img src='./beans/mrbean.png' style='width:250; height:250' />";
}

if (bean == 1) {
  content.innerHTML =
    "<h1>String Bean</h1><img src='./beans/stringbean.jpg' style='width:250; height:250' />";
}

if (bean == 2) {
  content.innerHTML =
    "<h1>Refried Bean</h1><img src='./beans/refriedbean.png' style='width:250; height:250' />";
}

if (bean == 3) {
  content.innerHTML =
    "<h1>Jelly Bean</h1><img src='./beans/jellybean.jpg' style='width:250; height:250' />";
}

if (bean == 4) {
  content.innerHTML =
    "<h1>Pinto Bean</h1><img src='./beans/pintobean.jpg' style='width:250; height:250' />";
}