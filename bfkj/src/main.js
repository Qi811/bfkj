// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/css/reset.css'

import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

import VScrollLock from 'v-scroll-lock'

import VueAwesomeSwiper from 'vue-awesome-swiper'
// import {swiper,swiperSlide} from 'vue-awesome-swiper'

// import style
// import 'swiper/css/swiper.css'
// If you use Swiper 6.0.0 or higher
// import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.use(VScrollLock)

Vue.config.productionTip = false


// 全局注册组件
// Vue.component(tagName,{
//   options
// })
Vue.component('my-component',{
  template:'<div>this is component</div>'
})
Vue.component('my-componentt',{
  template:'<div>this is component2</div>'
})

var ExtendComponent = Vue.extend({
  template:'<div>this is ExtendComponent</div>'
})
var ExtendComponentt = Vue.extend({
  template:'<div>this is ExtendComponent2</div>'
})

Vue.component('extendcomponent',ExtendComponent);
Vue.component('extendcomponentt',ExtendComponentt);

var ExtendBox = Vue.extend({
  template:'<p>咿呀咿呀</p>'
})
//直接把全局替换为ExtendBox组件里面的内容（因为app就是整个项目包裹的外壳）
// new ExtendBox().$mount('#app')
//效果同上
// new ExtendBox({
//   el:'#app'
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
