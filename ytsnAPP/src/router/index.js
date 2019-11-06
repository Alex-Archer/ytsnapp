import Vue from 'vue'
import Router from 'vue-router'
import index from '@/andmin/index.vue'
import andmin from '@/andmin/andmin.vue'
import reg from '@/components/reg.vue'
import yemian from '@/components/yemian.vue'
import tiwen from '@/components/tiwen.vue'
import huida from '@/components/huida.vue'
import wenzhang from '@/components/wenzhang.vue'
import login from '@/components/login.vue'
import Home from '@/views/Home'
import user from '@/views/user'
import ditor from '@/views/ditor'
import psp from '@/views/psp'
import wen from '@/views/wen'
import youji from '@/views/youji'
import gonglve from '@/views/gonglve'
import tuijian from '@/views/tuijian'
import msg from '@/views/msg'
import article from '@/views/article'
import jieban from '@/views/jieban'
import friend from '@/views/friend'
import faqi from '@/views/faqi'
import baoming from '@/views/baoming'
import tcomment from '@/views/tcomment'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/andmin',
      name: 'andmin',
      component: andmin
    },
    {
      path: '/andminindex',
      name: 'index',
      component: index
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/ditor',
      name: 'ditor',
      component: ditor
    },
    {
      path: '/psp',
      name: 'psp',
      component: psp
    },
    {
      path: '/wen',
      name: 'wen',
      component: wen
    },
    {
      path: '/youji',
      name: 'youji',
      component: youji
    },
    {
      path: '/gonglve',
      name: 'gonglve',
      component: gonglve
    },
    { path: "/login", name: "login", component: login },
    { path: "/wenzhang", name: "wenzhang", component: wenzhang },
    { path: "/tiwen", name: "tiwen", component: tiwen },
    { path: "/yemian", name: "yemian", component: yemian },
    { path: "/reg", name: "reg", component: reg },
    { path: "/huida", name: "huida", component: huida },
    { path: "/tuijian", name: "tuijian", component: tuijian },
    { path: "/msg", name: "msg", component: msg },
    { path: "/article", name: "article", component: article },
    { path: "/jieban", name: "jieban", component: jieban },
    { path: "/friend", name: "friend", component: friend },
    { path: "/faqi", name: "faqi", component: faqi },
    { path: "/baoming", name: "baoming", component: baoming },
    { path: "/tcomment", name: "tcomment", component: tcomment}
  ]
})
