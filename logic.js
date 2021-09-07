console.log('Form Validation Using RegEx');

const alertMsgDiv = document.getElementById('alertMsgDiv');

function alertResponse(header,message,val,type) {
    let html = `<div class="alert alert-${type} alert-dismissible fade ${val}" role="alert">
            <strong>${header}</strong> ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    
    alertMsgDiv.innerHTML = html;
}

const email = document.getElementById('email');
let emailValid = false;

email.addEventListener('blur', () => {
    const reg = /^([a-zA-Z0-9'"\.\-_$\+]+)@([a-zA-Z0-9\[\]\-]+)\.([a-zA-Z0-9\[\]{1,12})([a-zA-Z0-9]+)?$/;
    let val = email.value;
    if (!reg.test(val)) {  //returns false
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
        emailValid = false;
    }
    else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        emailValid = true;
    }
})

const password = document.getElementById('password');
let passwordValid = false;

password.addEventListener('blur', () => {
    const reg = /^([a-z0-9A-Z@\.\-_$\s\/\!]){8,24}$/;
    let val = password.value;
    if (!reg.test(val)) {  //returns false
        password.classList.remove('is-valid');
        password.classList.add('is-invalid');
        passwordValid = false;
    }
    else {
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
        passwordValid = true;
    }
})

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', (e) => {
    if (emailValid == true && passwordValid == true) {  //valid response
        e.preventDefault();
        alertResponse('SUCCESS', 'Form Submitted !', 'show', 'success');
        setTimeout(() => {
            alertResponse('#', '#', 'visually-hidden', '#');
        }, 2500);
    } else {
        e.preventDefault();
        alertResponse('ERROR', 'Check Your Form Fields', 'show', 'danger');
        setTimeout(() => {
            alertResponse('#', '#', 'visually-hidden', '#');
        }, 2500);
    }
})