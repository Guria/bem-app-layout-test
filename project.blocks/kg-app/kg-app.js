document.querySelector('.kg-app__content-row').onclick = function() {
  classie.remove(document.querySelector('.kg-app'), 'kg-app_menu-active');
  classie.remove(document.querySelector('.app-header'), 'app-header_search-active');
}