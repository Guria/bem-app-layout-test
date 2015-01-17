({
  block: 'kg-app',
  title: 'Demo KG base web app',
  content: [
    {
      elem: 'topbar',
      content: {
        block: 'app-header',
        content: [
          {
            elem: 'logo',
            content: 'logo'
          },
          {
            elem: 'location-info',
            content: 'location-info',
/*
            location: {
              title: 'Science equipment for ISS',
              path: [
                {
                  name: 'References',
                  url: '#'
                },
                {
                  name: 'Equipment references',
                  url: '#'
                },
                {
                  name: 'Science equipment reference',
                  url: '#'
                },
              ],
              meta: {
                date: '5 march 2015'
              },
              bookmarked: true
            }
*/
          },
          {
            elem: 'search',
            scope: [ 'equipment', 'science' ]
          },
          {
            elem: 'actions',
            content: 'actions',
            actions: [ 'menu-button' ]
          }
        ]
      }
    },
    'content',
    {
      elem: 'menu',
      content: {
        block: 'menu',
        content: 'menu'
      }
    },
    {
      elem: 'page-nav',
      content: 'page-nav'
    },
    {
      block: 'vesna'
    },
  ]
});
