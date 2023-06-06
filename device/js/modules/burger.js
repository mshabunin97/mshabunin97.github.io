const burger = () => {
    const btn = document.querySelector('.burger');
    const body = document.querySelector('body');

    if (btn) {
        btn.addEventListener('click', () => {
            const menu = document.querySelector('.nav__list-device');
    
            menu.classList.toggle('active');
            btn.classList.toggle('active');
            body.classList.toggle('no-scroll');
        })
    }


}

export default burger;