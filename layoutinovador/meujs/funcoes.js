window.onscroll = function() {myFunction()};

var fixo = document.getElementById("fixo");
var ate = fixo.offsetTop;

function myFunction() {
  if (window.pageYOffset >= ate) {
    fixo.classList.add("ate")
  } else {
    fixo.classList.remove("ate");
  }
}