"use strict";

$(document).ready(function () {
  $('.menu-burger__header').click(function () {
    $('.menu-burger__header,.header_menu,.header_menu-1').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
$('.header_menu').click(function () {
  $('.menu-burger__header,.header_menu,.header_menu-1').removeClass('active');
  $('body').toggleClass('lock');
  $('body').removeClass('lock');
});
$(document).ready(function () {
  $('#input').hideseek();
});