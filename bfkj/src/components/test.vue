<template>
  <div class="one">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
      <div class="swiper-slide">Slide 5</div>
      <div class="swiper-slide">Slide 6</div>
      <div class="swiper-slide">Slide 7</div>
      <div class="swiper-slide">Slide 8</div>
      <div class="swiper-slide">Slide 9</div>
      <div class="swiper-slide">Slide 10</div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination" slot="pagination">

    </div>
  </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default{
    name:'test',
    data(){
      return{
      }
    },
    mounted() {
      var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 30,
            observer:true,
            observeParents:true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              paginationType : 'custom',
              renderBullet:function (index, current) {
                var text = '';
                switch (index){
                    case 0:
                        text = '1';
                        break;
                    case 1:
                        text = '2';
                        break;
                    case 2:
                        text = '3';
                        break;
                }
                return '<li class="'+current+'">' + text + '</li>'
            },
            }
          });
    }
  }
</script>

<style>
   .one {
     background: #eee;
     font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
     font-size: 14px;
     color: #000;
     margin: 0;
     padding: 0;

   }
   .swiper-container {
        width: 100vw;
        height: 708px;
        margin-left: auto;
        margin-right: auto;
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
      .swiper-pagination-bullet.swiper-pagination-bullet{
        width: 73px;
        height: 31px;
        line-height: 30px;
        border-radius: 0px;
        color: black;
        font-weight: bolder;
        background-color: white;
      }
      .swiper-pagination-bullet.swiper-pagination-bullet-active{

        background-color: blue;
        border-radius: 0px;
        color: white;
      }
</style>
