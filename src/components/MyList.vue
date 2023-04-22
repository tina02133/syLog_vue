<template>
  <div v-for="a,i in 블로그글" :key="i">
    <h4 @click="$router.push('/detail/' + i)">{{블로그글[i].title}}</h4>
    <p>{{블로그글[i].content}}</p>
  </div>
</template>

<script>
export default {
  name : "BlogList",
  props :{
    // 이름 : 데이터형식
    블로그글 : Array,
  }
}
</script>

<style>

</style>