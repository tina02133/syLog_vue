<template>
<!-- {{$route.params.id}} -->
    <div class="right-box">
        <!-- <h4>상세페이지</h4> -->
        <h3>{{blogPost[$route.params.id].title}}</h3>
        <p><strong>셔닝</strong>   2023.04.23</p>
        <hr>
            <div class="detail-image-box">
                <img :src="blogPost[$route.params.id].image">
            </div>     
            <p>{{blogPost[$route.params.id].content}}</p>
    </div>
</template>

<script>
export default {
    // 부모 컴포넌트로부터 전달받은 데이터 props로 등록하기 
    // (전송 시 등록했던)이름 : 데이터형식
    props :{
    blogPost : Array,
  }
}
</script>

<style>

.right-box{
   height: 100vh;
   margin-left: 18%;
   background: white;
   padding: 70px; 
}

.right-box h3, p{
    text-align: left;
}

.detail-image-box{
    width: 500px;
    height:500px;
}

.detail-image-box img{
    width: 100%;
    height: 100%;

}
/* .content-box{
    text-align: center;
} */

</style>