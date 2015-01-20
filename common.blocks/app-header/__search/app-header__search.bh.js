module.exports = function(bh) {
  bh.match('app-header__search', function(ctx, json) {
    ctx.content([
      {
        elem: 'search-button',
      },
      {
        elem: 'search-field',
        content: [
          {
            elem: 'search-icon',
            cls: 'fa fa-2x fa-search'
          },
          {
            elem: 'search-tags',
            content: 'search-tags'
          },
          {
            elem: 'search-input',
          },
          {
            elem: 'search-close',
          },
        ]
      }
    ]);
  });
  bh.match('app-header__search-button', function(ctx, json) {
    ctx
      .tag('a')
      .attrs({ href: '#'})
      .content([
        {
          tag: 'i',
          cls: 'fa fa-2x fa-search'
        },
        {
          tag: 'span',
          content: 'Search'
        }
      ]);
  });
  bh.match('app-header__search-close', function(ctx, json) {
    ctx
      .tag('a')
      .attrs({ href: '#'})
      .content({
        tag: 'i',
        cls: 'fa fa-2x fa-close',
        attrs: { tabindex: '-1'}
      });
  });
  bh.match('app-header__search-input', function(ctx, json) {
    ctx
      .tag('input')
  });
};