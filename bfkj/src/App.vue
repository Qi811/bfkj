<template>
  <div id="app">
    <!-- <headtop></headtop> -->
    <router-view></router-view>
  </div>
</template>

<script>
  import headtop from './components/header.vue'
export default {
  name: 'App',
  components:{
    'headtop':headtop
  },
  data(){
    return{

    }
  }
}
</script>

<style>

</style>
