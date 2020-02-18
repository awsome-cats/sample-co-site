<template>
   <div class="question-section">
      <h2>よくある質問</h2>
      <div class="question">
         <router-link to="/questions">
            <ul class="question-list" >
               <li>学習時間</li>
               <li>受講方法</li>
               <li>支払い</li>
               <li>オンライン対応</li>
               <li>PC MACレンタル</li>
               <li>返金制度</li>
               <li>割引</li>
               <li>継続学習プラン</li>
               <li>その他</li>
            </ul>
         </router-link>
      </div>
   </div>
</template>

<script>
export default {
 props:{
    question:{
       type:Array
    }
 }
}
</script>

<style lang="scss" scoped>

.question-section {
   width:100%;
   height:auto;
   margin-bottom:5vh;
   border-bottom: 1px solid #ccc;
   background:#fff;
   h2 {
      font-size: 2rem;
      margin-top:50px;
      margin:20px;
      border-top:1px solid #ccc;
      padding-top:20px;
   }
   .question {
      width:100%;
      height:auto;
      
      a {
         text-decoration-line: none;
         
      }
      .question-list {
         display:grid;
         grid-template-rows: 1fr;
         grid-template-columns: 300px 300px;
         gap:35px;
         
         justify-content: center;
         // flex-wrap: wrap;
         list-style: none;
         background:chocolate;
         height:100%;
         width:100%;
         max-width:700px;
         text-align: center;
         margin:0 auto;
         li {
            width:100%;
            height:auto;
            background:#fff;
            border:1px solid #ccc;
            margin:20px;
            box-shadow:3px 3px 5px 2px rgb(226, 226, 226);
            color:rgb(114, 114, 114);
            font-weight:500;
            padding:16px 10px;
            margin:5px auto;
         }
      }
   }
}

@media screen and (max-width:414px) {
   .question-section {
       .question {
          a {
             ul.question-list {
               display: flex;
               flex-direction: column;
               margin:0;
               justify-content: center;
               li {
                  width:300px;
                  margin:20px auto;
               }
             }
          }
       }
   }
}






</style>