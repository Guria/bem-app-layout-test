module.exports = function(bh) {
  bh.match('app-header', function(ctx, json){
    ctx.content([
      {
        elem: 'logo',
        mix: { block: 'logo' }
      },
      {
        elem: 'location-title',
        content: 'location-title'
      },
      {
        elem: 'location-path',
        content: 'location-path'
      },
      {
        elem: 'location-meta',
        mod: 'date',
        content: 'location-date'
      },
      {
        elem: 'bookmark'
      },
      {
        elem: 'search'
      },
      {
        elem: 'actions'
      }
    ]);
  });
};
