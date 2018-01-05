<template>
<div>
	<swipe class="my-swipe">
	  <swipe-item v-for="data in looplist">
		<img :src="data.imageUrl">
	  </swipe-item>
	</swipe>
  <div id="four">
  	<div class="nine" v-for="data in ninelist" >
      <div class="s_nine l">
        <img :src="data.imageUrl" >
        <p>{{data.title}}</p>
      </div>
    </div>
  </div>

  <div class="blank"></div>

  <div class="everyday">
    <span class="l">每日排行榜</span>
    <span class="r">查看全部> </span>
    <div class=""></div>
  </div>
  
</div>
</template>

<script>
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
import axios from 'axios';

export default {

  name: 'swiper',

  data () {
    return {
    	looplist:[],
      ninelist:[],


    };
  },
  mounted(){ //生命周期
  	 axios.get('/api/tab/1?start=0').then(res=>{
      console.log(res);
      this.looplist= res.data.data.banners;
      this.ninelist= res.data.data.grids;
    })
  },
  components:{
  	'swipe':Swipe,
  	'swipe-item':SwipeItem
  }
};
</script>

<style lang="scss" scoped>
.l{
  float:left;
}
.r{
  float:right;
}
.my-swipe {
  height: 3.7rem;
  color: #fff;
  font-size: 30px;
  text-align: center;
  img{
  	width:100%;
	}
}
.blank{
  width:100%;
  height:.3rem;
  background: #f5f5f5;
}
#four{
  height:5rem;
.nine{
  .s_nine{
    width:50%;
    
    text-align: center;
    img{margin:0 auto;
      width:2rem}
    border-right:1px solid #ccc;
    border-bottom: 1px solid #ccc;
    }
  p{
    color:#877a73;
    }

  }
}
.everyday{
  font-size:.5rem;
}

</style>