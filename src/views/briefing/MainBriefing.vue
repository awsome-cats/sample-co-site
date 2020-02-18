<template>
   <section class="briefing">
      <div class="briefing-page-head">
         <div class="briefing-title">
            <div>
               <h2>プロのカウンセラーがあなたの悩みを解決</h2>
            </div>
            <div>
               <p>最高のプログラミング学習を<br>体験しませんか？</p>
            </div>
             <div>
                <p>過去10,000<span>人</span>が参加しています。</p>
             </div>
         </div>
         <div class="briefing-img"></div>
      </div>
       <h2 class="briefing-flow-image">体験会の流れ</h2>
      
      
      <div class="briefing-page-flow">
           <div class="briefing-img-section" 
           v-for="i in briefingFlow" 
           :key="i.id"
           >
            <div class="briefing-img">
               <div class="i">
                  <img :src="i.svg" alt="">
               </div>
               <div class="title">
                  <p>{{i.title}}</p>
                  <p>{{i.des}}</p>
               </div>
            </div>
           </div>
      </div>
      
      <h2 class="briefing-contact">\ 体験会の申し込み /</h2>
      <h3 class="text-center">入力が終えるまで10秒</h3>
      <p class="text-center">プログラミングの世界へ一歩を踏み出す</p>
     
     <testForm/>
   
   </section>
</template>

<script>
// data
import briefingFlow from '@/api/briefing-flow.js'

// component
import testForm from '@/views/briefing/testForm'
export default {
   components:{testForm},
   data() {
      return {
         briefingFlow
      }
   }
}
</script>

<style lang="scss" scoped>
   .briefing {
   .briefing-page-head {
      width:100%;
      height:auto;
      margin-top:100px;
      margin-bottom:30px;
      display:flex;
      .briefing-title {
         width:50%;
         height:100%;
         margin-left:10px;
         h2 {
            background:red;
            color:#fff;
            font-size:2rem;
            font-weight:600;
            text-align: start;
            margin-top:50px;
            padding-bottom:20px;
           
         }
         p:first-of-type {
            font-size:1.8rem;
            color:black;
            font-weight: 300;
            margin-top:60px;
            margin-left:20px;
            font-weight: 600;
            width:80%;
            text-align: start;
         }
         p {
            font-size:2rem;
            margin-top:60px;
            margin-left:20px;
            font-weight: 400;
         }
      }
      .briefing-img {
         width:50%;
         height:auto;
         background-image:url('../../assets/svg/briefing-top.svg');
         background-size:cover;
         background-position:center;
         margin:10px;
      }

   }
   .briefing-flow-image {
      font-size:1.5rem;
      text-align: center;
      font-weight: 500;
      padding-top:30px;

   }
   .briefing-page-flow {
      margin-top:50px;
      margin:0 auto;
      display:flex;
      justify-content: center;
      max-width:980px;
      .briefing-img-section {
         width:100%;
         height:100%;
         margin:15px;
         .briefing-img {
            border:1px solid #ccc;
         }
         
        .i {
           background:coral;
        }
         .title {
            width:100%;
            height:180px;
            background:#fff;
            p:first-of-type {
               font-size:1.3rem;
               text-align: center;
            }
            p:last-of-type {
               font-size:1rem;
               padding-top:15px;
               padding:10px;
            }
         }
      }
   }
   h2.briefing-contact {
      color:rgb(223, 71, 71);
      font-size:2rem;
      margin:30px 0px;
      text-align: center;
      font-weight: 600;
   }

}
// Media Query 768px
@media screen and (max-width:768px) {
   .briefing-page-head {
      margin-top:100px;
      margin-bottom:30px;
      background:rgb(243, 243, 243);
      .briefing-title {
         h2 {
            font-size:1.3rem;
            margin:10px;
         }
         p:first-of-type {
            font-size: 1.3rem;
            margin-left:10px;
         }
         p:last-of-type {
            font-size: 1.5rem;
            font-weight: 400;
            padding:0;
            margin-left:10px;
         }
      }
   }
   .briefing-page-flow 
   .briefing-img-section
   .briefing-img {
      .title {
         p:first-of-type {
            font-size: 1rem;
            font-weight: 600;
         }
         p:last-of-type {
            font-size: .7rem;
            font-weight: 530;
         }
      }
   }
}


//Media Query 414px 

@media screen and (max-width:414px) {
   .briefing {
      padding:10px 10px;
      .briefing-page-head {
         flex-direction: column;
         margin-top:50px;
         margin-bottom:30px;
         background:rgb(243, 243, 243);
         .briefing-title {
            width:100%;
            height:100%;
            margin:0;
            h2 {
               font-size:1.6rem;
               margin-top:0;
               padding-bottom:0;
               text-align: start;
               margin-bottom:20px;
            }
            div p:first-of-type {
               font-size: 1rem;
               margin-left:10px;
               margin-top:0;
               font-weight:500;
               text-align: start;
            }
             
         }
         .briefing-img {
            width:100%;
            height:auto;
            height:200px;
            margin:0;
         }
      }
      .briefing-page-flow {
         display:grid;
         grid-template-rows: 1fr;
         grid-auto-columns: 1fr;
         width:100%;
         justify-content: center;

         .briefing-img-section {
            height:auto;
            margin:15px 0px;
            .briefing-img {
               grid-column: 1fr;
               grid-row: 1fr;
               width:100%;
               height:auto;
               .title {
                  height:100%;
                  p:first-of-type {
                     padding-top:5px;
                     font-size: 1rem;
                     font-weight: 600;
                  
                  }
                  p:last-of-type {
                     font-size: 1rem;
                     font-weight: 530;
                     padding-top:0px;
                     padding-bottom:0;
                  }
               }
            }
            h2 {
               font-size: 1.3rem;
            }
            h3 {

            }
            p {

            }
         }
         
      }
   }
   
   


}



</style>