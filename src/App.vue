<template>
<div class="title-box">
  <router-link style="text-decoration: none;" to="/">
  <h1 class="title"><span>Siyeon.log</span></h1>
  </router-link>
</div>
 <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">List</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<!--하단측 큰 박스  -->
<div class="under-bg-box">
<!-- 좌측 프로필 박스 -->
<div class="left-box">
  <div class="image-box">
    <img class="image" src="./assets/profile.jpg">
  </div>
  <div class="introdunction">
    <h5>셔닝</h5>
    <p>안녕하세요. 패션/맛집 블로거 셔닙니당!<br>
       서이추 대환영입니다 ㅎㅎ !!
    </p>
  </div>
</div>
<!-- <router-link to="/list">리스트페이지</router-link> -->

  <!-- 등록한 데이터를 부모 컴포넌트에서 자식 컴포넌트로 데이터 보내기 -->
  <router-view :블로그글="블로그글"></router-view>

</div>
</template>


<script>

// Blog.js 로부터 데이터 import 하기 
import Blog from './assets/Blog.js';


export default {
  name: 'App',
  data(){
    return{ 
      // Blog.js 로부터 import 받은 데이터 등록하기
     블로그글 : Blog,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

body{
  height: 100vh;
  margin: 0px;
}

div{
  box-sizing: border-box;
}

.under-bg-box{
  width: 100%;
  height: 100%;
}

.title-box{
  /* background: lightskyblue; */
  height: 170px;
  color: black;
  text-align: center;
  padding-top: 50px; 
}

.title{
  background: lightsalmon;
  width: 20%;
  margin: auto;
  height: 40%;
  color: white;
}

.container-fluid{
  background: lightsalmon;
}

.container-fluid a{
  color: white;
  font-weight: bold;
}

.left-box{
  float: left;
  width: 18%;
  height: 730px;
  background: white;
  margin: 0px;
  border-left: solid 2px lightsalmon;
}


.image-box{
  height: 30%;
  width: 80%;
  margin: 15px auto;
}

.image{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.introdunction{
  margin : 20px
}


</style>