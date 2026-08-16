const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
const show = document.querySelector('input[type="checkbox"]');
const labelPassword = document.querySelector('#labelPassword')
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    event.preventDefault();

    const emailValue = email.value; 
    const passwordValue = password.value; 

    if (!emailValue || !passwordValue) {
        alert('Preencha todos os campos.');
        return
    }

    sessionStorage.setItem('email', emailValue);
    sessionStorage.setItem('password', passwordValue);

    alert('Usuário registrado com sucesso.');

    window.location.href = './login.html';
});

show.addEventListener('change', (event) => {
    if (event.target.checked) {
        password.type = 'text';
        labelPassword.textContent = 'Ocultar';
        return
    } else {
        password.type = 'password';
        labelPassword.textContent = 'Mostrar'
    }
});
/*
show.addEventListener('change', () => {
    const attributeValue = password.getAttribute('type');

    if (attributeValue === 'password') {
        password.setAttribute('type', 'text');
        labelPassword.textContent = 'Ocultar senha';
        return
    }

    password.setAttribute('type', 'password');
    labelPassword.textContent = 'Mostrar Senha'
});
*/