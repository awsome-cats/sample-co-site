<template>
   <section class="service-content-wrapp">
           <div class="service-head" v-for="i in svg" :key="i.id">
              <div class="service-title-section">
                  <div class="service-title">
                     <h2>{{i.title}}</h2>
                  </div>
                  <div class="service-sub-title">
                     <p>学習時間<br>60~180時間</p>
                  </div>
              </div>
              
              <div class="service-content">
                 <img :src="i.svg" alt="">
                  <div class="service-user-recommend">
                     <h3>こんな方にオススメです</h3>
                     <ul>
                        <li>プログラミングやWebサービスの仕組みを理解したい方</li>
                        <li>未経験から自分だけのWebサービスを作ってみたい方</li>
                        <li>教養としてプログラミングを学びたい方</li>
                     </ul>
                  </div>
              </div>
              
              <div class="skill-wrapper">
                  <div class="skills-list">
                     <h4>身につくスキル</h4>
                     <ul>
                        <li>プログラミングの汎用的な概念と文法を理解できる</li>
                        <li>HTMLとCSSを使ってWebページを構築できる</li>
                        <li>Ruby on Railsを使ってWebサービスを0から構築できる</li>
                        <li>JavaScriptを用いてサイトに動きをつけることができる</li>
                        <li>SQLを使ってDBからデータを抽出することができる</li>
                     </ul>
                  </div>
                  <div class="button">
                     <button>Webサービス開発を体験したい方</button>
                  </div>
               </div>
           </div>
      </section>
</template>

<script>
export default {
   props:{
      svg: {
         type:Array
      }
   }
}
</script>

<style lang="scss" scoped>

section.service-content-wrapp {
   max-width:980px;
   width:100%;
   height:100%;
   margin:0 auto;
   margin-top:30px;
   .service-head {
      margin:20px;
      background:rgb(255, 250, 244);
      border:1px solid #ccc;
      box-shadow:4px 3px 10px -2px #ccc;
      .service-title-section {
         display:flex;
         height:100%;
         width:100%;
         background:rgb(80, 80, 80);
         .service-title {
            color:black;
            width:90%;
            height:100%;
            h2 {
               font-size: 1.6rem;
               color:#fff;
               padding-top:7px;
               padding-left:7px;
               height:100%;
            }

         }
         .service-sub-title {
            color:#fff;
            width:50%;
            height:100%;
            p {
               height:auto;
               float:right;
               font-size:1.5rem;
               color:#fff;
               padding-right:8px;
               padding-top:7px;

            }
         }
      }
   }
   // ここから
   div.service-content {
      width:100%;
      display:flex;
      justify-content: flex-start;
      margin:10px;
      img {
         height:150px;
         padding:10px;
      }
      .service-user-recommend {
         width:100%;
         text-align: left;
         margin-left:80px;
         h3 {
            font-size:1.3rem;
            color:red;
         }
         ul {
            width:80%;
            margin-top:20px;
            li {
               list-style: none;
               color:black;
               line-height: 30px;
            }
         }
      }
   }
   
   .skill-wrapper {
      width:100%;
      padding-bottom:10px;
      height:auto;
      padding:30px;
      .skills-list {
         background:#fff;
         border:1px solid #ccc;
         width:100%;
         padding:30px;
         border:1px solid #ccc;
         border-radius:2px 2px 10px 10px;
         margin-bottom:20px;
      h4 {
         font-size:1.3rem;
         color:black;
         text-align:center;
         padding:10px;
      }
      ul {
         width:100%;
         margin-bottom: 20px;
         margin-left:30px;
         li {
            list-style-type: square;
         }
      } 
   }
   .button {
         margin:0 auto;
         text-align: center;
         button {
            background:rgb(252, 92, 19);
            border-radius:20px;
            max-width:400px;
            width:100%;
            color:#fff;
            padding:10px;
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
            border:none;
            cursor: pointer;
         }
      }
  }
   
}

//Media Query 375px

@media screen and (max-width:375px) {
   .service-content-wrapp {
      width:100%;
      height:auto;
      box-shadow:5px 5px 15px 2px rgb(243, 243, 243);
      .service-head {
         background:darkcyan;
         height:auto;
         max-width:375px;
         
         // Title
         .service-title-section {
            flex-direction: column;
            align-items: center;
            .service-title {
               text-align: center;
               padding-top:7px;
               padding-bottom:7px;
               width:100%;
            }
            .service-sub-title {
               padding-top:7px;
               width:100%;
               height:auto;
               p {
                  width:100%;
                  height:auto;
                  text-align: center;
               }
            }
         }
         // ここから
         // Content
         div.service-content {
            display:flex;
            flex-direction: column;
            justify-content: center;
            margin:0;
            img {
               height:auto;
               width:100%;
               margin:0;
               padding:20px;
            }
            .service-user-recommend {
               display:flex;
               flex-direction: column;
               align-items: center;
               margin:0 auto;
               h3 {
                  margin:0 auto;
                  font-size: 1.4rem;
               }
               ul {
                 width:90%;
                 padding:0px 10px;
               }
               li {
                  font-size: 1rem;
                  list-style:square;
                  width:90%;
                  margin:0 auto;
                  
               }
            }
         }
         
         
         .skill-wrapper {
            margin:0;
            padding:10px;
            .skills-list {
               width:100%;
               h4 {
                  font-weight: 400;
                  font-size: 1.4rem;
               }
               ul {
                  width:100%;
                  margin-bottom:0px;
                  margin-left:0px;
                  
                  li {
                     line-height: 30px;
                  }
               }
            }

            .button {
               button {
                  width:100%;
                  height:auto;
               }
            }
         }
      }
   }
}

// Media Query 768px 

@media screen and (max-width:768px){
   section.service-content-wrapp {
      .service-head {
         .skill-wrapper {
            .skills-list {
              
               height:auto;
               ul {
                  line-height: 160%;
                  height:100%;
                  //background:darkmagenta;
                  li {
                      font-size:1rem;
                  }
               }
            }
         }
      }
   }
}














</style>