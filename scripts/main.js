// Author: Ezinne Okonkwo
// Last Updated: 1/12/25
// Hello source peeker! Hope you enjoy:D

// Define the custom header element
class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="heading">
        <nav class="navbar">
          <button class="menu-toggle" id="menu-toggle" aria-label="Toggle Navigation">
            ☰
          </button>
          <ul class="nav-links" id="nav-links">
            <li><a href="about.html">about</a></li>
            <li><a href="https://hair-itage.org/">hair-itage</a></li>
            <li><a href="more.html">more</a></li>
          </ul>
        </nav>
        <h1 class="name">ezinne okonkwo</h1>
      </div>
    `;
  }
}


customElements.define("my-header", MyHeader);



document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-links a');
  const currentPath = window.location.pathname.split("/").pop(); // Get the current page file name

  // Set active class on the clicked link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Only apply active class if it's a page link (not an anchor link)
      if (!link.getAttribute('href').startsWith('#')) {
        // Remove 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');
      }
    });
  });

  // On page load, highlight the correct link based on the current URL
  if (currentPath !== "index.html") { // Only add active class if not on index.html
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href').split("/").pop(); // Get the file name from the href

      // Only apply the active class to links that are not for index.html
      if (linkPath === currentPath && linkPath !== "index.html") {
        link.classList.add('active');
      }
    });
  }
});


// Hamburger nav bar for smaller displays

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });

  // Close menu when a link is clicked
  navLinks.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
      navLinks.classList.remove('active');
    }
  });

  // ... (keep your existing code here)
});


// Typing effect on the home page
$(document).ready(function () {
  var typed = new Typed("#indexGreeting", {
    strings: ["name", "Ndewo! Afa m bu Ezinne.", "Hi! My name is Ezinne."],
    typeSpeed: 80, // Adjust typing speed
    backSpeed: 70, // Adjust backspacing speed
    loop: true, // Set to false if you don't want the text to loop
    showCursor: false,
  });
});

// Typing effect on the passion page
document.addEventListener("DOMContentLoaded", function () {
  var element = document.getElementById("whatI");
  var typed = new Typed(element, {
    strings: [
      element.textContent + " like to do.",
      element.textContent + " love.",
      element.textContent + " do in my free time.",
      element.textContent + " will never get tired of.",
      element.textContent + " could spend hours doing.",
    ],
    typeSpeed: 60,
    backSpeed: 50,
    loop: true,
    showCursor: false,
  });
});
