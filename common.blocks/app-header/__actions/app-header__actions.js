[].slice.call(document.querySelectorAll( '.app-header__actions' )).forEach(function(el){
  el.onclick = function() {
    [].slice.call(document.querySelectorAll( '.kg-app' )).forEach(function(el){
      classie.toggle(el, 'kg-app_menu-active');
    })
  };
});