//Login-form validation

let loginForm = document.querySelector("#login-form");
let loginFields = loginForm.querySelectorAll(".login-field");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let errors = loginForm.querySelectorAll(".error");

  for (let i = 0; i < errors.length; i++) {
    errors[i].remove();
  };

  for (let i = 0; i < loginFields.length; i++) {

    if (!loginFields[i].value) {
        let error = setStylesToError(generateError("The field cannot be blank"), loginFields[i]);
        removeError(error, loginFields[i]);
    }   
  }

});

//Subscribe-form validation

let subscribeForm = document.querySelector("#subscribe-form");
let email = subscribeForm.querySelector(".email-field");

subscribeForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.value == "") {
    let error = setStylesToError(generateError("The field cannot be blank"), email);
    removeError(error, email);
  } else if (!email_reg.test(email.value)) {
    let error = setStylesToError(generateError("Not a valid email"), email);
    removeError(error, email);
  }
  
});

//Search-form validation

let searchForm = document.querySelector("#search-form");
let searchFields = searchForm.querySelectorAll(".search-field");
console.log(searchFields);

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  
  let warnings = searchForm.querySelectorAll(".warning");

  for (let i = 0; i < warnings.length; i++) {
    warnings[i].remove();
  }

    for (let i = 0; i < searchFields.length; i++) {
      if (!searchFields[i].value || searchFields[i].value === "Select One") {
        let error = generateErrorWarning("The field cannot be blank");
        searchFields[i].parentElement.insertBefore(
          error,
          searchFields[i].nextSibling
        );
        searchFields[i].style.border = "1px solid red";
        removeError(error, searchFields[i]);
      }
    }
});


//Register-form validation

let registerForm = document.querySelector("#register-form");
let registerFields = registerForm.querySelectorAll(".register-field");
console.log(searchFields);

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let warnings = registerForm.querySelectorAll(".warning");

  for (let i = 0; i < warnings.length; i++) {
    warnings[i].remove();
  }

  for (let i = 0; i < registerFields.length; i++) {
    if (!registerFields[i].value || registerFields[i].value === "Select One") {
      let error = generateErrorWarning("The field cannot be blank");
      registerFields[i].parentElement.insertBefore(
        error,
        registerFields[i].nextSibling
      );
      registerFields[i].style.border = "1px solid red";
      removeError(error, registerFields[i]);
    }
  }
});




function generateError(text) {
  let error = document.createElement("div");
  error.className = "error";
  error.innerHTML = text;

  return error;
};

function generateErrorWarning(text) {
  let error = document.createElement("div");
  error.className = "warning";
  error.innerHTML = text;
    error.style.color = "red";
  return error;
};

function setStylesToError(errorElement, formField) {

  formField.parentElement.insertBefore(errorElement, formField.nextSibling);
  formField.style.border = "1px solid red";
  let computedStyle = getComputedStyle(errorElement);
  let errorHeight = parseInt(computedStyle.getPropertyValue("height"));
  errorElement.style.bottom = `-${10 + errorHeight}px`;

  return errorElement;
};

function removeError(errorElement, formField) {
  setTimeout(() => {
    errorElement.remove();
    formField.style.border = "";
    //formField.value = "";
  }, 2000);
};

/*function removeErrorWarning(errorElement, formField) {
  setTimeout(() => {
    errorElement.remove();
    formField.value = "";
  }, 2000);
};*/