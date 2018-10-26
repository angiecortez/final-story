import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/authors',
      name: 'authors',
      component: () => import('./views/Authors')
    },
    {
      path: '/author/:authorId',
      name: 'author',
      component: () => import('./views/Author')
    },
    {
      path: '/:articleId',
      name: 'article',
      component: () => import('./views/Article')
    }
  ]
})
