'use strict';

/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up');
const signIn = document.getElementById('sign-in');
const loginIn = document.getElementById('login-in');
const loginUp = document.getElementById('login-up');

signUp.addEventListener('click', () => {
	loginIn.classList.add('none');
	loginIn.classList.remove('block');
	loginUp.classList.add('block');
	loginUp.classList.remove('none');
});

signIn.addEventListener('click', () => {
	loginIn.classList.add('block');
	loginIn.classList.remove('none');
	loginUp.classList.add('none');
	loginUp.classList.remove('block');
});
