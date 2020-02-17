<template>
   <header class="header-content">
      <div class="camp-body" @click="toBriefingMain">
         <div class="briefing-box">
            <div>
               <img :src="item.campHeaderContent.svgTextImage" alt="プログラミングスクールの説明">
            </div>
            <div>
               <router-link to="/briefing-main">
               <p class="briefing-msg" >無料プログラミング体験会へ参加する</p>
            </router-link>
            </div>
         </div>
         <div class="header-visual-bg">
            <img class="image" :src="item.campHeaderContent.svg" alt="camp画像">
         </div>
      </div>
   </header>
</template>

<script>
export default {
   props:{
      item:Object
   },
   methods: {
      toBriefingMain() {
          this.$router.push('/briefing-main')
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
   .header-content {
      padding-bottom: 30px;
      padding-top:110px;
      width:100%;
      height:auto;
      max-width:1300px;
      margin:0 auto;
   }

   .camp-body {
      width:100%;
      height:auto;
      margin:0 auto;
      background:#fff;
      display:grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      align-items: center;
      align-content: center;
   }

   .briefing-box {
      grid-column: 1/2;
      grid-row: 1/2;
      position: relative;
      width:100%;
   }

   .briefing-box a {
      text-decoration: none;
   }

   .briefing-box p {
      color:#fff;
      text-align: center;
   }

   .header-visual-bg {
      grid-column: 2/3;
      grid-row: 1/2;
      width:100%;
      text-align: center;
   }

   .briefing-msg {
      position: relative;;
      top:-70%;
      left:10%;
      transform: translate(10%, -70%);
      background:rgb(255, 27, 11);
      height:auto;
      width:70%;
      border-radius: 33px;
      padding:10px;
   }
   
   @media screen and (max-width:414px) {
      .header-content {
         padding-top:10px;
         padding-bottom:20px;
         // max-width: 400px;
         background:blanchedalmond;
         .briefing-box {
            padding-top:10px;
          p {
             font-size:.4rem;
          }
         }
      }
      
      
      
   } 
</style>