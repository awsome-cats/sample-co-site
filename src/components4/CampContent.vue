<template>
   <div class="camp-content-container">
      <CampContentHeader :item="campcontent"/>
      <CampSolution :item="campcontent"/>
      <OfferMsg 
      :item="campcontent" 
      :feedback="feedback"
      :campsupport="campsupport"
      :campoffer="campoffer"
      :camplearning="camplearning"
      :campvalue="campvalue"
      :question="question"
      />
      <Footer/>
   </div>
</template>

<script>
// data
import campcontent from '@/api/campcontent'
import feedback from '@/api/feedback'
import campsupport from '@/api/campsupport'
import campoffer from '@/api/campoffer'
import camplearning from '@/api/camplearning'
import campvalue from '@/api/campvalue'
import question from '@/api/question'
import Footer from '@/views/Footer'


// campのcomponent
import CampContentHeader from '@/components4/CampContent/CampContentHeader'
import CampSolution from '@/components4/CampContent/CampSolution'
import OfferMsg from '@/components4/CampContent/OfferMsg'

export default {
   components:{CampContentHeader, CampSolution, OfferMsg, Footer},
   data() {
      return {
         campcontent,
         feedback,
         campsupport,
         campoffer,
         camplearning,
         campvalue,
         question
      }
   }
}
</script>

<style scoped>

*{
   margin:0;
   padding:0;
   box-sizing: border-box;
}
.camp-content-container {
   width:100%;
   margin:0;
}
</style>

