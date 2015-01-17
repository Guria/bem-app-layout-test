var header = document.querySelector('.app-header');
document.querySelector('.kg-app__content').addEventListener('scroll',function(){
  if(this.scrollTop) {
    classie.add(header, 'app-header_mini');
  } else {
    classie.remove(header, 'app-header_mini');
  }
});