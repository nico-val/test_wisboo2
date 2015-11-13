$('.description-block').hide();
$('footer').hide();
$('header').addClass('header-centered')
    .delay(1000).queue(function (next) {
        $(this).addClass('header-centered-2').dequeue();
    })

    .delay(1000).queue(function (next) {
        $(this).removeClass('header-centered-2').removeClass('header-centered');
        $('.description-block').show().addClass('animated').addClass('fadeIn');
        $('footer').show().addClass('animated').addClass('fadeIn');
    });