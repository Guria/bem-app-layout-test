module.exports = function(bh) {
  bh.match('kg-app', function(ctx, json){
    ctx.content([
      {
        elem: 'topbar',
        content: {
          block: 'app-header',
        }
      },
      {
        elem: 'menu',
        content: {
          block: 'menu',
        }
      },
      {
        elem: 'page-nav',
      }
    ].concat(
      ctx.content()
    ), true);
  });
};
