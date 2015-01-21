[].slice.call(document.querySelectorAll('.kg-app__content-row')).forEach(function(el){
  el.onclick = function() {
    [].slice.call(document.querySelectorAll('.kg-app')).forEach(function(el){
      classie.remove(el, 'kg-app_menu-active')
    });
    [].slice.call(document.querySelectorAll('.app-header')).forEach(function(el){
      classie.remove(el, 'app-header_search-active');
    });
  };
});