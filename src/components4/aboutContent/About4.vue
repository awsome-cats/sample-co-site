<template>
    <div>
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
        <section class="about-section">
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
       
       <section>

       </section>
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

<style scoped>
.about-header-title {
    width:100%;
    height:300px;
    background:rgb(245, 77, 77);
    padding:130px;
}

.about-header-title h2 {
    font-size:2rem;
    color:#fff;
    text-align: center;
    font-weight:200;
}

.about-header-subtitle {
    width:100%;
    height:200px;
}

.about-header-subtitle h2 {
    text-align: center;
    font-size: 1.5rem;
    padding-top:30px;
    font-weight:400;
    color:rgb(245, 77, 77);
}

.about-header-subtitle p {
    font-size: 1.2rem;
    padding-top:30px;
    font-weight:200;
    width:50%;
    margin:0 auto;
}

section.about-section {
    width:100%;
    background:rgb(233, 232, 232);
    margin-top:10px;
}

.about-contents-list {
    max-width: 980px;
    height:300px;
    display:flex;
    justify-content: space-around;
    text-align:center;
    padding-top:35px;
    margin:0 auto;
}

.about-contents-list .web-service {
    height:200px;
    margin:10px;
}


.about-contents-list .web-service img {
    width:150px;
   display:block;
    align-items:center;
}
</style>