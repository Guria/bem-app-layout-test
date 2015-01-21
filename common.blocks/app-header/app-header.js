var headerScrollTop = 0;
[].slice.call( document.querySelectorAll('.kg-app__content')).forEach(function(el){
  el.addEventListener('scroll',function(){
    var header = [].slice.call( document.querySelectorAll('.app-header'));
    var delta = this.scrollTop - headerScrollTop;
    if(delta > 110) {
      header.forEach(function(el){classie.add(el, 'app-header_mini')});
      headerScrollTop = this.scrollTop;
    } else if (delta < -90) {
      header.forEach(function(el){classie.remove(el, 'app-header_mini')});
      headerScrollTop = this.scrollTop;
    }
  });
});
