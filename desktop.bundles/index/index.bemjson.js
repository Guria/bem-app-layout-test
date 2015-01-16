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
            elem: 'logo'
          },
          {
            elem: 'location-info',
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
          },
          {
            elem: 'search',
            scope: [ 'equipment', 'science' ]
          },
          {
            elem: 'actions',
            actions: [ 'menu-button' ]
          }
        ]
      }
    },
    {
      elem: 'menu',
      content: {
        block: 'menu'
      }
    },
    {
      elem: 'page-nav'
    },
    {
      block: 'vesna'
    },
  ]
});
