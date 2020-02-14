<template>
  <footer class="footer-section">
   <div class="wrapper">
     <p>〇〇へのご質問・ご不明点がありましたらFAQをご確認の上、運営事務局までお問い合わせ下さい。<br>メール:info@〇〇.com</p>
     <p>※通常ご連絡下頂いた後二日頂いております。<br>現在、お電話でのお問い合わせ窓口はございません。</p>
   </div>
   <div class="copy"><p>Copyright 2020</p></div>
   <router-link to="/test-link">test-linkへ</router-link>
   <router-link to="/test-link/:id">test-linkのidへ</router-link>
  </footer>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.footer-section {
  width:100%;
  height:auto;
  padding:15px;
  .wrapper {
    max-width: 800px;
    width:100%;
    height: auto;
    margin:0 auto;
    padding-top:20px;
    padding-left:20px;
    text-align: left;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size:.8rem;
    border: 1px solid #ccc;
  }
  .copy {
    text-align: center;
    color:darkgray;
    font-size:1.2rem;
    padding-top:30px;
  }
}


@media screen and (max-width:1024px) {
  footer.footer-section {
    margin:0 auto;
  }
}


@media screen and (max-width:768px) {
  footer.footer-section .wrapper{
   
    padding:20px 10px;
   
    
    p {
      font-size:.8rem;
    }
  }
}

@media screen and (max-width:414px) {
  footer.footer-section .wrapper {
    background:#ccc;
    p {
      width:100%;
      font-size:.3rem;
      padding:0;
      margin:0;
      color:red;
    }
  }
}
</style>