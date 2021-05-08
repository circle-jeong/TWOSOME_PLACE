$ ( function () {
  var $bar = $('.navi');
  var $gnb = $('.gnb');
  var $close = $('.x > a')

  $gnb.css('top', '-100%')

  $bar.click( function ( e ) {
    e.preventDefault();
    $gnb.stop().animate({
      top: 0,
      display: 'block',
      opacity: '1'
    }, 600);
  } );
  $close.click( function ( e ) {
    e.preventDefault();
    $gnb.stop().animate({
      top: '-100%',
      display: 'none',
      opacity: '0'
    }, 600);
  } );

  var nav = $('header');
  var logo = $('#logo');
  var navi = $('.navi')

  $(window).scroll( function () {
    if( $(this).scrollTop() > 136 ){
      nav.addClass('hdfixed');
      nav.css('backgroundColor', '#f0e9e3f8');
      logo.addClass('ls');
      navi.addClass('bar');

    } else {
      nav.removeClass('hdfixed');
      nav.css('backgroundColor', 'transparent');
      logo.removeClass('ls');
    }
  } );
} );
