({
    block: 'page',
    title: 'Demo KG base web app',
    styles: [
        { elem: 'css', url: 'index.css' },
        '<!--[if IE]>',
            { elem: 'css', url: 'index.ie.css' },
        '<![endif]-->'
    ],
    scripts: [
        { elem: 'js', url: 'index.js' }
    ],
    content: [
        'Hello, KG!'
    ]
});
