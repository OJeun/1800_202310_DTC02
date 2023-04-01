// Get all the footer links
const footerLinks = document.querySelectorAll('.footer__link');

// Loop through the links and add a click event listener to each
footerLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Prevent the default action of the link
    event.preventDefault();

    // Remove the "link-active" class from the currently active link
    const currentActiveLink = document.querySelector('.link-active');
    currentActiveLink.classList.remove('link-active');
    
    // Add the "link-active" class to the clicked link
    link.classList.add('link-active');

    // Get the href attribute of the clicked link
    const href = link.getAttribute('href');

  });
});
