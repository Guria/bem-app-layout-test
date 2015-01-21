module.exports = function(bh) {
  bh.match('demo', function(ctx, json){
    var vis_toggles = [
      'app-header__logo',
      'app-header__location-title',
      'app-header__location-path',
      'app-header__location-meta',
      'app-header__bookmark',
      'app-header__search',
      'app-header__actions',
      'kg-app__topbar',
      'kg-app__page-nav'
    ];
    var mod_toggles = [
      'app-header app-header_mini',
      'kg-app__content-wrap kg-app__content-wrap_full-width'
    ];
    var content = [
      {
        tag: 'ul',
        elem: 'toggle-vis',
        content: ['toggle element']
      },
      {
        tag: 'ul',
        elem: 'toggle-mod',
        content: ['toggle modificator']
      },
    ];
    vis_toggles.forEach(function(toggle){
      content[0].content.push({
        tag: 'li',
        content: {
          tag: 'a',
          attrs: { href: '#'},
          content: toggle
        }
      });
    });
    mod_toggles.forEach(function(toggle){
      content[1].content.push({
        tag: 'li',
        content: {
          tag: 'a',
          attrs: { href: '#'},
          content: toggle
        }
      });
    });
    ctx.content(content);
  });
};