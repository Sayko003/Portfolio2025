function btnNav(){

    const btnHeader = document.querySelector(`.header .btn--nav`),
        btnMenu = document.querySelector(`.menu .btn--nav`),
        overflow = document.querySelector(`body`),
        menu = document.querySelector(`.menu`),
        overlay = document.querySelector(`.menu .overlay`),
        linksMenu = document.querySelectorAll(`.menu .menu--link`),
        bodyPadding = getComputedStyle(overflow);

        
    //Подсчет ширины скролбара
    function getScrollBarWidth () {
        const inner = document.createElement('p');
        inner.style.width = "100%";
        inner.style.height = "200px";

        const outer = document.createElement('div');
        outer.style.position = "absolute";
        outer.style.top = "0px";
        outer.style.left = "0px";
        outer.style.visibility = "hidden";
        outer.style.width = "200px";
        outer.style.height = "150px";
        outer.style.overflow = "hidden";
        outer.appendChild (inner);

        document.body.appendChild (outer);
        var w1 = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        var w2 = inner.offsetWidth;
        if (w1 == w2) w2 = outer.clientWidth;

        document.body.removeChild (outer);

        return (w1 - w2);
    };

    //Проверка есть ли паддинг у body
    function paddingBody(){
        const widthScroll = getScrollBarWidth();

        if(bodyPadding.paddingRight === `${widthScroll}px`){
            overflow.style.paddingRight = `0px`;
            overflow.style.overflow = `auto`;
            btnHeader.style.right = `30px`;
        } else {
            overflow.style.paddingRight = `${widthScroll}px`;
            overflow.style.overflow = `hidden`;
            btnHeader.style.right = `${30 + widthScroll}px`;
        }
    }

    function toggleClass(){
        overflow.classList.toggle(`no-scroll`);
        menu.classList.toggle(`menu-active`);
    }
    function clickBtn(btn){
        btn.addEventListener(`click`, () =>{
        
            paddingBody();
            toggleClass();
        });
    }

    clickBtn(btnHeader);
    clickBtn(btnMenu);
    clickBtn(overlay);

    linksMenu.forEach((link, i) =>{
        clickBtn(link);
    });
}

export default btnNav;