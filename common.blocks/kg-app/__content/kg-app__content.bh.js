module.exports = function(bh) {
  bh.match('kg-app__content', function(ctx, json) {
    return {
      elem: 'content-wrap',
      content: ctx.json()
    };
  });
};
