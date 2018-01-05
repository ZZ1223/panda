<template>
	<div id="home">
    <div id="search">
      <input type="text" name="searchbar" value="搜索商品，发现更多优选">
    </div>
    <div class="nav">
      
    </div>
   
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data(){
    return{

    }
  },
  mounted(){
    axios.get('/api/tabs').then(function(res){
     // console.log(res)
    })
  }
}
</script>

<style>
#search{
  width:100%;
  height:1.133rem;
  background:#fdde4a;
}
#search input{
  font-size: .373rem;
  width:90%;
  height:.8rem;
  margin:.28rem .5rem;
  border:0;
  border-radius:.3rem;
  padding-left:0.4rem;
  color:#877a73;
}
</style>