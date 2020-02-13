<template>
   <div class="question-section">
      <h2>よくある質問</h2>
      <div class="question">
         <a href="">
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
         </a>
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

<style scoped>

.question-section {
   /* width:100%; */
   height:100%;
   margin-bottom:5vh;
   background:#fff;
}

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
   /* background:#ddd; */
}

.question a {
   text-decoration-line: none;
}

.question-list {
   display:flex;
   justify-content: space-between;
   flex-wrap: wrap;
   list-style: none;
   /* width:100%; */
   height:100%;
   
}

.question-list li {
   width:350px;
   height:60px;
   background:#fff;
   border:1px solid #ccc;
   margin:20px;
   box-shadow:3px 3px 5px 2px rgb(226, 226, 226);
   color:rgb(114, 114, 114);
   font-weight:500;
   padding:16px 10px;
}




</style>