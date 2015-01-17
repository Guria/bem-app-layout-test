module.exports = function(bh) {
  bh.match('app-header__search', function(ctx, json) {
    ctx.content([
      {
        elem: 'search-button'
      },
      {
        elem: 'search-field'
      }
    ]);
  });
};