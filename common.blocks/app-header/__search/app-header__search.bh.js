module.exports = function(bh) {
  bh.match('app-header__search', function(ctx, json) {
    ctx.content([
      {
        elem: 'search-button',
        content: 'search-button'
      },
      {
        elem: 'search-field',
        content: [
          {
            elem: 'search-icon',
            content: 'search-icon'
          },
          {
            elem: 'search-tags',
            content: 'search-tags'
          },
          {
            elem: 'search-input',
            content: 'search-input'
          },
          {
            elem: 'search-close',
            content: 'search-close'
          },
        ]
      }
    ]);
  });
};