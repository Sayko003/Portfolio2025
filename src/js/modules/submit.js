function submit(){
    const form = document.getElementById('form'),
        result = document.getElementById('result');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        result.innerHTML = "Пожалуйста, подождите..."

        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    result.innerHTML = `<span class="green">Ваше сообщение отправлено, свяжусь с вами в ближайшее время!</span>`
                    result.style.opacity = "1";
                } else {
                    console.log(response);
                    result.innerHTML = `<span class="red">Ваше сообщение не доставлено, заполните обязательные поля формы!</span>`;
                    result.style.opacity = "1";
                }
            })
            .catch(error => {
                console.log(error);
                result.innerHTML = `<span class="red">Ваше сообщение не доставлено, заполните обязательные поля формы!</span>`;
            })
            .then(function() {
                form.reset();
                setTimeout(() => {
                    result.style.opacity = "0";
                }, 3000);
            });
    });
 }

export default submit;