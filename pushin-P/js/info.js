const fname = document.getElementById(`fname`)
const lname = document.getElementById(`lname`)
const email = document.getElementById(`email`)
const number = document.getElementById(`number`)

fname.value = localStorage.getItem(`firstName`);
lname.value = localStorage.getItem(`lastName`);
email.value = localStorage.getItem(`email`);
number.value = localStorage.getItem(`number`);

const update = document.getElementById(`update`)
const errorM = document.getElementById(`errorM`)
update.addEventListener("click", () => {

    let errors = getFormErrors(fname.value, lname.value, email.value, number.value)

    if(errors.length > 0){
        errorM.innerText = errors.join("\n")
    }else{
        localStorage.setItem(`firstName`, fname.value);
        localStorage.setItem(`lastName`, lname.value);
        localStorage.setItem(`email`, email.value);
        localStorage.setItem(`number`, number.value);
        location.reload()
    }
})

function getFormErrors(firstname, lastname, email, number){
    let errors = []

    if(firstname === `` || firstname == null){
        errors.push(`Firstname is required`)
    } else if(firstname.length < 3){
        errors.push(`Firstname is too short`)
    }

    if(lastname === `` || lastname == null){
        errors.push(`Lastname is required`)
    } else if(lastname.length < 3){
        errors.push(`Lastname is too short`)
    }

    if(email === `` || email == null){
        errors.push(`Email is required`)
    }
    
    if(number === `` || number == null){
        errors.push(`Phone Number is required`)
    } else if(number.length < 8){
        errors.push(`Phone Number is too short`)
    }
    return errors;
}
