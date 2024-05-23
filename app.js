// When page is scrolled
window.addEventListener('scroll', function() {
   var scroll = window.scrollY;
   var navBar = document.querySelector('.navbar');
   var toTop = document.querySelector('.to-top');

   if (scroll > 100)
    {
        navBar.classList.add('scrolled');
        toTop.classList.add("active");

    }
    else 
    {
        navBar.classList.remove('scrolled');
        toTop.classList.remove("active");
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

// Back to Top
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
