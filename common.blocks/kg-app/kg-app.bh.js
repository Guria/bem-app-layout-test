module.exports = function(bh) {
  bh.match('kg-app', function(ctx, json){
    var content = [
      null,
      {
        elem: 'content-row',
        content: [
          {
            elem: 'content',
            content: []
          }
        ]
      },
      null // in case we would like to have bottombar
    ];
    // place 'topbar' element first and all others into 'content-wrap'
    // other items placed into 'content'
    [].concat(ctx.json().content).forEach(function(elem){
      if(!ctx.isSimple(elem) && ('elem' in elem)) {
        if(elem.elem == 'topbar') {
          content[0] = elem;
        } else {
          content[1].content.push(elem);
        }
      } else {
        content[1].content[0].content.push(elem);
      }
    });
    ctx.content(content, true);
    return { // wrap with 'page' block
      block: 'page',
      title: json.title,
      styles: [
        { elem: 'css', url: '_index.css' },
        '<!--[if IE]>',
          { elem: 'css', url: '_index.ie.css' },
        '<![endif]-->'
      ],
      scripts: [
        { elem: 'js', url: '_index.js' },
        //{ elem: 'js', url: '//cdnjs.cloudflare.com/ajax/libs/gsap/1.15.0/TweenMax.min.js' }
      ],
      content: ctx.json()
    };
  });
  bh.match('page__head', function(ctx) {
    ctx.json()['x-ua-compatible'] = 'IE=10';
  });
  bh.match('kg-app__topbar', function(ctx) {
    ctx.tag('header');
  });
  bh.match('kg-app__page-nav', function(ctx) {
    ctx.tag('nav');
  });
  bh.match('kg-app__menu', function(ctx) {
    ctx.tag('nav');
  });
  bh.match('kg-app__content', function(ctx) {
    ctx.tag('main');
  });
};
