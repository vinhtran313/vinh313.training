$('.mess-btn').click(function(){
    $('div ul .mess-show').toggleClass("show");
    $('div ul .first').toggleClass("rotate");
});
$('.interact-btn').click(function(){
    $('div ul .ỉnteract-show').toggleClass("show1");
    $('div ul .second').toggleClass("rotate");
});
$('div ul li').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});
$(document).ready(function () {
    $('#.btn').on('click', function () {
        $(this).toggleClass('click');
    });
});
