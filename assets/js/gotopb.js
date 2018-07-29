///++++++++++++++++++++++++++++++++++++++++++++++++++++++ top arrow
// $(document).ready(function(){
  var $window = $(window);
  var $slideAd = $('#go-top');
  var endZone = $('.cnt-main-section').offset().top - $window.height() - 500;
  $window.on('scroll', function() {
    if (endZone < $window.scrollTop()) {
      $slideAd.animate({
        'right': '10px'
      }, 250);
    } else {
      $slideAd.stop(true).animate({
        'right': '-95px'
      }, 250);
    }

  });
  //smooth scrolling
  var $slideLink = $('#go-top a');
  // console.log($slideLink);
  $slideLink.click(function(e) {
    e.preventDefault();
    // console.log($('body,html'));
    $('body,html').animate({scrollTop: $('#navmenu').offset().top }, 1000);


  });
// });
  // -------------------------------------------------------- top arrow
