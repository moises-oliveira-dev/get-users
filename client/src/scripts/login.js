const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
const button = document.querySelector('button');
const show = document.querySelector('input[type="checkbox"]');

button.addEventListener('click', (event) => {
    event.preventDefault();

    const emailValue = email.value; 
    const passwordValue = password.value; 

    if (!emailValue || !passwordValue) {
        alert('Preencha todos os campos.');
        return
    }

    if (emailValue !== sessionStorage.getItem('email') || 
    passwordValue !== sessionStorage.getItem('password'))
    {
        alert('E-mail e/ou senha incorreto.');
        return
    }
    alert('Aceso permitido.');
});

show.addEventListener('change', (event) => {
    if (event.target.checked) {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
});