$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true,
                minlength: 10
            },
            telefone: {
                required: true,
                minlength: 14
            }
        },
    })
})