// Toggle hamburger menu button icon
$(function () {
  $(".hamburger-menu").on("click", function () {
    $(".toggle").toggleClass("open");
    $(".nav-list").toggleClass("open");
  });
});
