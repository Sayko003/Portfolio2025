function submit(){
    const form = document.querySelector(`form`),    
        url = `https://webdev-konstantin.ru/`,
        info = document.querySelector('.form--info');

    form.addEventListener(`submit`, (e) =>{
        e.preventDefault();

        const data = new FormData(this) // Сборка формы 

        fetch(url, {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: data // Отправка самой формы
            })
            .then(response => response.json())
            .then((json) => { // Ответ
            if (json.id === 101) { // Для примера проверка пройдена если id === 101
                // Добавление поля
                info.innerHTML = `<span class="green">Ваше сообщение отправлено, свяжусь с вами в ближайшее время!</span>`
                info.style.opacity = "1";
            }
            // Дебаг узнать что прошла форма
            console.log(json)
            })
            .catch(err => {
                console.log(err);
                info.innerHTML = '<span class="red">Ваше сообщение не доставлено, заполните обязательные поля формы!</span>'
                info.style.opacity = "1";
            });
    });
}

export default submit;