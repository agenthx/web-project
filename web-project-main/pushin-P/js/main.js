    let darkmode = localStorage.getItem(`darkmode`)
    //get light mode button id
    const lightModeToggle = document.getElementById(`lightModeToggle`)
    const bulb = document.getElementById(`onOff`)
    const enableDarkmode = () => {
        document.body.classList.add(`darkmode`)
        bulb.src = `../images/light-on.png`;
        localStorage.setItem(`darkmode`, `active`)
    }

    const disableDarkmode = () => {
        document.body.classList.remove(`darkmode`)
        bulb.src = `../images/light-off.png`;
        localStorage.setItem(`darkmode`, null)
    }

    if(darkmode === "active") enableDarkmode()

    lightModeToggle.addEventListener("click", () => {
        darkmode = localStorage.getItem(`darkmode`)
        darkmode !== "active" ? enableDarkmode() : disableDarkmode()
    })
    
    // //display greeting
    const first = localStorage.getItem(`firstName`)
    const last =  localStorage.getItem(`lastName`)
    if(first != null && last != null) {
        greeting.innerText = `Welcome : ${first} ${last}`;
        greetBox.style.display = "block";
    } else {
        greetBox.style.display = "none";
    }
