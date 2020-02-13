<template>
    <div>
        <nav>
        <div class="hamburger">
            <div class="wrapper" @click="isActive=!isActive">
                <div class="line" ></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
        <ul :class="{active:isActive, close: !isActive}">
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><a>Project</a></li>
        </ul>
    </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive:true
        }
    }
}
</script>

<style scoped>

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
nav {
    width:100%;
    background:#00316b;
    position:relative;
    margin-bottom:100px;
}

ul {
    display:flex;
    justify-content: flex-end;
    padding:.4rem;
    width:100%;
    
}
   
ul li {
    list-style: none;
    display:inline-block;
    padding:30px;
    background:burlywood;
}

ul li:hover {
    background:black;
}

ul li a {
    color:#fff;
    text-decoration: none;
}

.hamburger {
    display:flex;
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
@media screen and (max-width:768px) {
    .hamburger {
        display: block;
    }
    ul {
        width:100%;
        /* display: none; */
        
    }
            
    ul li {
        display:block;
        text-align: center;
        cursor: pointer;
    }
    .active {
        display:block;
    }
    .close {
        display:none;
    }
}
        

</style>