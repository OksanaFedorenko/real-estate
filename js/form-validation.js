$(document).ready(function () {

  $("#form-login").submit(function (e) {
    e.preventDefault();

    $(".form__input input").removeClass("error");
    $(".form__input p").removeClass("form__error--show");

    // RegExp
    //const IS_EMAIL = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    const NAME = $('input[name="name"]').val();
    const PASSWORD = $('input[name="name"]').val();
    //const PHONE = $('input[name="phone"]').val();
    //const MESSAGE = $('textarea[name="message"]').val();

    validateFields = () => {
      let validateName = true;
      let validatePassword = true;
      
      if (NAME.length < 3) {
        $('input[name="name"]').addClass("error");
        $('input[name="name"]').next().addClass("form__error--show");
        validateName = false;
      }
      
      //PASSWORD VALIDATION
      //validate letter
     /* if ( pswd.match(/[A-z]/) ) {
          $('#letter').removeClass('invalid').addClass('valid');
      } else {
          $('#letter').removeClass('valid').addClass('invalid');
      }
      
      //validate capital letter
      if ( pswd.match(/[A-Z]/) ) {
          $('#capital').removeClass('invalid').addClass('valid');
      } else {
          $('#capital').removeClass('valid').addClass('invalid');
      }
      
      //validate number
      if ( pswd.match(/\d/) ) {
          $('#number').removeClass('invalid').addClass('valid');
      } else {
          $('#number').removeClass('valid').addClass('invalid');
      }

      if (validateName && validatePassword) {
        return true;
      } else {
        return false;
      }

    };*/

    if (validateFields()) {
      const data = {
        name: NAME.trim(),
        email: EMAIL
      };
      let form = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php",
        // data: form.serialize(),
        data: data,
        success: function () {
          console.log("submit form ==>", data);
          $("#modal").addClass("modal--show");
          $("body").addClass("hidden");
          setTimeout(function () {
            form.trigger("reset");
          }, 1000);
        },
        error: function () {
          console.log("ajax form error");
        },
      });
    } else {
      console.log("validation form error");
    }
  });


  
console.log("hellooooooooo");
});
