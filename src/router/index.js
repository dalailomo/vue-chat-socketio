import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/pages/home-page'
import ChatPage from '@/components/pages/chat-page'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/chat/:idUser',
      name: 'chat',
      component: ChatPage,
    },
  ],
})
