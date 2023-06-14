<template>
<!-- 인스타그램 피드형식으로 메인페이지 꾸미기 -->
  <div class="right-box">
   <div class="introTextBox"> 
      <h4>안녕하세요 패션 / 여행 블로거 셔니 입니당~</h4>
   </div>
  <hr>
    <div class="item-content-box">
      <div @click="$router.push('/detail/'+i)" class="item" v-for="a,i in blogPost" :key=i>
        <div class="overlay-black">
           <span class="item-title">{{blogPost[i].title}}</span>
           <hr> 
           <span>{{blogPost[i].date}}</span> 
        </div>
        <img class="item-img" :src="blogPost[i].image" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 부모 컴포넌트로부터 받은 데이터 등록하기
  props : {
    blogPost : Array,
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

.item-content-box{
  width:90%;
  height:90%;
  padding: 10px;
  margin: auto;
}

/* item 감싸는  div */
.item{
  float: left;
  width: 23%;
  margin: 5px;
  height: 250px;
  overflow: hidden;
  position: relative;
  /* box-sizing: content-box; */
  
}

 .item-img{
  /* position: absolute; */
  width: 100%;
  height: 100%;
}

.overlay-black{
  position: absolute;
  width : 100%;
  height : 100%;
  padding-top: 50px;
  background : rgba(0,0,0,0.3);
  opacity: 0;
}
.item:hover .overlay-black{
  opacity: 1;
  z-index: 1;
  transition: all 0.6s;
  color: white;
  /* font-weight: bold; */
  font-size: 15px;
}

.item-title{
  font-size: 18px;
}

.introTextBox h4{
  /* display: flex; */
  text-align: center;
}
          



</style>