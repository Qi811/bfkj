<template>
  <div class="success">
    <div class="swiper-container first-one">
      <div class="titles">
        <div id="lfwz" v-if="!isShow">
          <h3>成功案例</h3>
        </div>
        <div class="swiper-pagination first-p-one" :class="{'swip':isShow}">
        </div>
      </div>
      <div class="swiper-wrapper">
        <div class="swiper-slide one" style="margin-top: 0px;" v-for="(item,index) in num" :key="index">
          <div class="swiper-container second-one" style="height: 200px;">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(i,index) in yhxList" :key="index">
                  <img :src="i" />
                </div>
              </div>
          </div>
         <h3 class="sj">摄影</h3>
         <p class="zx">塑造造型</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'

  import yhxon from '@/assets/images/yhx_1.jpg'
  import yhxtw from '@/assets/images/yhx_2.jpg'
  import yhxth from '@/assets/images/yhx_3.jpg'
  export default{
    name:'success',
    props:{
      isShow:{
        type:Boolean
      }
    },
    data(){
      return{
        num:24,
        number:6,
        yhxList:[yhxon,yhxtw,yhxth],
        yhxListTwo:['摄影','塑造造型'],
      }
    },
    methods:{

    },
    mounted() {
      var swiperFather = new Swiper('.first-one', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
        spaceBetween: 30,
        pagination: {
          el: '.first-p-one',
          clickable: true,
            paginationType : 'custom',
            renderBullet:function (index, current) {
              var text = '';
              switch (index){
                case 0:
                    text = '全部';
                    break;
                case 1:
                    text = '网站';
                    break;
                case 2:
                    text = '小程序';
                    break;
                case 3:
                    text = 'APP';
                    break;
              }
              return '<li class="'+current+'">' + text + '</li>'
            },
          }
      });
      var swiperSon = new Swiper('.second-one', {
        direction: 'vertical',
        autoplay:false,
          pagination: {
            el: '.swiper-paginations',
            clickable: true,
          }
      });
    }
  }
</script>

<style scoped="scoped">
  .success{
    height: 700px;
    /* margin-top: 80px; */
  }
  .swiper-container {
    width: 1200px;
    height: 654px;
  }
  .swiper-slide.one{
    margin-top: -30px!important;
  }
  .titles{
    width: 1200px;
    height: 35px;
    margin-top: 49px;
  }
  #lfwz{
    width: 240px;
    height: 31px;
    float: left;
    position: absolute;
    z-index: 99;
  }
  #lfwz h3{
    font-size: 24px;
    font-weight: bold;
  }
  #lfwz h3::after{
    content: 'Effective case';
    color: #ccc;
    font-size: 16px;
    font-weight: 100;
    padding-left: 5px;
  }
  .swiper-pagination.first-p-one{
    width: 412px;
    height: 31px;
    right: 0px;
  }
  .swip{
    left: 394px;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    height: calc((100% - 30px) / 2);

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
 img{
   width: 380px;
   height: 200px;
 }
 .sj,.zx{
   position: absolute;
   z-index: 999;
   color: black;
   top: 0;
 }
 .sj{
   padding-top: 270px;
   display: block;
    font-size: 16px;
    font-weight: bolder;
    color: #555555;
 }
 .zx{
   padding-top: 290px;
    line-height: 24px;
    color: #b3b3b3;
    font-size: 15px;
 }
</style>
