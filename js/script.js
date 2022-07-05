window.addEventListener("load", () => {

    // Menu Navbar
    const openMenu = document.querySelector('.header__menu');
    const closeMenu = document.querySelector('.menu__close');
    const menu = document.querySelector('.nav');
    
    openMenu.addEventListener('click', function(){
        menu.classList.add('nav--show');
    })
    
    closeMenu.addEventListener('click', function(){
        menu.classList.remove('nav--show');
    });
    
    // Button Landings 
    const btnLandings = document.querySelector('.nav__link');
    btnLandings.addEventListener('click', function(){
        
    });
});



