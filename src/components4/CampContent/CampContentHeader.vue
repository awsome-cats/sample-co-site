<template>
   <header class="header-content">
      <div class="camp-body" @click="toBriefingMain">
         <div class="briefing-box">
            <img :src="item.campHeaderContent.svgTextImage" alt="プログラミングスクールの説明">
            <router-link to="/briefing-main">
               <p class="briefing-msg" >無料プログラミング体験会へ参加する</p>
            </router-link>
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

<style scoped>
   .header-content {
      background:#fff;
      margin-bottom: 5vh;
      padding-top:2vh;
      padding-bottom:10px;
      width:94%;
   }

   .camp-body {
      width:100%;
      margin:0 auto;
      background:white;
      display:grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      align-items: center;
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
      width:110%;
      text-align: center;
   }

   .briefing-msg {
      position: relative;;
      top:-70%;
      left:10%;
      transform: translate(10%, -70%);
      background:rgb(255, 27, 11);
      height:50px;
      width:70%;
      border-radius: 33px;
      padding:10px;
   }

</style>