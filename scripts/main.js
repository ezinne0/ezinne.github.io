// Author: Ezinne Okonkwo
// Last Updated: 5/30/23
// Hello source peeker! Hope you enjoy:D

// header
class MyHeader extends HTMLElement{
  connectedCallback(){
    this.innerHTML= `
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Navbar</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <nav class="navbar">
    <button class="menu-toggle" id="menu-toggle">
      ☰
    </button>
    <ul class="nav-links" id="nav-links">
      <li><a href="#home">about</a></li>
      <li><a href="#about">hair-itage</a></li>
      <li><a href="#services">more</a></li>
    </ul>
  </nav>
  <script src="script.js"></script>
</body>
</html>

      `
  }
}
// custom element: if I want to change it, only have to do so in one file
customElements.define('my-header', MyHeader)


document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});


// typing effect of home page
$(document).ready(function(){
  var typed = new Typed('#indexGreeting', {
    strings: [ "name","Ndewo! Afa m bu Ezinne.", "Hi! My name is Ezinne."],
    typeSpeed: 80, // Adjust typing speed
    backSpeed: 70, // Adjust backspacing speed
    loop: true, // Set to false if you don't want the text to loop
    showCursor:false
  });
});

// typing effect of passion page
document.addEventListener("DOMContentLoaded", function() {
  // var getting content of element with this id
  var element = document.getElementById("whatI");
  var typed = new Typed(element, {
    // string to alternate with one another, forming sentences with the existing text
    strings: [
      element.textContent + " like to do.",
      element.textContent + " love.",
      element.textContent + " do in my free time.",
      element.textContent + " will never get tired of.",
      element.textContent + " could spend hours doing."
    ],
    // animation details
    typeSpeed: 60,
    backSpeed: 50,
    loop: true,
    showCursor: false
  });
});