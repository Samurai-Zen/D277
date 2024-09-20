document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('ContactForm');
    const confirmEmail = document.getElementById('confirmEmail');

    function checkEmailMatch() {
        
        if (email.value !== confirmEmail.value) {
            confirmEmail.setCustomValidity('Email addresses must match.');

            
            confirmEmail.style.borderColor = 'red';

            
            alert('Please enter matching email addresses.');
        } else {
            confirmEmail.setCustomValidity('');

            
            confirmEmail.style.borderColor = 'green';

            
            alert('Email addresses match.');


        }
    }

    form.addEventListener('submit', checkEmailMatch);
});