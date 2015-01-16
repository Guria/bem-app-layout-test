module.exports = function(bh) {
  bh.match('kg-app__menu', function(ctx, json) {
    return {
      elem: 'menu-wrap',
      content: ctx.json()
    };
  });
};