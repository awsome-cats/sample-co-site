<template>
   <div>
      <section class="section-meet-up">
         <div class="meet-up2">
            <div class="container-blue2">
               <h2>あなたの人材価値を劇的に高める機会を提供します</h2>
            </div>
            <div class="icon2">
               <i class="fas fa-chevron-circle-up"></i>
               <p>キャリアアップ<br>年収アップ</p>
               <i class="fas fa-radiation-alt"></i>
               <p>転職で充実した毎日へ</p>
               <i class="fab fa-adn"></i>
               <p>フリーランス・副業で<br>自由に働く</p>
            </div>
         </div>
      </section>
      <Camp :product="products"/>
      <Briefing/>
      <ForCompany />
      <Footer/>
   </div>
</template>

<script>
// componentのimport
import Camp from './Camp'
import Briefing from './Briefing'
import ForCompany from './ForCompany'
import Footer from './Footer'
// dataのimport
import products from '@/api/products'

export default {
   components:{Camp, Briefing, ForCompany, Footer},
   data() {
      return {
         products
		}
   }
}
</script>

<style scoped>
.section-meet-up {
   padding-top:50px;
   padding-bottom:50px;
}

.meet-up2 {
   /* position:relative; */
   display:grid;
   margin: 0 0 1em;
   grid-template-rows: 1fr 1fr;
   grid-template-columns: repeat(auto-fill, minmax(300px, 100%));
   background-color:white;
   padding:1em;
   border:1px solid #aaa;
   grid-gap:1em;
   max-width:1280px;
   margin:auto;
}

.meet-up2 > div {
   padding:10px;
   /* background-color:#ddd; */
   text-align: center;
}

.meet-up2 .icon2 {
   display:flex;
   justify-content: space-around;
}

.icon2 i{
   font-size:2.3rem;
}

@media screen and (max-width:1280px) {
   .section-meet-up {
      max-width:900px;
      /* background-color:#ccc; */
      margin:auto;
   }
}

</style>