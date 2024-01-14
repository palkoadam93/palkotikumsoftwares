// When the user scrolls down 50px from the top of the document, resize the header's font size
//window.onscroll = function() {scrollFunction()};
/*      
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("fej").style.padding = "0";
  } else {
    document.getElementById("fej").style.padding = "2em 10px";
  }
}
*/

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}