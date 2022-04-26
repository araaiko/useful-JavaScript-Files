jQuery(document).ready(function ($) {

    const formValCheck = $('#snow-monkey-form-351 input');
    const submitBtn = $('.smf-button-control__control');
    const inputName = $('#snow-monkey-form-351 .js-my-input-name input[type="text"]');
    const inputPostcode = $('#snow-monkey-form-351 .js-my-input-postcode input[type="text"]');
    const inputAddress = $('#snow-monkey-form-351 .js-my-input-address input[type="text"]');
    const inputTel = $('#snow-monkey-form-351 input[type="tel"]');
    const inputEmail = $('#snow-monkey-form-351 input[type="email"]');

    submitBtn.attr('disabled', true);

    formValCheck.on('change', function () {
        if (
            inputName.val() !== "" &&
            inputPostcode.val() !== "" &&
            inputAddress.val() !== "" &&
            inputTel.val() !== "" &&
            inputEmail.val() !== ""
      ) {
        submitBtn.prop('disabled', false);  
      } else {
        submitBtn.prop('disabled', true);
      }
    });
  
});