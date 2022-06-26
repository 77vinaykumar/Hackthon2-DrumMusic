var numberOfDrumButtons = document.querySelectorAll(".music");

for (var i = 0; i < numberOfDrumButtons.length; i++) {
  document.querySelectorAll(".music")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key) {
  switch (key) {
    case "s":
      var sa = new Audio("sa-music1.mpeg");
      sa.play();
      break;

    case "r":
      var re = new Audio("re-music2.mpeg");
      re.play();
      break;

    case "g":
      var ga = new Audio("ga-music3.mpeg");
      ga.play();
      break;

    case "m":
      var ma = new Audio("ma-music4.mpeg");
      ma.play();
      break;

    case "p":
      var pa = new Audio("pa-music5.mpeg");
      pa.play();
      break;

    case "d":
      var dha = new Audio("dha-music6.mpeg");
      dha.play();
      break;

    case "n":
      var ni = new Audio("ni-music7.mpeg");
      ni.play();
      break;
    case "y":
      var sa = new Audio("Heater-1.mp3");
      sa.play();
      break;

    case "u":
      var re = new Audio("Heater-2.mp3");
      re.play();
      break;

    case "i":
      var ga = new Audio("Heater-3.mp3");
      ga.play();
      break;

    case "h":
      var ma = new Audio("Heater-4_1.mp3");
      ma.play();
      break;

    case "j":
      var pa = new Audio("tom-4.mp3");
      pa.play();
      break;

    case "k":
      var dha = new Audio("snare.mp3");
      dha.play();
      break;

    case "l":
      var ni = new Audio("tom-1.mp3");
      ni.play();
      break;
    default:
      console.log("default case");
  }
}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}