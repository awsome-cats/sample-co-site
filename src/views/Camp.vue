<template>
	<section>
         <div class="grid-css">
            <div class="item" v-for="product in product" :key="product.id" data-aos="fade-up" 
                  data-aos-duration="1500">
                <p>{{product.locale}}</p>
                <h2>{{product.courseName}}</h2>
                <h3>{{product.catchCopy}}</h3>
                <img :src="product.image" alt="">
                
                <h4>こんな方へおすすめ</h4>
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
                <router-link :to="product.path"><span>詳細はこちら</span></router-link>
            </div>
         </div>
   </section>
</template>

<script>

export default {
   props:{
      product:{
         type:Array,
         required:true
      }
   },
   methods: {
   }
}
</script>

<style scoped>
/** 1280pxならコンテンツを4つ並べられる**/

section a {
	text-decoration: none;
}
.grid-css {
   display:grid;
   grid-auto-rows: 1fr;
   grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
   grid-gap:1em;
   margin: 0 0 2em;
   max-width:1280px;
   margin:auto;
}

.grid-css .item:hover {
   border:1px solid rgb(24, 23, 29);
   box-shadow:3px 3px 15px 5px rgb(173, 173, 173);
	transition: All 0.7s;
}

.grid-css p {
	font-size:1.2rem;
	color:rgb(56, 57, 59);
}

.grid-css h2 {
	color:rgb(49, 44, 49);
}

.grid-css h3 {
	background:linear-gradient(to left, #8d87df, #4f5494 );
   background-clip: text;
   -webkit-text-fill-color: transparent;
}

.grid-css > div {
   background:#eee;
   overflow: auto;
   min-width:0;
   padding:1em;
}

.grid-css ul {
   padding-left:19px;
}

.grid-css ul li{
   font-size:.8rem;
   font-weight:300;
   padding-left:0;
   padding-top:5px;
   padding-bottom:5px;
}

div.item > img {
   height:auto;
   max-width:100%;
  
   padding:0 0 1em;
   margin-bottom:1em;
   /* background-image:url('@/assets/higher-grader-img-sample01.jpg');
   background-size:cover; */
}

@media screen and (max-width:1280px) {
   .grid-css {
      max-width:900px;
   }
}

</style>