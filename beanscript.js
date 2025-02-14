const content = document.getElementById("mainContent");

let bean = Math.floor(Math.random() * 10);

if (Math.floor(Math.random() * 25) == 0) {
  bean = -1
}

if (bean == -1) {
  content.innerHTML =
    "<h1>GOLDEN BEAN!!!!</h1><img src='./beans/goldenbean.webp' style='width:250; height:250' />";
  document.body.style.backgroundColor = "gold";
}

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

if (bean == 5) {
  content.innerHTML =
    "<h1>Black Bean</h1><img src='./beans/blackbean.jpg' style='width:250; height:250' />";
}

if (bean == 6) {
  content.innerHTML =
    "<h1>Edamame Bean</h1><img src='./beans/edamamebean.jpg' style='width:250; height:250' />";
}

if (bean == 7) {
  content.innerHTML =
    "<h1>Magic Bean</h1><img src='./beans/magicbean.jpg' style='width:250; height:250' />";
}

if (bean == 8) {
  content.innerHTML =
    "<h1>Kidney Bean</h1><img src='./beans/kidneybean.jpg' style='width:250; height:250' />";
}

if (bean == 9) {
  content.innerHTML =
    "<h1>Bean Burger?</h1><img src='./beans/burgerbean.jpg' style='width:250; height:250' />";
}