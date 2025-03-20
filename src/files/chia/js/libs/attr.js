document.addEventListener(`DOMContentLoaded`, () => {
    //Скрипт модульно окна
    //Получаем блоки из html
    const modal = document.querySelector(`.modal`),
        modalClose = document.querySelector(`.modal__close`),
        modalLink = document.querySelectorAll(`.modal__link`),
        modalBlock = document.querySelector(`.modal__block`),
        body = document.querySelector(`body`);
    //Событие для открытия модульно окна, закрытия модульного окна, передачи атрибута
    //Перебираем все ссылки с классом modal__link 
    modalLink.forEach((item, i) => {
        //На каждую ссылку вешаем событие клика
        item.addEventListener(`click`, (e) => {
            //Запрещаем скролить странницу
            body.style.overflow = `hidden`;
            //Добавляем класс активности к модульному окну
            modal.classList.add(`modal__active`);

            //Получаем заголовок и в форме обертку, где находятся input, можно заменить на селектор form
            const modalTitle = document.querySelector(`.modal__title`),
                modalWrapper = document.querySelector(`.modal__form__wrapper`);

            //Получаем аттрибуты из ссылки на которой произошло событие
            let title = item.getAttribute(`data-title`),
                inputName = item.getAttribute(`data-input-name`),
                inputId = item.getAttribute(`data-input-id`),
                inputValue = item.getAttribute(`data-value`),
                img = item.getAttribute(`data-img`),
                imgAlt = item.getAttribute(`data-alt-img`),
                text = item.getAttribute(`data-text`);
                
            //Ставим условие проверки, если атрибут имеется, в заголовок передается аттрибут, data-title
            if (item.hasAttribute(`data-title`)) {
                modalTitle.textContent = title;
            }



            //Создаем input, в него передаем дата атрибуты с своим значение value
            let deletInput = `
            <input type ="hidden" name = "${inputName}" id="${inputId}" value = "${inputValue}">`;

            //Инпут с постоянной переменной value, значение value можете менять который на который вам потребуется, но тогда data-value указывать не требуется
            const constValueInput = `
            <input type ="hidden" name = "${inputName}" id="${inputId}" value = "value">`;
            //Условие для проверки требуется ли заменить value на свое значение, если нет добавляется constValueInput
            if (item.hasAttribute(`data-input-name`) && item.hasAttribute(`data-value`) && item.hasAttribute(`data-input-id`)) {
                modalWrapper.insertAdjacentHTML('beforeend', deletInput);
            } else if (item.hasAttribute(`data-input-name`) && item.hasAttribute(`data-value`) == false && item.hasAttribute(`data-input-id`)){
                modalWrapper.insertAdjacentHTML('beforeend', constValueInput);
            }
            //Добавление картинки, если не нужно добавляем атрибут пустой data-img="" или не прописывать атрибут , не забываем указывать класс для стилей добавляемого тега
            let addImg = `<img class = "modal__img" src="${img}" alt="${imgAlt}">`
            //Ставим условие проверки, если атрибут имеется, в заголовок передается аттрибут, data-img
            if (item.hasAttribute(`data-img`)) {
                modalWrapper.insertAdjacentHTML('beforeend', addImg);
            }

            //Добавляем текст, если не нужно добавляем атрибут data-text ="" или не прописывать атрибут, не забываем указывать класс для стилей добавляемого тега
            let addText = `<div class="modalAddText">${text}</div>`;
            //Ставим условие проверки, если атрибут имеется и он не равен null, то передаем data-text
            if (text !== '' && text !== null) {
                modalWrapper.insertAdjacentHTML('beforeend', addText);
            }

            //Вешаем событие клика на modal__close
            modalClose.addEventListener(`click`, () => {
                //Возвращаем скролл
                body.style.overflow = `auto`;
                //Убираем класс активности у модульного окна
                modal.classList.remove(`modal__active`);
                //Ставим ассинхронную функцию которая начнет выполнятся через 300 миллисекунд, столько же скок длится анимация появления модульного окна transition: all 0.3s
                setTimeout(() => {
                    //Возвраем заголовку изначальное значение для сброса
                    modalTitle.textContent = `Бесплатная консультация`;
                    //В оболочку формы возвращаем верстка, которая была
                    modalWrapper.innerHTML = `
<label for="modal-name">Имя:</label>
<input id="modal-name" type="text" name="name" placeholder="Ваше имя">
<label for="modal-tel">Телефон:</label>
<input id="modal-tel" type="text" name="phone" placeholder="Ваше телефон">
<label for="modal-email">Email:</label>
<input id="modal-email" type="text" name="email" placeholder="Ваше емейл">
`;
                }, 300)
            });
            //Создаем клик всем модульном окне, если кликают вне модульно окна, оно закрывается
            modal.addEventListener(`click`, (e) => {

                if (!modalBlock.contains(e.target)) {
                    body.style.overflow = `auto`;
                    modal.classList.remove(`modal__active`);

                    setTimeout(() => {
                        modalTitle.textContent = `Бесплатная консультация`;
                        modalWrapper.innerHTML = `
<label for="modal-name">Имя:</label>
<input id="modal-name" type="text" name="name" placeholder="Ваше имя">
<label for="modal-tel">Телефон:</label>
<input id="modal-tel" type="text" name="phone" placeholder="Ваше телефон">
<label for="modal-email">Email:</label>
<input id="modal-email" type="text" name="email" placeholder="Ваше емейл">
`;
                    }, 300)
                }
            });
        })
    });
});