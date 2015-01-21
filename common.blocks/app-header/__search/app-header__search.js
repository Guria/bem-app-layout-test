[].slice.call(document.querySelectorAll( '.app-header__search-button' )).forEach(function(el){
  el.onclick = function() {
    [].slice.call( document.querySelectorAll('.app-header')).forEach(function(el) {
      classie.add(el, 'app-header_search-active');
    });
  };
});

[].slice.call(document.querySelectorAll( '.app-header__search-close' )).forEach(function(el){
  el.onclick = function() {
    [].slice.call( document.querySelectorAll('.app-header')).forEach(function(el) {
      classie.remove(el, 'app-header_search-active');
    });
  };
});

[].slice.call(document.querySelectorAll( '.app-header__search-field' )).forEach(function(el){
  el.addEventListener("transitionend", function(){
    [].slice.call( document.querySelectorAll('.app-header__search-input')).forEach(function(el) {
      el.focus();
    });
  });
}, false);
