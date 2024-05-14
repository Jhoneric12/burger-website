// When page is scrolled
window.addEventListener('scroll', function() {
   var scroll = window.scrollY;
   var navBar = document.querySelector('.navbar');

   if (scroll > 40)
    {
        navBar.classList.add('scrolled');
    }
    else 
    {
        navBar.classList.remove('scrolled');
    }
});

// Open Navbar
const OpenNavbar = () => {
    const navbar = document.querySelector('.nav-links');
    navbar.style.display = 'flex';
}

// Close Navbar
const CloseNavbar = () => {
    const navbar = document.querySelector('.nav-links');
    navbar.style.display = 'none';
}
