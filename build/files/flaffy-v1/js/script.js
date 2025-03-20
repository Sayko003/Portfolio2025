document.addEventListener(`DOMContentLoaded`, () =>{
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 3,
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            loop: false
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
            loop: false,
            initialSlide: 1,
          },
          // when window width is >= 640px
          1024: {
            slidesPerView: 3,
            spaceBetween: 0
          }
        },
  });



      const footerButton = document.querySelector(`.btn`),
            closeModal = document.querySelector(`.modal__close`),
            modal = document.querySelector(`.modal`),
            body = document.querySelector(`body`);

      footerButton.addEventListener(`click`, (e)=>{
        e.preventDefault();

        modal.classList.add(`modal__active`);
        body.classList.add(`overlay`);
      });

      closeModal.addEventListener(`click`, (e)=>{
        e.preventDefault();

        modal.classList.remove(`modal__active`);
        body.classList.remove(`overlay`);
      });


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