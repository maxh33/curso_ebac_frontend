$(document).ready(function()  {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#done-button').click(function(e) {
        e.preventDefault();
        $('#newTask').val('');
        $('form').slideUp();
    });

    $('#reset-button').click(function(e) {
        e.preventDefault();
        $('li').remove();
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const newTask = $('#newTask').val();
        const newItem = $('<li style="display:none"></li>');
        $('<span></span>').text(newTask).appendTo(newItem);  
        $(newItem).appendTo('ul');
        $(newItem).fadeIn(1000);
        $('#newTask').val('') 
        $(newItem).appendTo('ul');
        
    });

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});