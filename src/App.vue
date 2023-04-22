<template>
<div class="title-box">
  <h1 class="title"><span>Siyeon.log</span></h1>
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

<!-- <Introduce/> -->

<!-- <router-link to="/list">리스트페이지</router-link> -->
<div class="mt-4">
  <router-view :블로그글="블로그글"></router-view>
</div>
<!-- 부모 컴포넌트에서 자식 컴포넌트로 데이터 보내기 -->
</template>


<script>
// import MyList from './components/MyList.vue';
import Blog from './assets/Blog.js';
// import Introduce from './components/MyHome.vue';

export default {
  name: 'App',
  data(){
    return{ 
     블로그글 : Blog,
    }
  },
  //  components : {
  //    Introduce : Introduce,
  //  },
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

.title-box{
  /* background: lightskyblue; */
  height: 150px;
  color: black;
  text-align: center;
  padding-top: 50px; 
}

.title{
  background: lightcoral;
  width: 20%;
  margin: auto;
  height: 40%;
}

.container-fluid{
  background: lightgray;
}

</style>
