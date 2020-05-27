const email_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//Login-form validation
let loginForm = document.querySelector("#login-form");
let loginFields = loginForm.querySelectorAll(".login-field");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  removeValidation(loginForm);
  checkFieldsPresence(loginFields);

});

//Subscribe-form validation
let subscribeForm = document.querySelector("#subscribe-form");
let emailField = subscribeForm.querySelector(".email-field");

subscribeForm.addEventListener("submit", function (e) {
  e.preventDefault();

  removeValidation(subscribeForm);

  if (emailField.value == "") {

    let error = generateError("The field cannot be blank");
    insertError(error, emailField);
    removeError(error, emailField);

  } else if (!email_reg.test(emailField.value)) {

    let error = generateError("Not a valid email");
    insertError(error, subscribeForm);
    removeError(error, emailField);

  }
  
});

//Search-form validation
let searchForm = document.querySelector("#search-form");
let searchFields = searchForm.querySelectorAll(".search-field");

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  
  removeValidation(searchForm);
  checkFieldsPresence(searchFields);

});

//Register-form validation
let registerForm = document.querySelector("#register-form");
let registerFields = registerForm.querySelectorAll(".register-field");
console.log(searchFields);
let password = registerForm.querySelector(".password");
let passwordConfirmation = registerForm.querySelector(".password-confirmation");
let registerEmail = registerForm.querySelector(".email-field");

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

    removeValidation(registerForm);
    checkFieldsPresence(registerFields);

    if (password.value !== passwordConfirmation.value) {
      let error = generateError("Passwords doesn't match");
      insertError(error, passwordConfirmation);
      removeError(error, passwordConfirmation);
    }

    if (!email_reg.test(registerEmail.value) && registerEmail.value !== "") {
      let error = generateError("Not a valid email");
      insertError(error, registerEmail);
      removeError(error, registerEmail);
    }
  });


//FUNCTIONS

function generateError(text) {
  let error = document.createElement("div");
  error.className = "error";
  error.innerHTML = text;
  error.style.color = "red";
  return error;
};

function checkFieldsPresence(formField) {
  for (let i = 0; i < formField.length; i++) {
    if (!formField[i].value || formField[i].value === "Select One") {
      let error = generateError("The field cannot be blank");
      insertError(error, formField[i]);
      removeError(error, formField[i]);
    }
  }
}

function removeValidation(formField) {
  let errors = formField.querySelectorAll(".error");
  for (let i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
}

function insertError(errorElement, formField) {
  formField.parentElement.insertBefore(errorElement, formField.nextSibling);
  formField.style.border = "1.5px solid red";
}


function removeError(errorElement, formField) {
  setTimeout(() => {
    errorElement.remove();
    formField.style.border = "";
    if (formField.tagName === "INPUT") {
      formField.value = "";
    }
  }, 2000);
};