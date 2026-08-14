const email = document.querySelector('input[type="email"]');
const show = document.querySelector('input[type="checkbox"]');
const newPassword = document.querySelector('#new-password');
const labelPassword = document.querySelector('#labelPassword')
const confirmNewPassword = document.querySelector('#confirm-new-password');
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    event.preventDefault();

    const emailValue = email.value;
    const newPasswordValue = newPassword.value;
    const confirmNewPasswordValue = confirmNewPassword.value;

    if (
        !emailValue ||
        !newPasswordValue ||
        !confirmNewPassword
    ) return alert ('Preencha todos os campos.');
    
    
    if (emailValue !== sessionStorage.getItem('email'))
        return alert ('Email não registrado.');

    if (newPasswordValue !== confirmNewPasswordValue)
        return alert ('As senhas não coincidem. Tente novamente.');
    sessionStorage.setItem('password', newPasswordValue);

    alert ('Senha recuperada com sucesso');

    window.location.href = './login.html';
});

show.addEventListener('change', (event) => {
    if (event.target.checked) {
        newPassword.type = 'text';
        confirmNewPassword.type = 'text';
        labelPassword.textContent = 'Ocultar senha';
        return
    } else {
        newPassword.type = 'password';
        confirmNewPassword.type = 'password'
        labelPassword.textContent = 'Mostrar Senha'
    }
});