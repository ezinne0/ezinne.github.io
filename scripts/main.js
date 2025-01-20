// Author: Ezinne Okonkwo
// Last Updated: 1/12/25
// Hello source peeker! Hope you enjoy:D

// Define the custom header element
class MyHeader extends HTMLElement {
  // header + hamburger nav bar
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
        <h1 class="name"><a class = "header-link" href="index.html">ezinne okonkwo</a></h1>
      </div>
    `;

    const menuToggle = this.querySelector('#menu-toggle');
    const navLinks = this.querySelector('#nav-links');

    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    navLinks.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('active');
      }
    });
  }

}

customElements.define("my-header", MyHeader);


// Underline page user is currently viewing
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

// image gallery on more.html

// Function to open the modal and display the clicked image
function openModal(imgSrc) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  modal.style.display = 'flex'; // Show the modal
  modalImg.src = imgSrc; // Set the source of the image in the modal
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none'; // Hide the modal when it's clicked
}


// // Typing effect on the home page
// $(document).ready(function () {
//   var typed = new Typed("#indexGreeting", {
//     strings: ["name", "Ndewo! Afa m bu Ezinne.", "Hi! My name is Ezinne."],
//     typeSpeed: 80, // Adjust typing speed
//     backSpeed: 70, // Adjust backspacing speed
//     loop: true, // Set to false if you don't want the text to loop
//     showCursor: false,
//   });
// });

// // Typing effect on the passion page
// document.addEventListener("DOMContentLoaded", function () {
//   var element = document.getElementById("whatI");
//   if (element) {
//     var typed = new Typed(element, {
//       strings: [
//         element.textContent + " like to do.",
//         element.textContent + " love.",
//         element.textContent + " do in my free time.",
//         element.textContent + " will never get tired of.",
//         element.textContent + " could spend hours doing.",
//       ],
//       typeSpeed: 60,
//       backSpeed: 50,
//       loop: true,
//       showCursor: false,
//     });
//   }
// });
