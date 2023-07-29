const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name: 'loginDefault', component: () => import('pages/Login.vue') },
      { path: 'login', name: 'login', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'index-page', component: () => import('pages/IndexPage.vue') },
      { path: 'graph', name: 'graph', component: () => import('components/Dialog.vue') },
      { path: 'plano-estudo', name: 'plano-estudo', component: () => import('pages/ConsumingChatGpt.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
