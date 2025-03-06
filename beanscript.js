const content = document.getElementById("mainContent");

let bean = window["bean"];

content.innerHTML =
  "<h1>Rolling bean...</h1><img src='./beans/rolling.png' style='width:250; height:250' />";

setTimeout(function () {
  if (bean == -4) {
    content.innerHTML =
      "<h1 style='font-size: 2em;'>Green Screen Car Crash</h1><img src='./beans/crash.gif' style='width:500; height:250' />";
    document.body.style.backgroundColor = "green";
    window.resizeTo(750, 750);
  }

  if (bean == -3) {
    content.innerHTML =
      "<h1 style='font-size: 3em;'>ReactiveWolfGaming</h1><img src='./beans/reactivewolf.png' style='width:750; height:500' />";
    document.body.style.backgroundColor = "blue";
    window.resizeTo(1000, 1000);
  }

  if (bean == -2) {
    content.innerHTML =
      "<h1>Pineapple.</h1><img src='./beans/pineapple.png' style='width:350; height:250' />";
    document.body.style.backgroundColor = "yellow";
    window.resizeTo(500, 500);
  }

  if (bean == -1) {
    content.innerHTML =
      "<h1>GOLDEN BEAN!!!!</h1><img src='./beans/goldenbean.webp' style='width:250; height:250' />";
    document.body.style.backgroundColor = "gold";
    window.resizeTo(750, 750);
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

  if (bean == 10) {
    content.innerHTML =
      "<h1>Winged Bean</h1><img src='./beans/wingedbean.jpg' style='width:250; height:250' />";
  }

  if (bean == 11) {
    content.innerHTML =
      "<h1>Chocolate Bean</h1><img src='./beans/chocolatebean.jpg' style='width:250; height:250' />";
  }

  if (bean == 12) {
    content.innerHTML =
      "<h1>Spring Bean</h1><img src='./beans/springbean.webp' style='width:250; height:250' />";
  }
}, 750);

// BEAN FUNCTIONS

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
