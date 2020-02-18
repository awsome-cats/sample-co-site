<template>
   <div>
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
      <h2 style="text-align:center; margin:35px;">\ 体験会の申し込み /</h2>
      <h3 class="text-center">入力が終えるまで10秒</h3>
      <p class="text-center">プログラミングの世界へ一歩を踏み出す</p>
     <testForm/>
   </div>
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
            
            text-align: center;
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
   .briefing-page-head {
      flex-direction: column;
      margin-top:50px;
      margin-bottom:30px;
      background:rgb(243, 243, 243);
      .briefing-title {
         width:100%;
         h2 {
            font-size:1rem;
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
      width:100%;
      height:auto;
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



</style>