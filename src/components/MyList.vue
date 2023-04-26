<template>
  <div class="right-box">
  <h4>일상 끄적끄적</h4>
  <hr>
  <div class="content-list-box">
      <div class="content-box" v-for="a,i in 블로그글" :key="i">
        <div class="img-box">
          <img @click="$router.push('/detail/' + i)" class="img" :src="블로그글[i].image">
        </div>
        <div @click="$router.push('/detail/' + i)" class="right-content-box">
          <div class="content-title">
            <h3>{{블로그글[i].title}}</h3>
          </div>
          <div class="content">
            <p>{{블로그글[i].content}}</p>
          </div>
          <div class="date">
            <p>2023.04.23</p>
          </div>
        </div>
        <div style="clear: both;"></div>
        <!-- <hr> -->
      </div>
  </div>
</div>
<div style="clear: both;"></div>
</template>

<script>
export default {
  // 부모 컴포넌트로부터 받은 데이터 등록하기
  props : {
    블로그글 : Array,
  }
}
</script>

<style>
div{
  box-sizing: border-box;
}

.right-box{
   height: 100vh;
   margin-left: 18%;
   background: white;
   padding-left: 70px; 
}

.right-box h4{
  text-align: left;
  margin-top: 10px;
  margin-left: 25px;
}

.content-box{
  padding: 15px;
  margin: 10px;
  width: 100% ;
  height: 200px;
  background: white;
  border-bottom: 2px solid lightsalmon;
}

.img-box{
  float: left;
  width: 170px;
  margin: 0px auto;
  padding: 10px; 
  height: 170px;
}

.img{ 
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.right-content-box{
  margin-top: 15px;
  float: left;
  text-align: left;
}


</style>