const btn_nav = document.querySelector('.btn-nav');


btn_nav.addEventListener('click', mobileMenu);

function mobileMenu() {

    const menu = document.querySelector(".nav-mobile ul");
    const menuBtnItems = document.querySelectorAll('.btn-nav span');
    menu.classList.toggle('open');

    if(menu.classList.contains('open')) {

        menu.style.top='5rem';
        menu.style.opacity='1';

        menuBtnItems[0].style.display='none';
        menuBtnItems[1].style.transform= 'translateY(5px) rotate(45deg)';
        menuBtnItems[2].style.transform= 'translateY(-5px) rotate(-45deg)';
    }else {
        menu.style.top='-100vh';
        menu.style.opacity='0';

        menuBtnItems[0].style.display='block';
        menuBtnItems[1].style.transform= 'translateY(0px) rotate(0)';
        menuBtnItems[2].style.transform= 'translateY(0px) rotate(0)';
    }

}