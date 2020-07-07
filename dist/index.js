$(function () {
  $(".hamburger-menu").on("click", function () {
    // Toggle hamburger menu button icon
    $(".toggle").toggleClass("open");
    $(".nav-list").toggleClass("open");
  });
});
