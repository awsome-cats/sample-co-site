<template>
   <div>
      <div>
         <h2>日本最高クラスの実績</h2>
      </div>
      <div class="level-of-satisfaction">
         <div class="level">
            <h2>受講満足度</h2>
            <p>98%</p>
         </div>
         <div class="count-students">
            <h2>累計受講者数</h2>
            <p>10,000<span>人</span></p>
         </div>
      </div>
   </div>
   
</template>

<script>
export default {
   
}
</script>

<style scoped>
h2,
.level-of-satisfaction {
   margin:30px;
}

h2 {
   font-size:2rem;
}

.level-of-satisfaction {
   display:flex;
   justify-content: space-between;
}

.level,
.count-students {
   display: flex;
   flex-direction: column;
   box-shadow:3px 3px 7px 5px rgb(226, 226, 226);
}

.level h2,
.count-students h2 {
   font-size:2rem;
   text-align: center;
}

.level p,
.count-students p {
   font-size: 4rem;
   font-weight: 600;
   text-align: center;
   color:rgb(238, 112, 74);
}

.level,
.count-students {
   width:650px;
   height:240px;
}

</style>