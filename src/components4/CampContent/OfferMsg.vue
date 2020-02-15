<template>
   <section class="offer">
      <div class="offer-container">
         <!----人材の市場価値--->
         <div class="title-image"></div>
         <h2>最先端のスキルを身につけてテクノロジー時代に活躍できる人材へ</h2>
         <p>あらゆる業界でIT化が進んでいる今、エンジニアではなくともテクノロジーへの理解が不可欠な時代になりました。
            <span>プログラミングを活用して新しい価値を生み出す</span>ことで、あなたの人材価値を高めることができます
         </p>
         <!--SVG テキストを追加しよう---->
         <div class="skill-image">
            <div class="skill" v-for="i in campvalue" :key="i.id">
               <img :src="i.svg" alt="スキル画像">
            </div>
           
         </div>
         <!----価値提供後の未来---->
         <!--CardOne--->
         <section class="offer-section">
            <div class="offer-merit">
               <h2>サービス開発スキルが身に付く超実践的な学習プログラム</h2>
               <p>実践で使えるプログラミングスキルの習得を何よりも重視しています</p>
            </div>
            <div class="offer-merit-card-one"  v-for="i in campoffer" :key="i.id">
               <div class="offer-card-title">
                  <h3>{{i.title}}</h3>
                  <p>{{i.description}}</p>
               </div>
               <div class="offer-merit-image">
                  <img :src="i.svg" alt="">
               </div>
            </div>
         </section>
         <!----価値の提案---->
         <section class="learning-line-up">
            <div class="learning-content-headline">
               <h2>コーディングキャンプで学べること</h2>
               <p>テクノロジー時代に活躍するために必要なプログラミングスキルを習得します。また、テクノロジーセミナーではビジネスへのプログラミングの活用方法を学ぶことができます。</p>
            </div>
            <div class="learning-content-title">
               <h3>プログラミング学習</h3>
               <p>オリジナルサービス開発をゴールに、Webサービス開発、AI(人工知能)、Webデザインを学習します</p>
            </div>
            <div class="learning-content" >
               <div v-for="i in camplearning" :key="i.id">
                  <img :src="i.svg" alt="Web開発">
                  <span>{{i.title}}</span>
               </div>
            </div>
         </section>
         <!----価値の提案のサポート体制----->
         <section class="personal-menter">
            <div class="personal-menter-title">
               <h2>パーソナルメンターが「やりきる」をお約束します</h2>
               <p>私たちは、ほとんどの人が<span>自分の意思だけでは「学習継続できない</span>ことを知っています。コーディングCAMPではパーソナルメンターが学習進捗を確認し、サービスを作りきるまで学習をサポートします。だからこそ、<span>確実なプログラミングスキルの習得</span>をお約束します。</p>
            </div>
            <div class="menter-img">
               <!---svg---->
            </div>
         </section>
         
         
         <!----価値のサポートの具体性--->
         <!---環境----->
         <section class="support">
            <h2>人生を変える最高の環境</h2>
            <div class="teaching-material" v-for="i in campsupport" :key="i.id">
               <img :src="i.svgTextSvg" alt="サポート体制の画像">
               <div>
                  <h3>{{i.title}}</h3>
                  <p>{{i.description}}</p>
               </div>
            </div>
         </section>
         
         
         
         <!---受講生の声---->
         <section class="feedback">
            <h2>これからの時代に成果を上げる人材へ</h2>
            <p>コーディングCAMPで実践的なプログラミングスキルを手に入れることで、今よりもさらに社会で活躍できる人材へ成長することができます。</p>
            <h3>実際に卒業した受講生の声</h3>
            <!-- card v-forが効率的---->
           <feedback :feedback="feedback"/>
         </section>
         <!---Media 掲載実績: componentのimport-->
         <media-info/>
         <!---満足度 受講生数: componentのimport---->
         <satisfaction/>
         <!-----教室の拠点画像: componentのimport---->
         <!----briefing.vue import----->
         <Briefing/>
         <!------質問------>
         <Question :question="question"/>
         <!------footer :import----->
         
      </div>

   </section>
</template>

<script>
// componentのimport
import feedback from '@/components4/CampContent/FeedBack.vue'
import MediaInfo from '@/components4/CampContent/MediaInfo'
import Satisfaction from '@/components4/CampContent/Satisfaction'
import Briefing from '@/views/Briefing'
import Question from '@/components4/CampContent/Question'



export default {
   components:{feedback, MediaInfo, Satisfaction,Briefing, Question},
   props:{
      item:{
         type:Object,
         required:true
      },
      campsupport: {
         type:Array
      },
      campoffer:{
         type:Array
      },
      camplearning:{
         type:Array
      },
      campvalue:{
         type:Array
      },
      feedback:{
         type:Array
      },
      question:{
         type:Array
      }
     
   }
}
</script>

<style lang="scss" scoped>
*{
   margin:0;
   padding:0;
   box-sizing: border-box;
}

.offer {
   background:#fff;
   margin-top:60px;
}

.offer-container {
   width:100%;
   height:auto;
}

.offer-container h2,
.offer-merit h2,
.learning-content-headline h2,
.learning-content-title h3,
.personal-menter-title h2 {
   font-size:2rem;
   width:100%;
   /* background:cornflowerblue; */
   padding-left:25px;
}

.offer .offer-container p,
.offer-merit p,
.learning-line-up p,
.learning-content-title p,
.personal-menter p{
   //background:darkcyan;
   padding-left:25px;
   width:100%;
}


.offer-container p {
   font-size:1rem;
   /* padding-left:20px; */
   padding-top:30px;
   margin-bottom:30px;
   width:95%;
}

.skill-image{
   display:flex;
   justify-content: space-around;
   flex-wrap: wrap;
   align-content: center;
   padding:0;
   margin-bottom:50px;
}

.skill-image  img {
   margin:5px;
   width:240px;
   opacity:.3;
   border-radius: 15px;
}

/* Offer Section */
/* One */

.offer-section {
   width:100%;
}
.offer-merit {
    margin-top:30px;
}

.offer-merit-card-one {
   display:grid;
   grid-template-rows: 1fr;
   grid-template-columns: 1fr 1fr;
   width:90%;
   border:1px solid #ccc;
   height:100%;
   margin:0 auto;
   margin-bottom:30px;
   padding:15px;
   box-shadow:3px 3px 7px 5px rgb(226, 226, 226);
}

.offer-card-title {
   grid-column: 1/2;
   grid-row:1/2;
}

.offer-card-title h3 {
   font-size:1.6rem;
   padding-bottom:40px;
   padding-top:60px;
}

.offer-merit h2 {
   font-size: 2rem;
}

.offer-merit-image {
   grid-column: 2/3;
   grid-row: 1/2;
   margin:10px;
}

// offer section media query
@media screen and (max-width: 500px) {
   .offer-merit-card-one {
      display:grid;
      grid-template-columns: 1fr;
      grid-template-rows:1fr 1fr;
      .offer-card-title {
         grid-column:1/2;
         grid-row:1/2;
         h3 {
            padding-top:20px;
            font-size:1.6rem;
            font-weight:500;
         }
         p {
            padding-top:0px;
         }
      }
      .offer-merit-image {
         grid-column: 1/2;
         grid-row:2/3;
      }
   }
}


/* Learnnig Content */

.learning-line-up {
   margin-top:50px;
   width:100%;
}

.learning-content-headline h3,
.learning-content-headline p {
   width:100%;
}

.learning-content-title h3 {
   font-size:1.6rem;
}

.learning-content {
   display:flex;
   justify-content: space-around;
   margin:0 auto;
   margin-bottom:50px;
   width:100%;
}

.learning-content > div {
   /* width:100%; */
   height:auto;
   box-shadow:3px 3px 7px 2px rgb(240, 239, 239);
   text-align: center;
   align-content: center;
   padding:5px;
   margin:10px;
   position:relative;
}

.learning-content div span {
   position: absolute;;
   left:50%;
   top:98%;
   transform: translate(-50%, -98%);
   font-size:1.2rem;
}

.learning-content div img {
   width:200px;
   margin-top:40px;
   margin-bottom:20px;
   padding:0;
}

// learning media query
@media screen and (max-width:500px) {
   .learning-content {
      max-width:500px;
      background:darkgoldenrod;
      img {
         max-width:120px;
      }
   }
}

/* 価値のサポート */
.personal-menter {
   width:100%;
   box-sizing: border-box;
   // background:chartreuse;
   margin-bottom:100px;
}

.personal-menter-title h2,
.personal-menter-title p  {
   width:100%;
}

.personal-menter-title p {
   font-size:1.6rem;
   font-weight:500;
   margin-bottom:60px;
}

.personal-menter-title p span {
   font-size:1.6rem;
   color:rgb(226, 71, 71);
   font-weight:600;
}

.personal-menter .menter-img {
   background-image:url('../../assets/svg/svg-camp-learn02.svg');
   height:400px;
   width:100%;
   background-size:cover;
   background-position:center;
}

@media screen and (max-width:500px) {
   .personal-menter {
      margin-bottom:30px;
      .personal-menter-title p {
      font-size: 1.3rem;
      span {
         font-size:1.3rem;
      }
   }
   }
   
}

/* support section*/
.support {
   width:100%;
   height:auto;
   margin:0 auto;
   h2 {
      margin-bottom:30px;
   }
}



.teaching-material
{
   /* margin-bottom:50px; */
   display:grid;
   grid-template-columns: 1fr 1fr;
   grid-template-rows: 1fr;
   justify-content: center;
   align-items: center;
   align-content: center;
   border:1px solid #ccc;
   box-shadow:3px 3px 7px 5px rgb(240, 239, 239);
   width:90%;
   height:100%;
   margin:0 auto;
   margin-bottom:40px;
   background:#fff;
}

.teaching-material h3{
   font-size:1.6rem;
   margin:20px;
}

.teaching-material p

 {
   font-size:1rem;
   padding:10px 20px;
  
}

.teaching-material div
{
    width:90%;
    grid-column: 2/3;
    grid-row:1/2;
    
}

.teaching-material img {
   padding:15px;
   width:100%;
   height:auto;
   max-height:350px;
}


.dev-support img,
.support-menter img  {
  height:450px;
  padding-bottom:15px;
  padding-top:15px;
  
}

// support media query

@media screen and (max-width:500px) {
   .support h2 {
      text-align: center;
      margin-top:0px;
   }
   .teaching-material {
     grid-template-columns: 1fr;
     grid-template-rows: 1fr 1fr;
     div {
        grid-column: 1/2;
        grid-row: 2/3;
     }
     img {
        grid-row: 1/2;
        grid-column: 1/2;
     }
   } 
}


.feedback {
   width:100%;
   p {
      word-break: break-all;
      width:100%;
   }
   h3 {
      margin:20px;
      font-size:1.5rem;
      color:rgb(153, 150, 150);
   }
}

// feedback media query

@media screen and (max-width:500px) {
   .feedback {
      p {
         font-size:1.2rem;
      }
      h3 {
         font-size:1.4rem;
         text-align: center;
      }
   }
}




@media screen and (max-width: 500px) {
   .offer-container h2{
      font-size:1.5rem;
      width:90%;
      text-align:center;
   }
}


</style>