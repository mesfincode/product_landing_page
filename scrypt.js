const menuIcon = document.querySelector('.nav_menu_icon');
const closeIcon = document.querySelector('.nav_close_icon');
const mobileMenu = document.querySelector('.mobile_nav_menu');

menuIcon.addEventListener('click', () => {
    menuIcon.style.display ="none"
    closeIcon.style.display ="block"
    mobileMenu.classList.add('open');
});

closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuIcon.style.display ="block"
    closeIcon.style.display ="none"
});
const navbar = document.querySelector('.nav_section');

// Function to handle scroll event
function handleScroll() {
  // Check the scroll position
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled'); // Add the "scrolled" class
  } else {
    navbar.classList.remove('scrolled'); // Remove the "scrolled" class
  }
}

// Listen for the scroll event
window.addEventListener('scroll', handleScroll);