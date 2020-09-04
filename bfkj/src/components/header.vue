<template>
  <div class="header">
    <div class="headtop">
      <div class="head">
        <a href="/" class="logo"/>
        <ul class="wz">
          <li @click="isActive=1" :class="{'active':isActive==1}">
            <router-link :to="{name:'home'}">
              首页
            </router-link>
          </li>
          <li @click="isActive=2" :class="{'active':isActive==2}">
            <router-link :to="{name:'porject'}">
              案例
            </router-link>
          </li>
          <li @click="isActive=3" :class="{'active':isActive==3}">
            <router-link :to="{name:'join'}">
              加入我们
            </router-link>
          </li>
          <li @click="isActive=4" :class="{'active':isActive==4}">
            <router-link :to="{name:'contact'}">
              联系我们
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="rview">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default{
    name:'headers',
    data(){
      return{
        isActive:1
      }
    }
  }
</script>

<style scoped="scoped">
  .head,.logo,.wz,.wz li{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header{
    position: relative;
    width: 100vw;
    height: 80px;
    background: #fff;
    z-index: 2;
  }
  .headtop{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 999;
  }
  .head{
    width: 1200px;
    height: 80px;
    margin: auto;
  }
  .logo{
    width: 110px;
    height: 80px;
    background: url(../assets/images/bd_logo.png) no-repeat center;
  }
  .wz{
    width: 532px;
    height: 30px;
    margin-left: auto;
  }
  .wz li{
    flex: 1;
    font-size: 15px;
  }
  .wz li.active::before{
    content: '';
    width: 73px;
    height: 2px;
    top: 60px;
    position: absolute;
    background-color: royalblue;
  }
</style>
