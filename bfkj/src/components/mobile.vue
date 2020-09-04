<template>
  <div class="mobile">
    <div class="bgmobile" v-for="(item,index) in mobileDate" :key="index"
    :class="{'show':item.isShow}">
      <div class="inner" :class="{'toinner':item.isShow}">
        <div class="cpntent">
          <h1>{{item.titles}}</h1>
          <p>{{item.content}}</p>
          <h3>{{item.titcontent}}</h3>
          <ul>
            <li v-for="(items,index) in item.licontent" :key="index">{{items}}</li>
          </ul>
        </div>
        <div class="ipt" >
          <img class="imgOne" v-for="(i,index) in item.images" :src="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'mobile',
    props:{
      mobileDate:{
        type:Array
      },
      coptueList:{
        type:Array
      }
    },
    data(){
      return{

      }
    }
  }
</script>

<style>
  .mobile,.bgmobile{
    width: 100%;
    /* background: white; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
  }
  .inner{
    width: 1200px;
    height: 612px;
    margin:0 auto;
    display: flex;
  }
  .toinner{
    flex-direction: row-reverse;
  }
  .show{
    background: #f9f9f8;
  }
  .cpntent{
    flex: 1;
  }
  .cpntent h1{
    color: #242424;
    font-size: 30px;
    font-weight: bolder;
    margin-top: 120px;
  }
  .cpntent p{
    color: #605b5b;
    margin-top: 20px;
    line-height: 24px;
  }
  .cpntent h3{
    display: block;
    color: #363636;
    font-size: 16px;
    font-weight: bolder;
    margin-top: 40px;
    margin-bottom: 15px;
  }
  .cpntent ul{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 330px;
    height: 110px;
  }
  .cpntent ul li{
    display: block;
    width: 165px;
    height: 20px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
  }
  .ipt{
    position: relative;
    flex: 1;
  }
  .imgOne:nth-child(1),.imgOne{
    position: absolute;
  }
  .imgOne:nth-child(2){
    top: 203px;
  }
  .imgOne:nth-child(3){
    top: 310px;
    left: 40px;
  }
  .imgOne:nth-child(4){
    left: 182px;
  }
</style>
