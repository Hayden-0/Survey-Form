//Target Form ID
var form = document.getElementById("survey-form")

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    // Target The Elements
    
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var number = document.getElementById("number")

    var nameValue = document.getElementById("name").value
    var emailValue = document.getElementById("email").value
    var numberValue = document.getElementById("number").value
    
    if(nameValue === '') {
        setErrorFor(name, 'Name Cannot Be Blank')
    }else {
        setSuccessFor(name, 'Successful Input')
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email Required')
    }else {
        setSuccessFor(email, 'Successful Input')
    }

    if(numberValue === '') {
        setErrorFor(number, 'Enter Phone Number')
    }else if(numberValue < 9) {
        setErrorFor(number, 'Invalid Length')
    }else {
        setSuccessFor(number, 'Successful Input')
    }
}

function setErrorFor (input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerHTML = message
    formControl.className = 'form-item error'
}

function setSuccessFor (input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    
    small.innerHTML = message
    formControl.className = 'form-item success'
    
}
// function to force user to use numbers only using a regular expression.
function numberOnly(id) {
    var element = document.getElementById(id);
    element.value = element.value.replace(/[^0-9]/gi, "");
}
