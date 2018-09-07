jQuery.noConflict();
jQuery(document).ready(function($) {
$('.model_link').click(function() {
$('.mask').fadeIn(300);
$('.model').delay(10).animate({
top: ($(window).height() - $('.model').outerHeight()) / 2
}, 400);
});

$('.mask, .close').click(function() {
$('.model').animate({
top: -($('.model').outerHeight()) - 50
});
$('.mask').fadeOut(200);
});

$('.rai, .close').click(function() {

$('.show-msg').css('display', 'block');

$('.model').animate({
top: -($('.model').outerHeight()) - 50
});
$('.mask').fadeOut(200);

$('.show-msg').animate({
right: ($('.show-msg').outerWidth()) - 50
});
hideDiv();
});

$('.close-btn').click(function() {
$('.model').animate({
top: -($('.model').outerHeight()) - 50
});
$('.mask').fadeOut(200);
});



$(window).resize(function() {
$('.model').css({
left: ($(window).width() - $('.model').outerWidth()) / 2
});
});
$(window).resize();

function hideDiv() {
setTimeout(function() {
$(".show-msg").hide();
}, 3000);
}
});
