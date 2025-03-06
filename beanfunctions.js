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
