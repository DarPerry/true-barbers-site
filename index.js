$(function() {
  $("nav li a").click(function() {
    $(".active").removeClass("active");
    $(this).toggleClass("active");
  });
});
