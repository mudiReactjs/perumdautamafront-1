// make function scroll down navbar change backround color
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', (event) => {
    const scrollY = window.scrollY;
    if (scrollY > 20) {
        navbar.classList.remove('bg-dark-rgba');
        navbar.classList.add('bg-dark');
    } else {
        navbar.classList.add('bg-dark-rgba');
        navbar.classList.remove('bg-dark');
    }
});

// Initialize evo-calendar
$(document).ready(function () {
    $('#calendar').evoCalendar({
        sidebarDisplayDefault: false,
    })
})

// const navbarToggler = document.querySelector('.navbar-toggler');
// navbarToggler.addEventListener('click', (event) => {
//     navbar.classList.remove('bg-dark-rgba');
//     navbar.classList.add('bg-dark');
//     console.log('anjat');
// });