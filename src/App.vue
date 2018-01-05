
<template>
  <div id="app">
    <home></home>
    <swiper></swiper>
   
  </div>

</template>

<script>
import home from '@/components/home';
import swiper from '@/components/common/swiper';
export default {
  name: 'app',
  data(){
    return{
      
    }
  },
  components:{
    home,
    swiper
  }
}
</script>

<style>

</style>
