import $ from 'jquery';
import "../sass/bootstrap.rtl.css";
import "../sass/style.scss";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/js/all.min';


$(document).ready(function () {
  $(".meal-item .card").hover(
    function () {
      $(this).find(".image-overlay").stop().slideDown(300);
    },
    function () {
      $(this).find(".image-overlay").stop().slideUp(300);
    }
  );
});

$("#current-year").text(new Date().getFullYear());
