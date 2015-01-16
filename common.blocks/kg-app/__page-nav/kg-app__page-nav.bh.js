module.exports = function(bh) {
  bh.match('kg-app__page-nav', function(ctx, json) {
    return {
      elem: 'page-nav-wrap',
      content: ctx.json()
    };
  });
};