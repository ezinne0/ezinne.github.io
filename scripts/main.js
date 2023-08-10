// Author: Ezinne Okonkwo
// Last Updated: 5/30/23
// Hello source peeker! Hope you enjoy:D

// header
class MyHeader extends HTMLElement{
  connectedCallback(){
    this.innerHTML= `
      <header>
      <div class="navBarContainer">
      <h1 ><a id= "EO" href= "index.html">EO</a></h1>
        <nav>
          <ul class="navHeader">
            <li class="navTabList"><a class= "navigationTabs" href= "index.html">Home</a></li>
            <li class="navTabList"><a class= "navigationTabs" href="index.html#whoAmI?">Who Am I?</li></a>
            <li class="navTabList"><a class= "navigationTabs" href= "passions.html">Passions</a></li>
            <li class="navTabList"><a class= "navigationTabs" href= "https://www.linkedin.com/in/ezinne-okonkwo/">LinkedIn</a></li>
          </ul>
          </nav>
      </div>
      <h1 id="myName"><span>Ezinne Okonkwo</span></h1>
      </header>
      `
  }
}
// custom element: if I want to change it, only have to do so in one file
customElements.define('my-header', MyHeader)

//footer
class MyFooter extends HTMLElement{
  connectedCallback(){
    // putting footer details here to apply to all other pages
    this.innerHTML= `
    <div class="text-color" class="footerContainer">
      <footer>
      <p id="footer_words">connect with me</p>
        <a href= "mailto:zidede1@gmail.com" target="_blank"> <img class="footerIcons" src = "images/email_dark_icon.png"> </a>
        <a href= "https://www.linkedin.com/in/ezinne-okonkwo/" target="_blank"> <img class="footerIcons" src = "images/linkedin_dark_icon.png"> </a>
      </footer>
    </div> `
  }
}
customElements.define('my-footer', MyFooter)

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