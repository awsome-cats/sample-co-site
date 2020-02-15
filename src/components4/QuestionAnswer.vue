<template>
<div class="question-section">
   <div class="questions">
      <h3>This page is Questions page.</h3>
      <p>申し訳ございません。現在作成中でございます。</p>
      <div class="back-site">
         <router-link to="/">Topに戻る</router-link>
      </div>
   </div>
</div>
   
</template>

<script>
export default {
   name:'Question Answer'
}
</script>


<style lang="scss" scoped>


.question-section {
   background:cornsilk;
   width:100%;
   height:100vh;
   .questions {
      width:100%;
      height:auto;
      padding-top:35vh;
      h3 {
         font-weight:300;
         font-size:2rem;
         text-align: center;
      }
      p {
         font-weight: 200;
         text-align: center;
      }
      .back-site {
         text-decoration: none;
         text-align: center;
         a  {
            color:black;
         }
      }
   }
}



 

</style>