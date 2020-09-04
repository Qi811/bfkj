<template>
  <div class="home">
    <div class="swip">
      <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide>
            <img src="../assets/images/banner-1.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/images/banner-2.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/images/banner-3.jpg" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="copt">
      <ul class="coptul">
        <li class="coptli" v-for="(item,index) in kfList" :key="index">
          <img :src="item.images" />
          <h2>{{item.titles}}</h2>
          <p>{{item.ps}}</p>
        </li>
      </ul>
    </div>
    <mobiles :mobileDate="mobileList"></mobiles>
    <mobiles :mobileDate="coptueList"></mobiles>
    <sucess></sucess>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import mobiles from '@/components/mobile'
  import sucess from '@/components/success'

  import mobileSpot from '@/assets/images/mobile-spot.png'
  import mobileFont from '@/assets/images/mobile-font.png'
  import greenSpot from '@/assets/images/green-spot.png'
  import iphone from '@/assets/images/iphone.png'

  import webSpot from '@/assets/images/web-spot.png'
  import webFpot from '@/assets/images/web-font.png'
  import blueSpotMax from '@/assets/images/blue-spot-max.png'
  import blueSpotMin from '@/assets/images/blue-spot-min.png'
  import notebook from '@/assets/images/notebook.png'


  export default{
    name:'home',
    components:{
      mobiles,
      sucess
    },
    data(){
      return{
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
        },
        coptueList:[
          {
            isShow:true,
            titles:'企业型网站 / 营销型网站',
            content:'专为追求高性价比的中小型企业设计。简洁大方的页面设计，满足中小企业基本的网络宣传需求。',
            titcontent:'优势特点:',
            licontent:['提供一年的免费维护','提供后台系统','提供域名注册','提供全套备案服务','提供空间租用','提供基础SEO优化'],
            images:[webSpot,webFpot,blueSpotMin,notebook],
          }
        ],
        mobileList:[
          {
            isShow:false,
            titles:'微信小程序/公众号开发',
            content:'小程序，公众号无需安装卸载方便快捷,内置功能，用完即走，不占空间，低成本,低门槛,满足不同客户的不同需求',
            titcontent:'优势特点:',
            licontent:['微官网','微店商','为分销','店铺装','会员管理','编写支付'],
            images:[mobileSpot,mobileFont,greenSpot,iphone],
          }
        ],
        kfList:[
          {
            images:require('../assets/images/advantage-icon-1.png'),
            titles:'WEB网站建设开发',
            ps:'企业站，推广站'
          },{
            images:require('../assets/images/advantage-icon-2.png'),
            titles:'移动端设计开发',
            ps:'APP/小程序开发'
          },{
            images:require('../assets/images/advantage-icon-3.png'),
            titles:'公众号开发',
            ps:'订阅号/服务号开发支持'
          },{
            images:require('../assets/images/advantage-icon-4.png'),
            titles:'独立域名',
            ps:'可绑定自己独立的域名'
          },{
            images:require('../assets/images/advantage-icon-5.png'),
            titles:'阿里云服务器支持',
            ps:'8G空间支持'
          },{
            images:require('../assets/images/advantage-icon-6.png'),
            titles:'售后升级体系',
            ps:'解决用户后顾之忧'
          },
        ]
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style scoped="scoped">
  .home{
    width: 100%;
    /* height: 100vh; */
  }
  .swip{
    /* height: 444px; */
  }
  .copt{
    width: 1200px;
    height: 204px;
    margin: auto;
    margin-top: -48px;
    position: relative;
    z-index: 999;
    background-color: white;
    box-shadow: 0px 15px 30px -20px #888888;
  }
  .coptul{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .coptli{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .coptli img{
    margin-top: 40px;
  }
  .coptli h2{
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
    color: #6f6f6f;
  }
  .coptli p{
    font-size: 14px;
    margin-top: 20px;
    color: #6f6f6f;
  }


</style>
