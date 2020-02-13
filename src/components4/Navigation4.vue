<template>
    <!--保存用 使用時はApp.vueにidを付与してしようする---->
    <div>
        <nav>
          <div class="hamburger">
              <div class="wrapper" @click="openToggle">
                  <div class="line" ></div>
                  <div class="line"></div>
                  <div class="line"></div>
              </div>
          </div>
          <ul class="swichClass">
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
              <li><a>Project</a></li>
          </ul>
        </nav>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      //windowのリサイズを検知
      width:window.innerWidth,
      height:window.innerHeight
     
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
      const openList = document.querySelector('.swichClass');
      openList.classList.toggle('active');
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
}

#app {
  width:100%;
  height:100%;
  font-family: Arial, Helvetica, sans-serif;
}
nav {
    width:100%;
    background:#00316b;
    position:relative;
    // margin-bottom:100px;
}

ul {
    // display:flex;
    // justify-content: flex-end;
    padding:.4rem;
    width:100%;
    
}
   
ul li {
    list-style: none;
    display:inline-block;
    padding:18px;
     position:relative;
        z-index:2;
    //background:burlywood;
}

ul li:hover {
    background:black;
}

ul li a {
    color:#fff;
    text-decoration: none;
}

.hamburger {
    // display:flex;
    width:100%;
    height:70px;
    text-align: right;
    box-sizing: border-box;
    padding:20px 30px;
    background:#3178ce;
    display:none;
    
    
}
.wrapper {
    width:10%;
    height:150%;
    margin-left:auto;
    cursor: pointer;
    
}

.line {
    width:30px;
    margin:7px;
    background-color:#fff;
    height:3px;
    margin-left:auto;
}

// Navgation
@media screen and (max-width:768px) {
    nav {
       position:relative;
       z-index:20;
    }
    .hamburger {
        display: block;
    }
    ul {
      position:relative;
      z-index:30;
      width:100%;
      display:none;
    }
            
    ul li {
        display:block;
        text-align: center;
        cursor: pointer;
        animation:fade-in .5s ease-in-out;
        opacity:1;
    }
    .active {
        display:block;
       
       
    }
    
    @keyframes fade-in {
      from {
        display: none;
        opacity: 0;
      }
      to {
        display: block;
        opacity: 1;
      }
    }
}
        

</style>