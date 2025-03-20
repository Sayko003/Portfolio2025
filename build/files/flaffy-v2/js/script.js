document.addEventListener(`DOMContentLoaded`, () => {
  //Анимация
  new WOW().init();

  //Слайдер
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    centeredSlides: true,
    effect: 'slide',
    slidesPerView: 'auto',


    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
     // Responsive breakpoints
  breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        allowTouchMove: false,
      },
      // when window width is >= 480px
      // 767: {
      //   slidesPerView: 1
      // },
    }
  });

  //Скрипт модульного окна
  const footerButton = document.querySelectorAll(`.btn`),
    closeModal = document.querySelector(`.modal__close`),
    modal = document.querySelector(`.modal`),
    body = document.querySelector(`body`);
  footerButton.forEach(item => {
    item.addEventListener(`click`, (e) => {
      e.preventDefault();
  
      modal.classList.add(`modal__active`);
      body.classList.add(`overlay`);
    });
  });
  

  closeModal.addEventListener(`click`, (e) => {
    e.preventDefault();

    modal.classList.remove(`modal__active`);
    body.classList.remove(`overlay`);
  });


  //Скрипт для мобильного меню
  const burgerButton = document.querySelector(`.mobile-menu__burger`),
        closeButton = document.querySelector(`.mobile-nav__close`),
        mobileMenu = document.querySelector(`.mobile-nav`),
        mobileLink = document.querySelectorAll(`.mobile-nav__list`)
  
  burgerButton.addEventListener(`click`, (e) =>{
    e.preventDefault();

    mobileMenu.classList.add(`mobile-nav__active`);
    body.classList.add(`overlay`);
  });

  closeButton.addEventListener(`click`, (e) =>{
    e.preventDefault();

    mobileMenu.classList.remove(`mobile-nav__active`);
    body.classList.remove(`overlay`);
  });

  mobileLink.forEach(item => {
    item.addEventListener(`click`, (e) =>{
      e.preventDefault();

      mobileMenu.classList.remove(`mobile-nav__active`);
      body.classList.remove(`overlay`);
    });
  });





  //Ссылки в модульном окне
  const modalLink = document.querySelectorAll('.modal__items a');

  modalLink.forEach(item => {
    item.addEventListener(`click`, (e) =>{
      e.preventDefault();
  
      modal.classList.remove(`modal__active`);
      body.classList.remove(`overlay`);
    });
  });

  //Табы
  const tab = document.querySelectorAll('.classes__warrior__item'),
    tabContent = document.querySelectorAll('.classes__tab__block'),
    leftArrow = document.querySelector('.classes__tab__descr__arrow_left'),
    rigthArrow = document.querySelector('.classes__tab__descr__arrow_rigth');

  function hideTab() {
    tab.forEach((item) => {
      item.classList.remove('classes__warrior__item_show');
    });
    tabContent.forEach((item) => {
      item.classList.remove('classes__tab__block_show');
    });
  }

  tab.forEach(function (tab, i) {
    tab.addEventListener('click', function () {
      hideTab();
      this.classList.add('classes__warrior__item_show');
      tabContent[i].classList.add('classes__tab__block_show');
    });

  });

  function arrowPrevNext(arrowLeft, arrowRigth) {
    arrowLeft.addEventListener('click', function (e) {
      tab.forEach(function (item, i) {
        if (item.classList.contains('classes__warrior__item_show')) {
          if (i !== 0) {
            hideTab();
            tab[i - 1].classList.add('classes__warrior__item_show');
            tabContent[i - 1].classList.add('classes__tab__block_show');

          }

        }
      });
    });

    arrowRigth.addEventListener('click', function (e) {
      for (let i = 0; i < tab.length; i++) {
        if (tab[i].classList.contains('classes__warrior__item_show')) {
          if (i !== 5) {
            hideTab();
            tab[i + 1].classList.add('classes__warrior__item_show');
            tabContent[i + 1].classList.add('classes__tab__block_show');
            break;
          }
        }
      }
    });
  }

  arrowPrevNext(leftArrow, rigthArrow);




  //Скрипт для плавного скролла по якорям
  // собираем все якоря; устанавливаем время анимации и количество кадров
  const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    animationTime = 600,
    framesCount = 120;

  anchors.forEach(function (item) {
    // каждому якорю присваиваем обработчик события
    item.addEventListener('click', function (e) {
      // убираем стандартное поведение
      e.preventDefault();

      // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
      let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

      // запускаем интервал, в котором
      let scroller = setInterval(function () {
        // считаем на сколько скроллить за 1 такт
        let scrollBy = coordY / framesCount;

        // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
        // и дно страницы не достигнуто
        if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
          // то скроллим на к-во пикселей, которое соответствует одному такту
          window.scrollBy(0, scrollBy);
        } else {
          // иначе добираемся до элемента и выходим из интервала
          window.scrollTo(0, coordY);
          clearInterval(scroller);
        }
        // время интервала равняется частному от времени анимации и к-ва кадров
      }, animationTime / framesCount);
    });
  });
});