//To enter sign up page
const signupButton = document.getElementById(`signupButton`)
signupButton.onclick = function() {
    const formPage = document.getElementById(`formPage`)
    const blurS = document.getElementsByClassName(`blurS`)
    if(formPage.style.display === `none` || formPage.style.display === ``) {
        document.body.style.backgroundImage = `none`;
        blurS[0].style.filter = `blur(5px)`;
        blurS[1].style.filter = `blur(5px)`;
        formPage.style.display = `flex`;
    }
    //To exit from sign up page
    const exitButton = document.getElementById(`exitButton`)
    exitButton.onclick = function() {
        formPage.style.display = `none`;
        blurS[0].style.filter = `none`;
        blurS[1].style.filter = `none`;
        document.body.style.backgroundImage = `radial-gradient(hsla(185, 45%, 79%, 0.788) 2px, var(--background) 2px)`;
    }

    const form = document.getElementById(`form`)
    const firstnameInput = document.getElementById(`firstnameInput`)
    const lastnameInput = document.getElementById(`lastnameInput`)
    const emailInput = document.getElementById(`emailInput`)
    const numberInput = document.getElementById(`numberInput`)
    const submitButton = document.getElementById(`submitButton`)

    submitButton.addEventListener(`click`, (e) => {
        
        let errors = []
        
        errors = getFormErrors(firstnameInput.value, lastnameInput.value, emailInput.value, numberInput.value)
        if(errors.length > 0){
            e.preventDefault()
        }
    })

    function getFormErrors(firstname, lastname, email, number){
        let errors = []

        if(firstname === `` || firstname == null){
            errors.push(`Firstname is required`)
            firstnameInput.parentElement.classList.add(`inccorect`)
        }
        if(lastname === `` || lastname == null){
            errors.push(`Lastname is required`)
            lastnameInput.parentElement.classList.add(`inccorect`)
        }
        if(email === `` || email == null){
            errors.push(`Email is required`)
            emailInput.parentElement.classList.add(`inccorect`)
        }
        if(number === `` || number == null){
            errors.push(`Phone Number is required`)
            numberInput.parentElement.classList.add(`inccorect`)
        }
        return errors;
    }
}