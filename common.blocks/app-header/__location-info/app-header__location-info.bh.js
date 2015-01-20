module.exports = function(bh) {
  bh.match('app-header__location-title', function(ctx, json) {
    ctx.tag('h1');
  });
  bh.match(['app-header__location-path', 'app-header__location-meta'], function(ctx, json) {
    ctx.tag('span');
  });
};