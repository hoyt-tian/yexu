export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      // dashboard
      { path: '/', redirect: '/dashboard/analysis' },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            component: './Dashboard/Analysis',
          },
          {
            path: '/dashboard/monitor',
            name: 'monitor',
            component: './Dashboard/Monitor',
          },
          /*
          {
            path: '/dashboard/workplace',
            name: 'workplace',
            component: './Dashboard/Workplace',
          },
          */
        ],
      },

      {
        path: '/shops',
        icon: 'shop',
        name: 'shops',
        routes: [
          {
            path: 'shops/amazon',
            name: 'amazon',
            component: './Shops/Amazon',
          },
          {
            path: 'shops/ebay',
            name: 'ebay',
            component: './Shops/Ebay',
          },
          {
            path: 'shops/wish',
            name: 'wish',
            component: './Shops/Wish',
          },
        ],
      },

      {
        path: '/products',
        icon: 'dropbox',
        name: 'product',
        routes: [
          {
            path: 'product/search',
            name: 'search',
            component: './Product/index',
          },
          {
            path: 'product/add',
            name: 'add',
            component: './Product/Creator',
          },
        ],
      },

      {
        path: '/orders',
        icon: 'shopping',
        name: 'order',
        routes: [
          {
            path: 'order/sync',
            name: 'sync',
            component: './Order/index',
          },
          {
            path: 'order/search',
            name: 'search',
            component: './Order/search',
          },
        ],
      },
      /*
      {
        path: '/warehouse',
        icon: 'cluster',
        name: 'warehouse',
        routes: [
          {
            path: 'warehouse/index',
            name: 'index',
            component: './Warehouse/index',
          },
        ],
      },
      */
      {
        name: 'account',
        icon: 'user',
        path: '/account',
        routes: [
          /*
          {
            path: '/account/center',
            name: 'center',
            component: './Account/Center/Center',
            routes: [
              {
                path: '/account/center',
                redirect: '/account/center/articles',
              },
              {
                path: '/account/center/articles',
                component: './Account/Center/Articles',
              },
              {
                path: '/account/center/applications',
                component: './Account/Center/Applications',
              },
              {
                path: '/account/center/projects',
                component: './Account/Center/Projects',
              },
            ],
          },
          */
          {
            path: '/account/settings',
            name: 'settings',
            component: './Account/Settings/Info',
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
              },
              {
                path: '/account/settings/base',
                component: './Account/Settings/BaseView',
              },
              {
                path: '/account/settings/security',
                component: './Account/Settings/SecurityView',
              },
              {
                path: '/account/settings/binding',
                component: './Account/Settings/BindingView',
              },
              {
                path: '/account/settings/notification',
                component: './Account/Settings/NotificationView',
              },
            ],
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
