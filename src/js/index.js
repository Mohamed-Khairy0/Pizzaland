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

 $(document).ready(function () {
    $('#contact-form').on('submit', function (e) {
      e.preventDefault();

      if (this.checkValidity()) {
        $('#form-message').removeClass('d-none').addClass('d-block').text('تم الإرسال بنجاح!');
        this.reset();

        setTimeout(function () {
          $('#form-message').addClass('d-none').removeClass('d-block');
        }, 4000);
      }
    });
  });

  $(document).ready(function () {
    let count = 0;

    $('.add-to-cart').on('click', function (e) {
      e.preventDefault(); 
      count++;
      $('#cart-count').text(count);
    });
  });





$(document).ready(function () {
 
  $('#theme-toggle').on('click', function () {
    $('body').toggleClass('dark-mode');

    const isDark = $('body').hasClass('dark-mode');
    localStorage.setItem('isDarkMode', isDark);

  
    const icon = $(this).find('i');
    icon.toggleClass('fa-moon fa-sun');
  });

 
  if (localStorage.getItem('isDarkMode') === 'true') {
    $('body').addClass('dark-mode');
    $('#theme-toggle i').removeClass('fa-moon').addClass('fa-sun');
  }
});



$(document).ready(function () {
  const pathname = window.location.pathname.split("/").pop();

  $(".navbar-nav li a").each(function () {
    const href = $(this).attr("href");


    if (href === pathname) {
      $(this).addClass("active");
    }

  
    if (
      (pathname === "margarita.html" || pathname === "veggie.html" || pathname === "chicken.html") &&
      href === "#"
    ) {
      $(this).addClass("active");
    }
  });
});




