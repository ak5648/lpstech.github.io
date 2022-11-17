
 $('#solution').owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  navigation: true,
  autoplay: true,
      autoplaySpeed: 1000,
    navText: ["<img src='images/left-arrow.png'>","<img src='images/right-arrow.png'>"],
  responsiveClass: true,
  responsive: {
      0: {
      items: 2
    },
    360: {
      items: 2
    },
     480: {
      items: 4
    },
    768: {
      items: 6
    },
    1000: {
      items: 6
    }
  }
});

  $('#testimonials-owl').owlCarousel({
  loop: true,
  stagePadding: 20,
  margin: 40,
  dots: true,
  navigation: true,
  autoplay: false,
      autoplaySpeed: 1000,
    navText: ["<img src='images/left-arrow.png'>","<img src='images/right-arrow.png'>"],
  responsiveClass: true,
  responsive: {
      0: {
      items: 1
    },
    360: {
      items: 1
    },
     480: {
      items: 1
    },
    991: {
      items: 2
    },
    1000: {
      items: 2
    }
  }
});


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// smooth scrolling start
// var $root = $('html, body');

// $('#myNavbar > ul > li > a').click(function () {
//     $root.animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 500);

//     return false;
// });
// smooth scrolling end

$('a[href*="#"]:not([href="#"])').click(function() {

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);

        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top-80
            }, 1000);
            return false;
        }
    }
});



 /*=============================
        40. Background Marque 
    =============================*/

    $('.background-marque').each(function () {
        var t = 0;
        var i = 1;
        var $this = $(this);
        setInterval(function () {
            t += i;
            $this.css('background-position-x', -t + "px");
        }, 10);
    });

    $('.background-marque2').each(function () {
        var t = 0;
        var i = 1;
        var $this = $(this);
        setInterval(function () {
            t += i;
            $this.css('background-position-x', -t + "px");
        }, 10);
    });


  wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();


/* ===============================  Scroll back to top  =============================== */

$(document).ready(function () {
    "use strict";

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })


});