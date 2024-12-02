//To enter sign up page
const signupButton = document.getElementById(`signupButton`)
const blurS = document.getElementsByClassName(`blurS`)
const formPage = document.getElementById(`formPage`)
signupButton.onclick = function() {
    if(formPage.style.display === `none` || formPage.style.display === ``) {
        document.body.style.backgroundImage = `radial-gradient(var(--background) 2px, var(--background) 2px)`;
        blurS[0].style.filter = `blur(5px)`;
        blurS[1].style.filter = `blur(5px)`;
        formPage.style.display = `flex`;
    }
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
    const errorMsg = document.getElementById(`errorMsg`) 
    submitButton.addEventListener("click", () => {
        
        let errors = getFormErrors(firstnameInput.value, lastnameInput.value, emailInput.value, numberInput.value)
        if(errors.length > 0){
        //     e.preventDefault()
            errorMsg.innerText = errors.join(". ")
        }
    })

    function getFormErrors(firstname, lastname, email, number){
        let errors = []

        if(firstname === `` || firstname == null){
            errors.push(`Firstname is required`)
            firstnameInput.parentElement.classList.add(`incorrect`)
        } else if(firstname.length < 3){
            errors.push(`Firstname is too short`)
            numberInput.parentElement.classList.add(`incorrect`)
        }

        if(lastname === `` || lastname == null){
            errors.push(`Lastname is required`)
            lastnameInput.parentElement.classList.add(`incorrect`)
        } else if(lastname.length < 3){
            errors.push(`Lastname is too short`)
            numberInput.parentElement.classList.add(`incorrect`)
        }

        if(email === `` || email == null){
            errors.push(`Email is required`)
            emailInput.parentElement.classList.add(`incorrect`)
        }
        
        if(number === `` || number == null){
            errors.push(`Phone Number is required`)
            numberInput.parentElement.classList.add(`incorrect`)
        } else if(number.length < 8){
            errors.push(`Phone Number is too short`)
            numberInput.parentElement.classList.add(`incorrect`)
        }
        return errors;
    }

    const allInputs = [firstnameInput, lastnameInput, emailInput, numberInput]

    allInputs.forEach(input => {
        input.addEventListener(`input`, () => {
            if(input.parentElement.classList.contains(`incorrect`)){
                input.parentElement.classList.remove(`incorrect`)
                errorMsg.innerText = ``
            }
        })
    })