[].slice.call( document.querySelectorAll( '.app-header__bookmark' )).forEach(function(el){
  el.onclick = function() {
    classie.toggle(this, 'app-header__bookmark_bookmarked');
  };
});