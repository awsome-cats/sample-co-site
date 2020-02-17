<template>
	<section>
		<div class="company-space">
			<h1>法人のお客様</h1>
		</div>
			<div class="company-card" v-for="item in info" :key="item.id">
				<div class="description">
					<h2>{{item.title}}</h2>
					<p>{{item.catchCopy}}</p>
					<router-link :to="item.path"><span>{{item.linkMessage}}</span></router-link>
				</div>
				<div class="img">
					<img :src="item.image" alt="">
				</div>
			</div>
			
			<!-- <div class="space" style="height: 200px; background:#ccc; margin-top:50px; margin-bottom:50px;">
				<p style="text-align:center; font-size:3rem;">width:{{width}}</p>
				<p style="text-align:center; font-size:3rem; padding-top:50px;">Height:{{height}}</p>
			</div> -->
   </section>
</template>

<script>
// dataのimport
import info from '@/api/info'
export default {
    data(){
      return {
         width:window.innerWidth,
			height:window.innerHeight,
			info
      }
	},
     methods: {
        //後で消す
        // windowのリサイズを検知
        handleResize() {
        // eslint-disable-next-line no-undef
        this.width = window.innerWidth;
        this.height = window.innerHeight;
       }
    },
    // 後で消す
    created() {
    window.addEventListener('resize', this.handleResize)
    
  }
}

</script>

<style lang="scss" scoped>

a {
	text-decoration: none;
}


.company-space h1{
   font-size:2rem;
   text-align: center;
   margin-bottom:30px;
}

.company-card{
   display:grid;
   grid-template-columns:1fr 1fr;
   grid-template-rows:1fr;
   max-width:980px;
   height:100%;
   background:white;
   border:1px solid rgba(236, 236, 236, 0.5);
	box-shadow:3px 3px 15px 5px rgb(245, 245, 245);
   margin:0 auto;
	margin-bottom:30px;
	align-content: center;
	
}

.company-card .img img {
   grid-column:2/3;
   grid-row:1/2;
	display:flex;
	width:100%;
	padding:8px;
	background:white;
}

.description {
   grid-column:1/2;
   grid-row:1/2;
   padding:10px;
	background:white;
}

.description h2 {
   font-size:2rem;
	font-family:cursive, sans-serif;
   font-weight:100;
	width:80%;
	color:rgb(29, 30, 32);
}

.description p {
   font-size:1.6rem;
   font-weight:200;
	background:linear-gradient(to left, #8d87df, #4f5494 );
   background-clip: text;
   -webkit-text-fill-color: transparent;
	width:80%;
	color:rgb(29, 30, 32);
}

.description a span{
	display:block;
	color:rgb(29, 30, 32);
	margin-top:100px;
}

.description ul {
   padding-left:19px;
}

.description ul li {
   font-size:.8rem;
   font-weight:300;
   padding-left:0;
   padding-top:5px;
   padding-bottom:5px;
}

/******* hoverの対応  *******/

.company-card:hover {
	border:1px solid rgb(24, 23, 29);
   box-shadow:3px 3px 15px 5px rgb(173, 173, 173);
	transition: All 0.7s;
}

.company-card:hover p {
	background:linear-gradient(to left, #df9987, #dd684b );
   background-clip: text;
   -webkit-text-fill-color: transparent;
}

/** hoverの対応  END**/

/******** MEDIA QUERY ********/

/** PC 対応 START**/


@media screen and (max-width:905px) {
	.description a span{
		margin-top:30px;
   }
}

@media screen and (max-width:886px) {
	.description h2 {
		font-size:1.5rem;
	}
	.description p {
		font-size:1.5rem;
	}
	.description a span{
		display:block;
		color:rgb(29, 30, 32);
		margin-top:40px;
   }
}

@media screen and (max-width:650px) {
	.company-card{
		display:grid;
		grid-template-rows: 200px 1fr;
		grid-template-columns:1fr;
		max-width:980px;
		margin-bottom:30px;
   }
	.description {
		padding:10px;
		padding-bottom:0;
		height:100%;
   }

	.description a span{
		margin-top:40px;
		
   }
	.company-card .img img {
		margin:0;
	}
}

/** PC 対応 END**/

/**Ipad 2 対応 START*/

@media screen and (max-width:1024px) {
	.company-card {
		margin:15px;
	}
}

/**Ipad 2 対応 END*/


/** IPad 対応 START**/

@media screen and (max-width:768px) {
	.description a span{
		margin-top:15px;
   }
	.description h2 {
		font-size:1.3rem;
	}
	.description p {
		font-size:1.2rem;
	}
}

/** IPad 対応 END**/

/** Media 414**/

@media screen and (max-width:414px) {
	.company-card {
		border:1px solid rgba(179, 178, 178, 0.5);
      box-shadow:5px 5px 15px 5px rgb(245, 245, 245);;
		.description p {
			font-weight: 600;
		}
	}
	
}


</style>