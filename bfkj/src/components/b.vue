<template>
  <div class="bb">
    <!-- <button @click="objj()">click2</button><br />
    {{objtwo.text}}
    {{objtwo.isShow}}
    {{objtwo.number}}
    <div id="ul">
      <ul v-for="(item,i) in objtwo.list" :key="i">
       <li>{{item}}</li>
      </ul>
    </div> -->
    <!-- <button @click="norsize()">click</button>
    {{counter}}
    {{num}} -->
    <div v-for="(item, index) in $route.meta" :key="index">
      {{item}}
    </div>
    {{$route.params.id}}
  </div>
</template>

<script>
  export default{
    name:'bb',
    props:{
      obj:{
        type:Object
      },
      num:{
        validator:function(value){
          return value>12
        }
      }
    },
    data(){
      return{
        counter:this.num,
        // objtwo:this.obj,
        // objlist:this.obj.list,
      }
    },
    methods:{
      norsize:function(){
        return this.counter = this.counter.toUpperCase()
      },
      objj(){
          if(this.objlist.length == 0){
            var ul = document.getElementById('ul').innerHTML='无了'
          }else{
            return this.objlist.pop()
          }
        }
    }
  }
</script>

<style>
</style>
