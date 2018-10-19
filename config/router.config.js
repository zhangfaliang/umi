module.exports = [

  {
    path: '/order',
    component: '../layouts/backLayout',
    routes: [
    
      {
        path: '/order',
        redirect: '/order/index',
      },
      {
        path: 'index',
        component: './order/index',
      },
      {
        path: 'detail/:orderid?',
        component: './order/detail',
      },
    ],
  },

  {
    path: '/',
    component: '../layouts/cleanLayout',
    routes: [
      {
        path: '/',
        redirect: '/game',
      },
      {
        path: '/testBet',
        component: './testBetButton',
      },
      {
        path: '/game',
        component: './game',
      },
    ],
  },
 
  {
    component: './404',
  },
];
