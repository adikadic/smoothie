function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



(function($) {

  var $totalPrice = 0;
  var $waveHeight = 70;
  var $counter = 0;


  // Menu filer
  $("#menu-flters li a").click(function() {
    $("#menu-flters li a").removeClass('active');
    $(this).addClass('active');

    var selectedFilter = $(this).data("filter");
    //  $("#menu-wrapper").fadeTo(100, 0);

    $(".menu-restaurant").fadeOut();

    setTimeout(function() {
      $(selectedFilter).slideDown();
      //$("#menu-wrapper").fadeTo(300, 1);
    }, 300);
  });

  // on single ingredient click handle price calculation
  $(".menu-restaurant").on("click", function() {
    var $clickedItem = $(this);
    var $clickedTitle = $(this).find(".menu-title");
    var $clickedSubtitle = $(this).find('.menu-subtitle');
    var $clickedPrice = $(this).find('.menu-price');

    // use content on click and add to append
    var $clickedTitleContent = $clickedTitle.text();
    var $clickedSubtitleContent = $clickedSubtitle.text();

    var $clickedPrice = parseFloat($clickedPrice.text().replace("$", ""));

    var $hasClass = $clickedItem.hasClass("clicked");


    if ($counter >= 0 && $counter <= 8) {

      if ($hasClass) {
        $clickedItem.removeClass("clicked");

        // add values
        $counter--;

        // get the price and update global variable
        $totalPrice -= $clickedPrice;
        // set and animate
        $('#smoothie-result-price > .price').html($totalPrice);
        $waveHeight -= 40;
        // animate glass

        $('#water').css({
          'backgroundPosition': "top-left",
          height: $waveHeight + 'px'
        })

      } else {
        $clickedItem.addClass("clicked");
        // add values
        $counter++;

        // get the price and update global variable
        $totalPrice += $clickedPrice;
        // set and animate
        $('#smoothie-result-price > .price').html($totalPrice);
        $waveHeight += 40;
        // animate glass

        $('#water').css({
          'backgroundPosition': "top-left",
          height: $waveHeight + 'px'
        })
      }



    }

    $('#smoothie-result-price > .price').html($totalPrice);
    $('#water').css({
      'backgroundPosition': "top-left",
      height: $waveHeight + 'px'
    })

  });


  // Add smooth scrolling to all links in navbar + footer link
  $(".sidenav a").on('click', function(event) {
    var hash = this.hash;
    if (hash) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {
        window.location.hash = hash;
      });
    }

  });

  $(".sidenav a").on('click', function() {
    closeNav();
  });

})(jQuery);