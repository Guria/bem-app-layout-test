module.exports = function(bh) {
  bh.match('app-header', function(ctx, json) {
    var content = [
      null,
      {
        elem: 'spacer',
        content: []
      },
      null
    ];
    // position 'logo' and 'actions' elems
    // all other items placed in flex 'spacer'
    [].concat(ctx.json().content).forEach(function(elem){
      if(!ctx.isSimple(elem) && ('elem' in elem)) {
        if(elem.elem == 'logo') {
          content[0] = elem;
        } else if (elem.elem == 'actions') {
          content[2] = elem;
        } else {
          content[1].content.push(elem);
        }
      } else {
        content[1].content.push(elem);
      }
    });
    ctx.content(content, true);
  });
};