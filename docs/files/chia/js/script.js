document.addEventListener(`DOMContentLoaded`, () => {
    const keys = new Swiper('.keys__swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: '.keys__swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.keys__swiper-button-next',
          prevEl: '.keys__swiper-button-prev',
        },
        spaceBetween: 50,
        speed: 800,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },

      });

      const news = new Swiper('.news__swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: '.news__swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.news__swiper-button-next',
          prevEl: '.news__swiper-button-prev',
        },
        spaceBetween: 50,
        speed: 800,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
      }
      });

      const newsSlider = new Swiper('.news-slider__swiper', {
        direction: 'vertical',
        pagination: {
          el: '.news-slider__swiper-pagination',
          clickable: true
        },
        slidesPerView: 3,
        navigation: {
          nextEl: '.news-slider__swiper-button-next',
          prevEl: '.news-slider__swiper-button-prev',
        },
        loop: true,
        speed: 800,
        slidesPerView:'auto',
        loopAdditionalSlides: 2,
        dynamicBullets: true,
        dynamicMainBullets: 5,
      });

      //Меню
      const body = document.querySelector(`body`),
          menu = document.querySelector(`.menu`),
          burger = document.querySelector(`.header__mobile_burger`),
          mobileMenuLink = document.querySelectorAll(`.menu__item a`);
        
      
      burger.addEventListener(`click`, (e) =>{


        body.classList.toggle(`overflow`);
        menu.classList.toggle(`menu__active`);
        burger.classList.toggle(`header__mobile_burger_active`);
      });

      mobileMenuLink.forEach((item) =>{
        item.addEventListener(`click`, (e) =>{

          body.classList.remove(`overflow`);
          menu.classList.remove(`menu__active`);
          burger.classList.remove(`header__mobile_burger_active`);
        });
      });

      
      //Скрипт для плавного скролла по якорям
    const anchors = document.querySelectorAll('a[href^="#"]')

    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const blockID = anchor.getAttribute('href');
        
        document.querySelector(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    };

    //Скрипт модульно окна
    const modal = document.querySelector(`.modal`),
          modalClose = document.querySelector(`.modal__close`),
          modalLink = document.querySelectorAll(`.modal__link`),
          modalBlock = document.querySelector(`.modal__block`);
    //Фукнция для передачи атрибута
    
    modalLink.forEach((item, i) =>{
      item.addEventListener(`click`, (e) =>{

        body.classList.add(`overflow`);
        modal.classList.add(`modal__active`);
        let modalTitle = document.querySelector(`.modal__title`),
        modalWrapper = document.querySelector(`.modal__form__wrapper`);


        // let title = item.getAttribute(`data-title`),
        // input = item.getAttribute(`data-input`),
        // inputId = item.getAttribute(`data-for-input-id`),
        // img = item.getAttribute(`data-img`),
        // imgAlt = item.getAttribute(`data-alt-img`),
        // text = item.getAttribute(`data-text`);
        // //Заголовок
        // if(item.hasAttribute(title)){
        //   modalTitle.textContent = title;
        // }
        

       
        //Добавление формы, если не нужно добавлять data-input пустой data-input = ""
        // let deletInput = `
        // <label for="modal-name">${input}:</label>
        // <input id="${inputId}" placeholder="Ваше ${input} ">`
        // if(item.hasAttribute(`data-input`)){
        //   modalWrapper.insertAdjacentHTML('beforeend', deletInput);
        // }
        // //Добавление картинки, если не нужно добавляем атрибут пустой data-img=""
        // let addImg =  `<img class = "modal__img" src="${img}" alt="${imgAlt}">`
        // if(item.hasAttribute(`data-img`)){
        //   modalWrapper.insertAdjacentHTML('beforeend', addImg);
        // }

        // //Добавляем текст, если не нужно добавляем атрибут data-text =""
        // let addText = `<div class="modalAddText">${text}</div>`;
        // if(text !== '' && text !== null){
        //   modalWrapper.insertAdjacentHTML('beforeend', addText);
        // }
        modalClose.addEventListener(`click`, () =>{
          body.classList.remove(`overflow`);
          modal.classList.remove(`modal__active`);
          
          // setTimeout(()=>{
          //   modalWrapper.innerHTML = `
          //   <label for="modal-name">Имя:</label>
          //   <input id="modal-name" type="text" name="name" placeholder="Ваше имя">
          //   <label for="modal-tel">Телефон:</label>
          //   <input id="modal-tel" type="text" name="phone" placeholder="Ваше телефон">
          //   <label for="modal-email">Email:</label>
          //   <input id="modal-email" type="text" name="email" placeholder="Ваше емейл">
          // `;
          // }, 300)
        });
    
        modal.addEventListener(`click`, (e)=>{
    
          if(!modalBlock.contains(e.target)){
            body.classList.remove(`overflow`);
            modal.classList.remove(`modal__active`);

            // setTimeout(()=>{
            //   modalWrapper.innerHTML = `
            //   <label for="modal-name">Имя:</label>
            //   <input id="modal-name" type="text" name="name" placeholder="Ваше имя">
            //   <label for="modal-tel">Телефон:</label>
            //   <input id="modal-tel" type="text" name="phone" placeholder="Ваше телефон">
            //   <label for="modal-email">Email:</label>
            //   <input id="modal-email" type="text" name="email" placeholder="Ваше емейл">
            // `;
            // }, 300)
          }
        });
      })
    });

    

    //мобильный поиск
    const mobileButton = document.querySelector(`.header__mobile_search`),
      mobileInput = document.querySelector(`.input`),
      searchButton = document.querySelector(`.mobile-search`);

      mobileButton.addEventListener(`click`, (e) =>{
        e.preventDefault();

        searchButton.classList.toggle(`mobile-search__active`);
        mobileInput.classList.toggle(`input__active`);
      });
      
});