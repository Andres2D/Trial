 let currentSlideIndex = 1;

    function showSlides() {
      const carousel = document.getElementById('image-carousel');
      const slides = document.getElementsByClassName('carousel-image');
      const dots = document.getElementsByClassName('carousel-dot');

      if (currentSlideIndex > slides.length) {
        currentSlideIndex = 1;
      } else if (currentSlideIndex < 1) {
        currentSlideIndex = slides.length;
      }

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${100 * (currentSlideIndex - 1)}%)`;
      }

      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }
      dots[currentSlideIndex - 1].className += ' active';
    }

    function nextSlide() {
      currentSlideIndex++;
      showSlides();
    }

    function prevSlide() {
      currentSlideIndex--;
      showSlides();
    }

    function currentSlide(index) {
      currentSlideIndex = index;
      showSlides();
    }

    // Autoplay
    setInterval(() => {
      nextSlide();
    }, 5000);

    // Initial display
    showSlides();

  // Gallery
 // Get the current script element (this script)
 const scriptElement = document.currentScript;

// Extract the script source URL
const scriptSrc = scriptElement.src;

// Calculate the base path
const basePath = scriptSrc.substring(0, scriptSrc.lastIndexOf('/'));

// Your existing code...
function showMore() {
  const galleryContainer = document.querySelector('.gallery-container');

  // Placeholder for additional 10 images (replace with your actual image paths)
  const additionalImages = [
    './g7.jpg', './g8.jpg', './g7.jpg', './g32.jpg',
    './g28.jpg', './g27.jpg', './steel.jpg', './g35.jpg', './g33.jpg'
  ];

  // Create image elements for additional images
  additionalImages.forEach((imagePath) => {
    const imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imagePath;
    imageElement.alt = 'Project Image';
    imageElement.onclick = function () {
      openModal(imagePath);
    };
    galleryContainer.appendChild(imageElement);
  });

  // Hide the "Show More" button after displaying all images
  document.getElementById('showMoreBtn').style.display = 'none';
}

   // Function to open the modal with a specific image
   function openModal(imagePath) {
      const modal = document.getElementById('imageModal');
      const modalImage = document.getElementById('modalImage');
      modal.style.display = 'block';
      modalImage.src = imagePath;
    }

    // Function to close the modal
    function closeModal() {
      const modal = document.getElementById('imageModal');
      modal.style.display = 'none';
    }

    // Close the modal if the user clicks outside of it
    window.onclick = function(event) {
      const modal = document.getElementById('imageModal');
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };

    // Function to get and update the current year
    function updateYear() {
      const currentYearElement = document.getElementById('currentYear');
      const currentYear = new Date().getFullYear();
      currentYearElement.textContent = currentYear;
    }

    // Initial call to set the current year
    updateYear();

    // Function to update the "Years of Trust" counter
    function updateYearsOfTrust() {
      const yearsOfTrustElement = document.getElementById('yearsOfTrust');
      const startYear = 2014; // Update with your starting year
      const currentYear = new Date().getFullYear();
      const yearsOfTrust = currentYear - startYear;
      yearsOfTrustElement.textContent = yearsOfTrust;
    }

    // Initial calls to set the current year and update the counter
    updateYear();
    updateYearsOfTrust();

    /*// Add this JavaScript to toggle the navigation menu on small screens
    document.addEventListener('DOMContentLoaded', function () {
  const navbarLinks = document.querySelector('.navbar-links');
  const navbarToggle = document.querySelector('.navbar-toggle');

  navbarToggle.addEventListener('click', function () {
    navbarLinks.classList.toggle('show');
    navbarHamburger.classList.toggle('open');

    if (navbarHamburger.classList.contains('open')) {
      rotateHamburger();
    } else {
      resetHamburger();
    }
  });

  // Close the navigation menu if a link is clicked
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navbarLinks.classList.remove('show');
      resetHamburger();
    });
  });
});*/

function toggleNavbar() {
    const navbarLinks = document.querySelector('.navbar-links');
    const hamIcon = document.querySelector('.ham');

    // Toggle the 'show' class to display/hide the navbar links
    navbarLinks.classList.toggle('show');

    // Toggle the 'active' class to animate the hamburger icon
    hamIcon.classList.toggle('active');

    // Check if the navbar links are shown
    const isNavbarVisible = navbarLinks.classList.contains('show');

    // Update hamburger icon based on navbar visibility
    if (isNavbarVisible) {
        hamIcon.classList.add('active');
    } else {
        hamIcon.classList.remove('active');
    }

    // Animate the navbar links based on their visibility
    if (isNavbarVisible) {
      navbarLinks.style.right = '0'; // Display the navbar links
      // Apply transform to each link for animation
      navbarLinks.querySelectorAll('a').forEach((link, index) => {
          link.style.transitionDelay = `${index * 0.1}s`;
          link.style.transform = 'translateX(0)';
      });
  } else {
      navbarLinks.style.right = '-100%'; // Hide the navbar links
      // Apply transform to each link for animation
      navbarLinks.querySelectorAll('a').forEach((link, index) => {
          link.style.transitionDelay = null; // Reset transition delay
          link.style.transform = 'translateX(100%)';
      });
  }
}

// Add an event listener to the hamburger icon to call toggleNavbar when clicked
const hamIcon = document.querySelector('.ham');
hamIcon.addEventListener('click', toggleNavbar);

// Add an event listener to each navbar link to call toggleNavbar when clicked
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        toggleNavbar(); // Hide the navbar links when a link is clicked
    });
});


