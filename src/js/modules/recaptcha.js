function recaptcha(){

    function onSubmit(token) {
     document.querySelector(`form .btn-main`).submit();
   }
   onSubmit();
}

export default recaptcha;