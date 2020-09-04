<template>
  <div>
    <!-- 我是a
    <my-component></my-component>
    <my-componentt></my-componentt>
    <extendcomponent></extendcomponent>
    <extendcomponentt></extendcomponentt>
    <child></child>-->
     <!-- <ul>
     <li is="my-li"></li> -->
     <!-- <my-li></my-li>
    </ul>
    <br />
    {{obj.text}}
    {{obj.isShow}}
    {{obj.number}}
    <ul v-for="(item,i) in obj.list" :key="i">
     <li>{{item}}</li>
    </ul> -->
    <br />
    <!-- <bb :obj="obj"></bb> -->
    <!-- <bb :num="num"></bb> -->
    <input type="text" value="" />
    <router-link :to="{name:'bb',params:{id:1}}">跳转</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import bb from '@/components/b'
  var Child = {
    template:'<p>我是局部注册</p>'
  }
  var myLi = {
    template:'<li>我是一</li>'
  }
  export default{
    name:'aa',
    data(){
      return{
        obj:{
          text:'我是text',
          isShow:true,
          list:['one','two','three'],
          number:10
        },
        num:14
      }
    },
    created() {

    },
    components:{
      'child':Child,
      'my-li':myLi,
      'bb':bb
    },
    beforeRouteLeave(to,from,next) {
      if(to.name !== 'bb'){
        this.$route.meta.keepAlive = false
      }else{
        this.$route.meta.keepAlive = false
      }
      next()
    }
  }
</script>

<style>
</style>
