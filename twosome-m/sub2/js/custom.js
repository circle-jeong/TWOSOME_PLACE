/* $( function () {
  var $bar = $('.navi');
  var $gnb = $('.gnb');
  var $close = $('.x > a');

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

} ); */

$( document ).ready( function () {


  /* 햄버거 아이콘 클릭 이벤트 */

  $('.navi').click( function (e) {
    e.preventDefault();
    $('.gnb').addClass('on');
  } );
  $('.x > a').click( function (e) {
    e.preventDefault();
    $('.gnb').removeClass('on');
    setTimeout( function () {
      $('.sub').slideUp();
      $('.gnbb>li>a>i').removeClass('fa-minus').addClass('fa-plus');
    },300)
  } );



  /* 메뉴 클릭 이벤트 */

  $('.gnbb>li>a').click(function () {

    var check = $(this).hasClass('on');
    var minus = 'fa-minus'
    var plus = 'fa-plus'
    var menu = $('.gnbb>li>a')
    var sub = $('.gnbb>li>ul')

    if(check){
      $(this).removeClass('on');
      $(this).siblings('ul').stop().slideUp(300);
      $(this).find('i').removeClass(minus).addClass(plus);
   } else {
      menu.removeClass('on');
      menu.find('i').removeClass(minus).addClass(plus)
      sub.stop().slideUp(300);
      $(this).addClass('on');
      $(this).siblings('ul').stop().slideDown(300);
      $(this).find('i').removeClass(plus).addClass(minus);
   }
  } );
  AOS.init();
} );


