$(function () {
  $(document).scroll(function () {
    var $nav = $(".grow");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});