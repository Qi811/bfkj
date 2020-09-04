import Vue from 'vue'
import Router from 'vue-router'

import headtop from '@/components/header'
import home from '@/components/home'
// import mobiles from '@/components/mobile'

import porject from '@/components/porject'
import join from '@/components/join'
import contact from '@/components/contact'

import suc from '@/components/success'

import aa from '@/components/a'
import bb from '@/components/b'

import test from '@/components/test'

Vue.use(Router)

export default new Router({
  mode:"history",//去除url里面的/#
  routes: [
    {
      path: '/',
      name: 'headtop',
      component: headtop,
      redirect:{
        name:'home'
      },
      children:[
        {
          path: '/home',
          name: 'home',
          component: home,
        },
        {
          path: '/porject',
          name: 'porject',
          component: porject
        },
        {
          path: '/join',
          name: 'join',
          component: join
        },
        {
          path: '/contact',
          name: 'contact',
          component: contact
        }
      ]
    },
    {
      path:'/aa',
      name: 'aa',
      component: aa,
      meta:{ keppAlive:true },
      children:[
        {
          path:'/bb/:id',
          name: 'bb',
          component: bb,
          meta:['说明','发送通知']
        },
      ]
    },
    {
      path:'/suc',
      name: 'suc',
      component: suc,
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
  ]
})
