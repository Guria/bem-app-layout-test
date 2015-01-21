modules.require(['jquery'], function($) {
  $(".demo__toggle-vis a").click(function() {
    $("."+$(this).html()).toggle();
  });
  $(".demo__toggle-mod a").click(function() {
    var val = $(this).html().split(' ');
    $("."+val[0]).toggleClass(val[1]);
  });
});