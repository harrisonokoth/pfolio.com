// Show or hide the back to top button
window.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  // Scroll back to top when the button is clicked
  document.getElementById('back-to-top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  