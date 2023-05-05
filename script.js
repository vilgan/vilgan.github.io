const loginForm = document.querySelector('.login-form');
const sendEmailForm = document.querySelector('.send-email-form');
const loginPage = document.querySelector('.login-page');
const sendEmailPage = document.querySelector('.send-email-page');

loginForm.addEventListener('submit', () => {
  loginPage.classList.add('hidden');
  sendEmailPage.classList.remove('hidden');
});

sendEmailForm.addEventListener('submit', () => {
  alert('Email sent!');
});
