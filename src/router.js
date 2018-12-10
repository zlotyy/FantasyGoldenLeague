import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `./views/${view}.vue`);
}

const routes = [
  {
    path: '/',
    component: loadView('Master'),
  }, {
    path: '/table',
    component: loadView('Table'),
  }, {
    path: '/myTeam',
    component: loadView('MyTeam'),
  }, {
    path: '/points',
    component: loadView('TeamPoints'),
  }, {
    path: '/transfers',
    component: loadView('Transfers'),
  },
  // children: [
  //   {
  //     path: 'table',
  //     component: loadView('Table'),
  //   },
  //   {
  //     path: 'myTeam',
  //     component: loadView('MyTeam'),
  //   },
  //   {
  //     path: 'points',
  //     component: loadView('TeamPoints'),
  //   },
  //   {
  //     path: 'transfers',
  //     component: loadView('Transfers'),
  //   },
  // ],
];

export default new VueRouter({
  mode: 'history',
  routes,
});
