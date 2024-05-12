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