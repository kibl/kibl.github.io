let lastScrollTop = 0;
const header = document.getElementById('main-header');

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down: hide the header
    header.classList.add('header-hidden');
  } else {
    // Scrolling up: show the header
    header.classList.remove('header-hidden');
  }
  
  // Mobile browsers can have negative scroll values; prevent bugs by clamping at 0
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});
