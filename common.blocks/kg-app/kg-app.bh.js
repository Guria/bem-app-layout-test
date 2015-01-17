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
        { elem: 'css', url: 'index.css' },
        '<!--[if IE]>',
          { elem: 'css', url: 'index.ie.css' },
        '<![endif]-->'
      ],
      scripts: [
        { elem: 'js', url: 'index.js' },
        //{ elem: 'js', url: '//cdnjs.cloudflare.com/ajax/libs/gsap/1.15.0/TweenMax.min.js' }
      ],
      content: ctx.json()
    };
  });
  bh.match('page__head', function(ctx) {
    ctx.json()['x-ua-compatible'] = 'IE=10';
  });
};
