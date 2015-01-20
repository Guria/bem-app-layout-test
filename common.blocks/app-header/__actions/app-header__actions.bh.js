module.exports = function(bh) {
  bh.match('app-header__actions', function(ctx, json) {
    ctx
      .tag('a')
      .attrs({ href: '#'})
      .content([
        {
          tag: 'i',
          cls: 'fa fa-2x fa-bars'
        },
        {
          tag: 'span',
          content: 'Menu'
        }
      ]);
  });
};