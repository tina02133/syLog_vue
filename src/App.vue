<style>
/* ==> main.css import */
@import "./assets/main.css";
</style>
<template>
<!-- ==> navbar -->
<div class="title-box">
  <router-link style="text-decoration: none;" to="/">
  <h1 class="title"><span>Siyeon.log</span></h1>
  </router-link>
</div>
 <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link style="text-decoration:none" to="/MyHome" >
      <a class="navbar-brand" href="#">Home</a>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <router-link to="/list" style="text-decoration:none;">
        <li class="nav-item">
          <a class="nav-link" href="#">List</a>
        </li>
        </router-link>
      </ul>
    </div>
  </div>
</nav>
<!--==> 하단측 큰 박스  -->
<div class="under-bg-box">
<!--==> 좌측 프로필 박스 -->
<div class="left-box">
  <div class="image-box">
    <img class="image" src="./assets/profile.jpg">
  </div>
  <div class="introdunction">
    <h5>셔닝(tina02133)</h5>
    <hr>
    <p style="font-family : fantasy ">안녕하세요. 패션/맛집 블로거 셔닙니당!<br>
       서이추 대환영입니다 ㅎㅎ !!
    </p>
  </div>
</div>

  <!-- ==> 등록한 데이터를 부모 컴포넌트에서 자식 컴포넌트로 데이터 보내기 -->
  <router-view :blogPost="blogPost"></router-view>
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
     blogPost : Blog,
    }
  },
}
</script>
