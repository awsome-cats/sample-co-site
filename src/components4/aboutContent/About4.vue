<template>
    <div>
        <section>
            <div class="about-header-title">
                <h2>月額¥13,000円で最新最新の技術を学び放題</h2>
            </div>
            <div class="about-header-subtitle">
                <h2>学習コンテンツ</h2>
                <p>
                    普通のスクールなら学ぶのに10万円近く必要なコンテンツが月額制ですべて学び放題。
                    常に最新のプログラミングが学べる場所はコーディングCAMPだけです。
                </p>
            </div>
        </section>
        <section class="about-image">
            <div class="about-contents-list" >
                <div class="web-service" v-for="i in aboutService" :key="i.id">
                    <a href="">
                        <img :src="i.svg" alt="">
                        <span>{{i.title}}</span>
                    </a>
                </div>
            </div>
        </section>
        <!---Section v-for------>
       <AboutWebService :svg="aboutServiceContents"/>
       <Briefing/>
        <Footer/>
    </div>
</template>

<script>
// data
import aboutService from '@/api/aboutService.js'
import aboutServiceContents from '@/api/aboutServiceContents'

// component
import AboutWebService from '@/components4/aboutContent/AboutWebService'
import Briefing from '@/views/Briefing'
import Footer from '@/views/Footer'

export default {
    components:{AboutWebService, Briefing, Footer},
    data() {
        return {
            aboutService,
            aboutServiceContents
        }
    }
}
</script>

<style lang="scss" scoped>
.about-header-title {
    width:100%;
    height:200px;
    background:rgb(245, 77, 77);
    margin-top:100px;
    display:flex;
    justify-content: center;
    align-items: center;
}

.about-header-title h2 {
    font-size:2rem;
    color:#fff;
    // text-align: center;
    font-weight:200;
    // height:200px;
}

.about-header-subtitle {
    width:100%;
    height:auto;
    h2 {
        text-align: center;
        font-size: 1.5rem;
        padding-top:30px;
        font-weight:400;
        color:rgb(245, 77, 77);
    }
    p {
        font-size: 1.2rem;
        padding-top:30px;
        padding-bottom: 30px;
        font-weight:400;
        width:70%;
        margin:0 auto;
    }
}


section.about-image {
    width:100%;
    background:rgb(233, 232, 232);
    margin-top:10px;
    .about-contents-list {
        max-width: 980px;
        // background:chartreuse;
        height:auto;
        display:flex;
        justify-content:space-around;
        text-align:center;
        padding:45px;
        margin:0 auto;
        .web-service {
            height:auto;
            // background:chocolate;
            padding:20px;

            img {
                width:180px;
                display:block;
                align-items:center;
            }
            span {
                text-decoration: none;
                color:black;
                // background:cornflowerblue;
                font-weight: 500;
            }
        }
    }
}

// Media Query
@media screen and (max-width:500px) {
    .about-header-title {
        height:140px;
        margin-top: 10px;
    }
    .about-header-title h2 {
        font-size:1.5rem;
    }
    .about-image{
        height:auto;
        background:cyan;
        .about-contents-list {
            // background:cyan;
            height:auto;
            flex-direction: column;
            align-items: center;
            
            .web-service {
                
                background:rgb(248, 247, 247);
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
                width:100%;
                margin:10px;
                border-radius: 20px;
                display: flex;
                justify-content: center;
                a img {
                    width:250px;
                    // background:chartreuse;
                    margin-bottom:25px;
                }
                a span {
                    font-size:1.4rem;
                    font-weight: 400;
                    background:rgb(240, 96, 96);
                    border-radius: 9px;
                    padding:5px;
                    color:#fff;
                    box-shadow: 0 3px 10px 0 rgba(0,0,0,0.1), 0 6px 20px 0 rgba(0,0,0,0.19);
                }
               
        }
        }
        
           
        
    }
}
</style>