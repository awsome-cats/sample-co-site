<template>
   <div class="feed-back">
      <ul>
         <li class="feed-back-list" 
            v-for="i in feedback" :key="i.id" >
            <div class="wrapp">
               <img :src="i.svg" alt="卒業生の顔画像">
               <h2>{{i.title}}</h2>
               <p>{{i.company}}</p>
               <p>{{i.name}}</p>
               <button>受講インタビュー</button>
            </div>
         </li>
      </ul>
   </div>
</template>

<script>

export default {
   props:{
      feedback:{
          type:Array
      }
   },
  data() {
     return {
       
     }
  }
}
</script>

<style lang="scss" scoped>

/* feedback section*/
.feed-back {
   /* background:chartreuse; */
   text-align: center;
   
}

.wrapp {
   border:1px solid #ccc;
   background:#fff;
   height:auto;
   width:100%;
   
}

.wrapp h2 {
   text-align: start;
   width:80%;
   margin:15px;
   font-size:1.3rem;
   
}

.wrapp p {
   margin:10px;
   text-align: start;
   
}

.wrapp button {
   width:180px;
   margin-top:20px;
   padding:10px;
   border-radius: 33px;
   background:crimson;
   box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
   border:none;
   cursor: pointer;
}

.feed-back-list  {
   display:inline-flex;
   justify-content: space-around;
   list-style: none;
   width:340px;
   height:500px;
   margin:15px;
   background:cyan;
   

}

.feed-back img {
   width:100%;
}

@media screen and (max-width:500px) {
   .feed-back-list {
      width:450px;
      height:auto;
      .wrapp button{
         margin-bottom:15px;
      }
   }
}

@media screen and (max-width:414px) {
   .feed-back-list {
      width:100%;
      height:auto;
      .wrapp button{
         margin-bottom:15px;
      }
   }
}

</style>