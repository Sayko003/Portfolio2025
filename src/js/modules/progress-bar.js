function progressBar(){
    const transparentBlock = document.querySelectorAll(`.skill--number--transparent span`),
        colorBlock = document.querySelectorAll(`.skill--number--transparent`),
        progressNumber = document.querySelectorAll(`.skill--number--subtitle`);
    
    function progressNumbers(numbers){
        numbers.forEach((number,i) =>{
            const numberAttribute = number.getAttribute(`data-number`),
                numberPattern = /\d+/g,
                numberContent = number.textContent.match(numberPattern).join();
            console.log(numberAttribute);
            console.log(numberContent);

        })
    }

    progressNumbers(progressNumber);
}

export default progressBar;