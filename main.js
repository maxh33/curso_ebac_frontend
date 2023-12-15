$(document).ready(function() {

    $('#phone').mask('(00) 00000-0000')
    $('#zipCode').mask('00000-000')

    $('form').validate({
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true
        },
        fullAddress: {
          required: true
        },
        zipCode: {
          required: true,
          zipCode: true
        },
        message: {
          required: false
        }
      },
      messages: {
        name: 'Por favor, insira o seu nome completo',
        email: 'Por favor, insira um email válido',
        phone: 'Por favor, insira um telefone válido',
        fullAddress: 'Por favor, insira um endereço válido',
        zipCode: 'Por favor, insira um CEP válido',
        message: 'Por favor, insira uma mensagem',
      },
      submitHandler: function(form) {
        alert('Formulário enviado com sucesso!')
      },
      invalidHandler: function(event, validator) {
        alert('Por favor, preencha todos os campos corretamente!')
      },
    });

    $('input[type="submit"]').click(function() {
        $('form').submit();
    });
});