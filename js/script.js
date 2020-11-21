// Header Mobile Nav
try {
    // const headerNavTrigger = document.querySelector('.hamburger');

    // headerNavTrigger.addEventListener('click', headerNavFunc);

    function headerNavFunc(){
        const menuMain = document.querySelector('.header__nav__main');
        menuMain.classList.toggle('active');
    }
} catch (err) {
    console.log(err);
}