// Author: Ezinne Okonkwo
// Last Updated: 1/12/25
// Hello source peeker! Hope you enjoy:D

// Define the custom header element
class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="heading">
        <nav class="navbar">
          <button class="menu-toggle" id="menu-toggle" aria-label="Toggle Navigation" aria-expanded="false">
            ☰
          </button>
          <ul class="nav-links" id="nav-links">
            <li><a href="about.html">about</a></li>
            <li><a href="https://hair-itage.org/">hair-itage</a></li>
            <li><a href="more.html">more</a></li>
          </ul>
        </nav>
        <h1 class="name"><a class="header-link" href="index.html">ezinne okonkwo</a></h1>
      </div>
    `;

    const menuToggle = this.querySelector('#menu-toggle');
    const navLinks = this.querySelector('#nav-links');

    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      // Toggle aria-expanded attribute for accessibility
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
    });

    // Close nav menu when clicking a link (useful on mobile)
    navLinks.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

customElements.define("my-header", MyHeader);

// Underline page user is currently viewing
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-links a');
  const currentPath = window.location.pathname.split("/").pop(); // Get current page filename

  // Highlight clicked link (for SPA or user interaction)
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (!link.getAttribute('href').startsWith('#')) {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  // On page load, highlight the correct link based on URL (except index.html)
  if (currentPath !== "index.html") {
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href').split("/").pop();
      if (linkPath === currentPath && linkPath !== "index.html") {
        link.classList.add('active');
      }
    });
  }
});

// Image gallery on more.html

// Open modal and display clicked image
function openModal(imgSrc) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  modal.style.display = 'flex';
  modalImg.src = imgSrc;
}

// Close modal when clicked
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Uncomment and customize typing effects if needed
/*
$(document).ready(function () {
  var typed = new Typed("#indexGreeting", {
    strings: ["name", "Ndewo! Afa m bu Ezinne.", "Hi! My name is Ezinne."],
    typeSpeed: 80,
    backSpeed: 70,
    loop: true,
    showCursor: false,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var element = document.getElementById("whatI");
  if (element) {
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
  }
});
*/
