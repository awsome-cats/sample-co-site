<template>
   <section>
      <div>
         <h2>メディア掲載実績</h2>
         <p>テレビ、新聞、雑誌など、数多くのメディアに取り上げていただいています。</p>
      </div>
      <div class="media-info">Media</div>
   </section>
</template>

<script>
export default {
   
}
</script>

<style lang="scss" scoped>

section {
  margin-bottom: 50px;
}

h2,
p {
   margin:20px;
}

h2 {
   font-size:2rem;
   border-top:1px solid #ccc;
   margin-top:50px;
   padding-top:30px;
}

.media-info {
   width:70%;
   height:230px;
   box-shadow:3px 3px 7px 5px rgb(226, 226, 226);
   margin:0 auto;
   text-align: center;
   font-size:2rem;
   margin-top:60px;
}

@media screen and (max-width:500px) {
   div {
      h2 {
         text-align: center;
      }
       p {
         
         margin: 10px 20px;
      }
   }
   .media-info {
      width:90%;
      margin:0 auto;
      height:auto;
   }

}

</style>