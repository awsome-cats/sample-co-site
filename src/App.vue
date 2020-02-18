<template>
  <div id="app">
   <header class="site_header">
      <div class="h_inner">
         <h1 class="h_logo">
             <a href="#">LOGO</a>
         </h1>
         <!-----OPEN MENU  CLICK BUTTON----->
         <div id="nav-toggle" @click="openToggle">
            <div>
               <span></span>
               <span></span>
               <span></span>
               <span>MENU</span>
            </div>
         </div>
         <!-----OPEN MENU  CLICK BUTTON ---->
         <!-----NAV BAR PC & MOBILE ---->
         <nav class="g_nav" @click="closeToggle">
            <div class="inner">
               <p class="sp_logo">
                   <a href="#">LOGO</a>
               </p>
               <ul>
                  <li>
                     <router-link to="/">Top</router-link>
                  </li>
                  <li>
                      <router-link to="/about">学習内容</router-link>
                  </li>
                  <li>
                      <router-link to="/briefing-main">体験会</router-link>
                  </li><li>
                      <router-link to="/camp">Camp</router-link>
                  </li><li>
                      <a href="#">Mail</a>
                  </li>
               </ul>
            </div>
             <div class="overlay" @click="closeToggle"></div>
         </nav>
         <!-----NAV BAR PC & MOBILE ---->
      </div>
   </header>
   
   <!-- <div class="space" style="height: 500px; background:#ccc;">
     <p style="text-align:center; font-size:3rem; padding-top:100px;">width:{{width}}</p>
     <p style="text-align:center; font-size:3rem; padding-top:100px;">Height:{{height}}</p>
   </div> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
   name: 'app',
	components: {},
   data() {
      return {
        isActive:true,
        //windowのリサイズを検知
        width:window.innerWidth,
        height:window.innerHeight,
      }
	},
   methods: {
      // windowのリサイズを検知
      handleResize() {
      // eslint-disable-next-line no-undef
        this.width = window.innerWidth;
        this.height = window.innerHeight;
      },
      openToggle() {
        const openToggle = document.querySelector('.site_header');
        openToggle.classList.toggle('openNav');
      },
      closeToggle() {
        const header = document.querySelector('.site_header');
        header.classList.remove('openNav')
      }

	},
   created() {
      window.addEventListener('resize', this.handleResize)
      
   }
}
</script>

<style lang="scss">


*{
   margin:0;
   padding:0;
   box-sizing: border-box;
   font-size:16px;
}

html {
   font-family:Arial, Helvetica, sans-serif;
}

.site_header {
   width:100%;
   position: fixed;
   top:0;
   z-index:97;
   padding:25px 0;
   background:rgb(253, 250, 250);
   margin:0 auto;
   height:80px;
}

.h_logo {
   float:left;
   font-weight: bold;
   font-size:1rem;
   padding-left:10px;
   margin-top:10px;
}

.h_logo a {
   color:#000;
   text-decoration: none;
   font-size:1.4rem;
}

.g_nav {
   /* float:right; 使わない */
   padding-top:5px;
   display:flex;
   justify-content: flex-end;
   height:100%;
   z-index:97;
}

.g_nav li {
   margin-right:40px;
   list-style: none;
   flex-direction: row;
   display: inline;
}

.g_nav li:last-child {
   margin-right:20px;
}

.g_nav li a {
   color:#000;
   text-decoration: none;
   transition:color ease 0.4s;
}

#nav-toggle {
   display:none;
}

.g_nav .sp_logo {
   display: none;
}



/* media query */

// @media screen and (max-width:500px) {

//    .site_header {
//       position:static;
//    }
//    #nav-toggle {
//       display:block;
//       position:fixed;
//       right:0;
//       top:5px;
//       width:50px;
//       height:50px;
//       background-color:#ce7291;
//       padding:12px;
//       z-index:100;
//       border-bottom-left-radius:5px;
//       border-top-left-radius: 5px;
//       transition: All 0.5s;
//    }
//    .openNav #nav-toggle {
//       right:200px;
//    }
//    #nav-toggle div {
//       position:relative;
//    }
//    #nav-toggle span {
//       position: absolute;
//       width:100%;
//       border-bottom:2px solid #fff;
//       transition: All ease-in-out 0.4s;
//    }
//    #nav-toggle span:nth-child(1) {
//       top:1;
//    }
//    #nav-toggle span:nth-child(2) {
//       top:8px;
//    } 
//    #nav-toggle span:nth-child(3) {
//       top:16px;
//    }
//    #nav-toggle span:nth-child(4) {
//       top:23px;
//       border-bottom:none;
//       font-size:.6rem;
//       letter-spacing: 0;
//       color:#fff;
//    }
//    .openNav #nav-toggle span:nth-child(1) {
//       top:11px;
//       transform: rotate(-45deg);
//    }
//    .openNav #nav-toggle span:nth-child(2),
//    .openNav #nav-toggle span:nth-child(3) {
//       top:11px;
//       transform: rotate(45deg);
// 	}
//    .g_nav {
//       display:block;
//       margin-left:-2%;
//       flex:auto;
//       /* スクロールしても追従させるには*/
//       position:fixed;
//       top: 0;
//       right:0;
//       width:0;
//       height:100%;
//       box-sizing:border-box;
//       overflow:hidden;
//       padding-top:0;
//       transition:All ease 0.5s;
//    }
//    .openNav .g_nav {
//       z-index:99;
//       width:100%;
//       height:100%;
//    }
//    .g_nav .overlay {
//       width:100%;
//       height:100%;
//       background:rgba(0,0,0,0.3);
//       transition:All ease-in 0.3s;
//       z-index:97
//    }
//    .openNav .g_nav .overlay {
//       background:rgba(0,0,0,0.6);
//    }
//    .g_nav .inner {
//       width:200px;
//       height:100%;
//       background:#fff;
//       position: absolute;
//       right:-200px;
//       transition: All 0.5s;
//    }
//    .openNav .g_nav .inner {
//       right:0;
//       z-index:98;
//    }
//    .g_nav .sp_logo {
//       display: block;
//       padding:20px 0;
//       font-weight:bold;
//       font-size:1.3rem;
//       text-align:center;
//    }
//    .g_nav .sp_logo a {
// 		color: #000;
// 		text-decoration: none;
// 	}
// 	.g_nav ul{
// 		border-top: 1px solid #ccc;
// 		border-bottom: 1px solid #efefef;
// 	}
// 	.g_nav ul li{
// 		float: none;
// 		margin: 0;
// 		border-bottom: 1px solid #ccc;
// 		border-top: 1px solid #efefef;
// 	}
// 	.g_nav ul li a{
// 		display: block;
// 		padding: 20px 0;
// 		text-align: center;
// 	}

// }

@media screen and (max-width:414px) {

   .site_header {
      position:static;
   }
   #nav-toggle {
      display:block;
      position:fixed;
      right:0;
      top:5px;
      width:50px;
      height:50px;
      background-color:#ce7291;
      padding:12px;
      z-index:100;
      border-bottom-left-radius:5px;
      border-top-left-radius: 5px;
      transition: All 0.5s;
   }
   .openNav #nav-toggle {
      right:200px;
   }
   #nav-toggle div {
      position:relative;
   }
   #nav-toggle span {
      position: absolute;
      width:100%;
      border-bottom:2px solid #fff;
      transition: All ease-in-out 0.4s;
   }
   #nav-toggle span:nth-child(1) {
      top:1;
   }
   #nav-toggle span:nth-child(2) {
      top:8px;
   } 
   #nav-toggle span:nth-child(3) {
      top:16px;
   }
   #nav-toggle span:nth-child(4) {
      top:23px;
      border-bottom:none;
      font-size:.6rem;
      letter-spacing: 0;
      color:#fff;
   }
   .openNav #nav-toggle span:nth-child(1) {
      top:11px;
      transform: rotate(-45deg);
   }
   .openNav #nav-toggle span:nth-child(2),
   .openNav #nav-toggle span:nth-child(3) {
      top:11px;
      transform: rotate(45deg);
	}
   .g_nav {
      display:block;
      margin-left:-2%;
      flex:auto;
      /* スクロールしても追従させるには*/
      position:fixed;
      top: 0;
      right:0;
      width:0;
      height:100%;
      box-sizing:border-box;
      overflow:hidden;
      padding-top:0;
      transition:All ease 0.5s;
   }
   .openNav .g_nav {
      z-index:99;
      width:100%;
      height:100%;
   }
   .g_nav .overlay {
      width:100%;
      height:100%;
      background:rgba(0,0,0,0.3);
      transition:All ease-in 0.3s;
      z-index:97
   }
   .openNav .g_nav .overlay {
      background:rgba(0,0,0,0.6);
   }
   .g_nav .inner {
      width:200px;
      height:100%;
      background:#fff;
      position: absolute;
      right:-200px;
      transition: All 0.5s;
   }
   .openNav .g_nav .inner {
      right:0;
      z-index:98;
   }
   .g_nav .sp_logo {
      display: block;
      padding:20px 0;
      font-weight:bold;
      font-size:1.3rem;
      text-align:center;
   }
   .g_nav .sp_logo a {
		color: #000;
		text-decoration: none;
	}
	.g_nav ul{
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #efefef;
	}
	.g_nav ul li{
		float: none;
		margin: 0;
		border-bottom: 1px solid #ccc;
		border-top: 1px solid #efefef;
	}
	.g_nav ul li a{
		display: block;
		padding: 20px 0;
		text-align: center;
	}

}

</style>