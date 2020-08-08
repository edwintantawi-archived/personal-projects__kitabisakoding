import './component/banner-head.js';
import './jQuery.js';

var pull = $('#pull'); // Variabel tombol navigasi (akan muncul hanya pada perangkat mobile)
var menu = $('header nav ul'); // Variabel menu
$(pull).on('click', function (e) {
  e.preventDefault();
  menu.slideToggle();

});
$(window).resize(function () {
  var w = $(window).width();
  if (w > 600 && menu.is(':hidden')) {
    menu.removeAttr('style');
  }
});