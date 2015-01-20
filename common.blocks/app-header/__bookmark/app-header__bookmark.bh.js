module.exports = function(bh) {
  bh.match('app-header__bookmark', function(ctx, json) {
    ctx
      .tag('a')
      .cls('fa fa-2x fa-star')
      .attrs({ href: '#'});
  });
};