const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const loading = document.getElementById('loading');

registerBtn.addEventListener('click', () => container.classList.add('active'));
loginBtn.addEventListener('click', () => container.classList.remove('active'));

const registerForm = document.querySelector('.form-box.register form');
const loginForm = document.querySelector('.form-box.login form');

const showLoadingAndRedirect = (redirectPage = "home.html") => {
    loading.style.display = 'flex';
    setTimeout(() => {
        window.location.href = redirectPage;
    }, 2000);
};

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = registerForm.querySelector('input:nth-of-type(1)').value;
    const email = registerForm.querySelector('input:nth-of-type(2)').value;

    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('isLoggedIn', 'true');

    showLoadingAndRedirect("home.html");
});


loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('input:nth-of-type(1)').value;
    const username = email.split('@')[0]; 

    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('isLoggedIn', 'true'); 

    showLoadingAndRedirect("home.html");
});