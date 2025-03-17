function btnNav(){

    const btnHeader = document.querySelector(`.header .btn--nav`),
        btnMenu = document.querySelector(`.menu .btn--nav`),
        overflow = document.querySelector(`body`),
        menu = document.querySelector(`.menu`);

    function clickBtn(btn){
        btn.addEventListener(`click`, () =>{
        overflow.classList.toggle(`no-scroll`);

        menu.classList.toggle(`menu-active`);
        });
    }

    clickBtn(btnHeader);
    clickBtn(btnMenu);

}

export default btnNav;