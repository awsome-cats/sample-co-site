<template>
   <div>
      <div class="briefing-page-head">
         <div class="briefing-title">
             <h2>プロのカウンセラーがあなたの悩みを解決</h2>
             <p>最高のプログラミング学習を<br>体験しませんか？</p>
             <p>過去10,000<span>人</span>が参加しています。</p>
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
      <h2 style="text-align:center; margin:35px;">体験会の申し込み</h2>
     <BriefingForm/>
   </div>
</template>

<script>
// data
import briefingFlow from '@/api/briefing-flow.js'

// component
import BriefingForm from '@/views/briefing/BriefingForm'
export default {
   components:{BriefingForm},
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
      height:100%;
      display:flex;
      .briefing-title {
         width:50%;
         h2 {
            background:red;
            color:#fff;
            font-size:2rem;
            font-weight:600;
            margin:10px;
            text-align: center;
            margin-top:50px;
            padding:20px;
         }
         p:first-of-type {
            font-size:1.8rem;
            color:#fff;
            font-weight: 300;
            // margin:10px;
            text-align: center;
            // padding:40px;
            width:80%;
            // text-indent:-1em;
            // margin:left;
         }
         p {
            font-size:2rem;
            text-align: center;
         }
      }
      .briefing-img {
         width:50%;
         height:500px;
         background-image:url('../../assets/svg/briefing-top.svg');
         background-size:cover;
         background-position:center;

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
</style>