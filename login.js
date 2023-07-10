let signUp = document.querySelector('.sign-up');
let bodyDiv = document.querySelector('body');

signUp.addEventListener('click', (e) => {
  e.preventDefault();
  let signUpForm = document.createElement('form');

  let signUpEmail = document.createElement('input');
  signUpEmail.classList.add('email');
  signUpEmail.setAttribute('placeholder', 'Enter Your Email');
  signUpForm.appendChild(signUpEmail);

  let signUpPassword = document.createElement('input');
  signUpPassword.classList.add('password');
  signUpPassword.setAttribute('type', 'password');
  signUpPassword.setAttribute('placeholder', 'Enter Your Password');
  signUpForm.appendChild(signUpPassword);

  let signUpConfirmPassword = document.createElement('input');
  signUpConfirmPassword.classList.add('confirm-password');
  signUpConfirmPassword.setAttribute('type', 'password');
  if(signUpPassword!==signUpConfirmPassword){
    alert('Password should much')
  }
  signUpConfirmPassword.setAttribute('placeholder', 'Confirm Your Password');
  signUpForm.appendChild(signUpConfirmPassword);

  let signUpButton = document.createElement('button');
  signUpButton.innerText = 'Sign up';
  signUpForm.appendChild(signUpButton);

  bodyDiv.appendChild(signUpForm);

  signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailInput = signUpEmail.value;
    let passwordInput = signUpPassword.value;
    let confirmPasswordInput = signUpConfirmPassword.value;

    if (passwordInput !== confirmPasswordInput) {
      alert('Password and Confirm Password do not match');
      return;
    }

    let userData = { email: emailInput, password: passwordInput };
    storeUserData(userData);

    alert('Sign up successful');
    signUpForm.reset();
  });
});

function storeUserData(userData) {
  let data = JSON.parse(localStorage.getItem('data')) || [];
  data.push(userData);
  localStorage.setItem('data', JSON.stringify(data));
}

let logIn = document.querySelector('.log-in');
logIn.addEventListener('click', (e) => {
  e.preventDefault();
  let logInForm = document.createElement('form');
  let logInEmail = document.createElement('input');
  logInEmail.setAttribute('placeholder', 'Log in your email');

  let logInButton = document.createElement('button');
  logInButton.innerText = 'Log In';

  logInForm.appendChild(logInEmail);
  logInForm.appendChild(logInButton);
  bodyDiv.appendChild(logInForm);

  logInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let loggedInEmail = logInEmail.value;
    let data = JSON.parse(localStorage.getItem('data')) || [];

    let foundUser = data.find((user) => user.email === loggedInEmail);


    if (foundUser) {
      alert('Logged In');
    } else {
      alert('Need to have an account first');
    }
  });
});
