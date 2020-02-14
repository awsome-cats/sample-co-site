<template>
<div>
    <section class="briefing-card">
        <div class="wrapper">
            <div class="img">
                <h1 class="briefing-card-title">迷った方はまず説明会や体験会へ</h1>
                <p class="briefing-catch-copy">〇〇ではプログラミングやキャリアについて無料で学べる説明会・体験会を開催しております。<br>自身の人材価値を高めたい、新しいキャリアを目指したい方はご気軽にご参加下さい</p>
                <button class="briefing-btn" @click="toBriefingMain">
                <span class="btn">説明会・体験会に参加する</span>
            </button>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    methods: {
        toBriefingMain() {
            this.$router.push('/briefing-main')
        }
    }
}
</script>

<style scoped>

.briefing-card {
    padding-top:50px;
    padding-bottom:50px;
    width:100%;
    height:auto;
    margin-bottom:70px;
}

.wrapper {
    position: relative;
}

.briefing-card-title {
    position:absolute;
    top:20%;
    left:50%;
    transform:translate(-50%, -50%);
    font-size:2em;
    font-weight:bold;
    color:whitesmoke;
    width:80%;
    text-align:center;
}

.briefing-catch-copy {
    position:absolute;
    left:50%;
    top:25%;
    transform:translate(-50%, 25%);
    font-size:1.2rem;
    color:whitesmoke;
}

.briefing-btn {
    position:absolute;
    left:50%;
    top:80%;
    transform:translate(-50%, -80%);
    /* display: block; */
    width:270px;
    height:60px;
    border-radius:30px;
    margin:auto;
    background:linear-gradient(to left, #fdf4f2, #fce8e3 );
    transition-duration:.5s;
}

 .wrapper .img:hover button.briefing-btn {
    background:rgb(247, 88, 77);
    border:none;
    transition:.3s ease-in;
} 

 .wrapper .img:hover button.briefing-btn span.btn {
    color:whitesmoke;
    transition:.2s ease-in;
} 


.briefing-btn .btn {
    font-size:1.2rem;
    color:rgb(248, 106, 106);
    font-weight:500;
    transition-duration:.2s ease-in;
}

.wrapper .img{
    /* height:380px; */
    height:380px;
    width:100%;
    background: linear-gradient(to right, #e95555cb), url("~@/assets/briefing-img-sample01.jpg") no-repeat center;
    background-size:cover;
    /* background-position:center; */
  
}

@media screen and (max-width:1024px) {
    .briefing-card-title {
        position:absolute;
        top:20%;
        left:50%;
        transform:translate(-50%, -50%);
        font-size:2em;
        font-weight:bold;
        color:whitesmoke; 
        width:100%;
        text-align: center;
    }
    .briefing-catch-copy {
        position:absolute;
        left:50%;
        top:35%;
        transform:translate(-50%, 25%);
        font-size:1.2rem;
        color:whitesmoke;
        width:85%;
    }
    
}

@media screen and (max-width:768px) {
    .briefing-catch-copy {
        position:absolute;
        left:50%;
        top:30%;
        transform:translate(-50%, 30%);
    }
    .briefing-btn {
        left:50%;
        top:90%;
        transform:translate(-50%, -90%);
    }
}

@media screen and (max-width:860px) {
  .briefing-card {
      position:static;
      z-index:0;
    }
}

@media screen and (max-width:500px) {
    .briefing-card-title {
        font-size:1.9em;
        width:95%;
    }
    .briefing-catch-copy {
        font-size:1rem;
        width:95%;
    }
    .briefing-btn {
        width:250px;
        height:50px;
       
    }
 
}

@media screen and (max-width:414px) {
    .briefing-card-title {
        font-size:1.4em;
        width:95%;
    }
    .briefing-catch-copy {
        font-size:.8rem;
        width:95%;
    }
    .briefing-btn {
        left:50%;
        top:90%;
        transform:translate(-50%, -90%);
        width:250px;
        height:50px;
        border-radius:30px;
    }
 
}

</style>