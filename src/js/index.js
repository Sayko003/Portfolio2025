import btnNav from "./modules/btn-nav";
import submit from "./modules/submit";
import recaptcha from "./modules/recaptcha";

document.addEventListener("DOMContentLoaded", function() {
    btnNav();
    submit();
    recaptcha();
    console.log(`Привет, если ты разработчик и тебе бы хотелось со мной поработать, на сайте есть ссылочки на контакты со мной. Пиши не стесняйся.`)
});