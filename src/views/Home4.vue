<template>
   <div>
      <section class="section-meet-up">
         <div class="meet-up2">
            <div class="meetup-title">
               <h2>あなたの人材価値を劇的に高める機会を提供します</h2>
            </div>
            <div class="icon2">
               <div>
                  <i class="fas fa-chevron-circle-up"></i>
                  <p>キャリアアップ<br>年収アップ</p>
               </div>
               <div>
                  <i class="fas fa-radiation-alt"></i>
                  <p>転職で充実した毎日へ</p>
               </div>
               <div>
                  <i class="fab fa-adn"></i>
                  <p>フリーランス・副業で<br>自由に働く</p>
               </div>
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

<style lang="scss" scoped>
.section-meet-up {
   padding-top:150px;
   padding-bottom:50px;
   .meet-up2 {
      display:grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: repeat(auto-fill, minmax(300px, 100%));
      background-color:white;
      padding:1em;
      border:1px solid #aaa;
      grid-gap:5px;
      width:100%;
      height:auto;
      max-width:1280px;
      .icon2 {
         display:flex;
         justify-content: center;
         align-content: center;
         div {
            margin:0 20px;
         }
         i{
            font-size:2.3rem;
         }
      }
   }
}


.meet-up2 > div {
   margin:0 auto;
   text-align: center;
}


@media screen and (max-width:1280px) {
   .section-meet-up {
      max-width:900px;
      margin:auto;
   }
}

@media screen and (max-width:414px) {
   .section-meet-up {
      margin-top:10px;
      padding-top:10px;
      .meet-up2 {
         grid-template-rows: 100px auto;
         padding-bottom:0;
         margin-bottom:0;
      }
      .meetup-title h2{
         font-size:1.4rem;
      }
      .icon2 {
        margin:10px;
        div {
            margin-bottom:15px;
        }
        i {
           margin-bottom:10px;
        }
        p {
           font-size:.8rem;
        }
      }
   }
}

</style>