document.querySelector( '.app-header__search-button' ).onclick = function() {
  classie.add(document.querySelector( '.app-header' ), 'app-header_search-active');
  //document.querySelector( '.app-header__search-input' ).focus();
};
document.querySelector( '.app-header__search-close' ).onclick = function() {
  classie.remove(document.querySelector( '.app-header' ), 'app-header_search-active');
};
document.querySelector( '.app-header__search-field' ).addEventListener("transitionend", function(){
  document.querySelector( '.app-header__search-input' ).focus();
}, false);
