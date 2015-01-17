document.querySelector( '.app-header__search' ).onclick = function() {
  classie.toggle(document.querySelector( '.app-header' ), 'app-header_search-active');
};