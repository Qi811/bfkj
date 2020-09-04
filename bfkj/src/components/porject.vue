<template>
  <div class="porject">
    <div class="poj">
      <h1 class="pduc">项目案例介绍</h1>
      <p class="pudp">Effective case</p>
    </div>
    <sucess :isShow='isShow'></sucess>
  </div>
</template>

<script>
  import sucess from '@/components/success'
  export default{
    name:'porject',
    components:{
      sucess
    },
    data(){
      return{
        isShow:true
      }
    },
  }
</script>

<style>
  .porject{
    margin-top: 80px;
  }
  .poj{
    width: 100vw;
    height: 180px;
    background: #f7f8f9;
  }
  .pduc{
    text-align: center;
    padding-top: 75px;
    font-size: 32px;
    font-weight: bolder;
    color: #181818;
  }
  .pudp{
    text-align: center;
    padding-top: 10px;
    font-size: 14px;
    color: #c3c3c3;
  }
</style>
