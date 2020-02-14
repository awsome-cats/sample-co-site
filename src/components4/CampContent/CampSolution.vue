<template>
   <section class="camp-description">
      <h1 class="camp-title">コーディング キャンプとは</h1>
      <h2>コーディングキャンプとは<span>テクノロジーが主役の時代に成果の出せる人材</span>を育成する新しいスクールです。これからの時代に不可欠な<span>プログラミングスキル</span>を最高の学習環境で学ぶことができます。</h2>
      <div class="image">
         <!--svg 画像-->
         <div class="svg-wrapp">
            <img :src="item.campSectionContent.svgTextSvg1" alt="">
         
         
            <img :src="item.campSectionContent.svgTextSvg2" alt="">
        
         
            <img :src="item.campSectionContent.svgTextSvg3" alt="">  
        
         </div>
      </div>
      <div>
      </div>
   </section>
</template>

<script>
export default {
   name:'CampSolution',
   props:{
      item:Object
   }
}
</script>

<style scoped>

.camp-description {
   width:100%;
   background:#fff;
   border-top:1px solid #ccc;
}

h1 {
   font-size:2rem;
   font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
   padding:10px;
   margin:20px;
}

h2 {
   font-size:1.6rem;
   font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
   padding:10px;
   margin:20px;
}

h2 span {
   font-size:1.6rem;
   color:crimson;
}

.image {
   width:100%;
   display:flex;
   justify-content: center;
   margin:30px 0px;
}

.image .svg-wrapp {
   width:100%;
   /* background:chartreuse; */
   display:flex;
   justify-content: center;
   
}

.image img{
   width:200px;
   margin:0 10px;
}

@media screen and (max-width:500px) {
   .image {
      flex-direction: column;
      align-items: center;
   }
   .svg-wrapp {
      margin:0 10px;
   }

   h2 {
      font-size:1.3rem;
   }
   h2 span {
      font-size:1.3rem;
   }
}





</style>