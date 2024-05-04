$(document).ready(function () {
    $('img').hover(function () {
        var img = $(this).attr('src');
        var final = $(this).attr('data-alt-src');
        $(this).attr('src', final);
        var finalImg = img;
        $(this).attr('data-alt-src', finalImg);
    });
});

