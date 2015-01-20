var header = document.querySelector('.app-header');
var headerScrollTop = 0;
document.querySelector('.kg-app__content').addEventListener('scroll',function(){
  var delta = this.scrollTop - headerScrollTop;
  if(delta > 110) {
    classie.add(header, 'app-header_mini');
    headerScrollTop = this.scrollTop;
  } else if (delta < -90) {
    classie.remove(header, 'app-header_mini');
      headerScrollTop = this.scrollTop;
  }
});
