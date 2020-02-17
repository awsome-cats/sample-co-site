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

<style lang="scss" scoped>

.camp-description {
   width:100%;
   background:#fff;
   border-top:1px solid #ccc;
   h1 {
      font-size:2rem;
      font-family:'Arial Narrow Bold', sans-serif;
      padding:10px;
      margin:20px;
      text-align: center;
      font-weight: 600;
   }

   h2 {
      font-size:1.6rem;
      font-family:'Arial Narrow Bold', sans-serif;
      font-weight: 550;
      height: auto;
      line-height: 130%;
      margin:20px 20px;
      span {
         font-size:1.7rem;
         font-weight: 700;
         color:crimson;
      }
   }
   .image {
      width:100%;
      display:flex;
      justify-content: center;
      margin:30px 0px;
      .svg-wrapp {
         width:100%;
         /* background:chartreuse; */
         display:flex;
         justify-content: center;
         img{
            width:200px;
            margin:0 10px;
         }
         
      }
   }
}



@media screen and (max-width:414px) {
   .camp-description {
      h1.camp-title {
       font-size: 1.5rem;
      }
      h2 {
         font-size: 1.1rem;
         span {
            font-size: 1.2rem;
         }
      }
      .image {

         .svg-wrapp {
            display:none;
         }
      }
   }

}





</style>