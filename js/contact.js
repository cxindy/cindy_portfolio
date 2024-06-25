// Handling email sending
function sendMail() {
    let parms = {
        fname : document.getElementById("fname").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_nayqbjw", "template_cy2s2bp", parms).then(alert("Email sent, thank you!"))
}

// Validating the field in the form, if the fields are empty or null, then disabled the submit button
function fieldValidation() {
    let inputs = document.getElementsByClassName('requiredField');
    let btn = document.querySelector('input[type="submit"]');
    let isValid = true;

    for (var i = 0; i < inputs.length; i++){
        let changedInput = inputs[i];
        if (changedInput.value.trim() === "" || changedInput.value === null) {
            isValid = false;
            break;
        }
    } 
    
    btn.disabled = !isValid;
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("myForm").addEventListener("submit", function(e) {
        e.preventDefault() // Stop page from reload
        sendMail(); // Trigger sendMail function
        document.getElementById("myForm").reset(); // Reset the form afte submission
        document.querySelector('input[type="submit"]').disabled = true; //disable button
    });
});