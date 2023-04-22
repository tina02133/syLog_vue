<template>
  <div class="right-box">
  <h4>일상 끄적끄적</h4>
  <div class="content-list-box">
      <div class="content-box" v-for="i in 8" :key="i">
        <div class="img-box">
          <img class="img" src="../assets/KakaoTalk_20230419_131406205.jpg">
        </div>
        <div class="right-content-box">
          <div class="content-title">
            <h3>목동 맛집 : 일미락 ~~~ 데이트 코스로 추천!</h3>
          </div>
          <div class="content">
            <p>제가 오늘은 목동 맛집을 다녀왔는데요~~~어쩌구</p>
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
}


.content-box{
  padding: 15px;
  margin: 10px;
  width: 80% ;
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