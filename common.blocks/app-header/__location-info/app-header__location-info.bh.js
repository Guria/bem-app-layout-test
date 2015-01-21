module.exports = function(bh) {
  bh.match('app-header__location-title', function(ctx, json) {
    ctx
      .tag('h1')
      .content(ctx.tParam('location').title);
  });
  bh.match(['app-header__location-path'], function(ctx, json) {
    ctx
      .tag('span')
      .content(ctx.tParam('location').path[1].name);
  });
  bh.match(['app-header__location-meta'], function(ctx, json) {
    ctx
      .tag('span')
      .content(ctx.tParam('location').meta.date);
  });
};