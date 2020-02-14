<template>
  <div class="card container">
     <div class="card-body">
        <form name="contact"
         method="POST" 
         data-netlify="true" 
         netlify-honeypot="bot-field"
         @submit.prevent="sendForm"
      >
      
      <span 
      v-for="e in errors" 
      :key="e"
      class="text-danger"
      >{{e}}</span>
      
      <p class="hidden" style="display:none;">
        <label>Don't fill this out if you're human:
          <input name="bot-field"/>
        </label>
      </p>
      
      <section 
         v-if="step == 1"
         class="form-row"
         >
         <div class="text-center step">
            <h3>Step1</h3>
         </div>
         <div class="form-group col-md-12">
            <label>お名前</label>
            <input 
            v-model="form.name" 
            type="text" 
            name="name" 
            id="name" 
            placeholder="name..."
            class="form-control"
            >
         </div>
         <!----  step1 Ghost  Start---->
         <div class="form-group text-center grayscale-step">
            <div class="text-center">
               <h3 >Step2</h3>
            </div>
            <div class="form-group">
               <p style="font-size:1.8rem;">Emailを入力して下さい</p>
            </div>
         </div>
      </section>
         <!----  step1 Ghost  End---->
      
      <section v-if="step == 2">
         <div class="text-center step">
            <h3 >Step2</h3>
         </div>
          <input 
          v-model="form.email" 
          type="email" name="email" 
          id="email" 
          placeholder="email address..."
          class="form-control"
          >
      </section>

      <section v-if="step == 3">
          <h3>Step3</h3>
          <textarea v-model="form.message" name="message" id="" cols="30" rows="10" placeholder="message..."></textarea>
      </section>
      
      <button 
      v-if="step != totalsteps"
      @click.prevent="nextStep"
      >
      次へ
      </button>
      <button 
      v-if="step != 1 "
      @click.prevent="prevStep"
      >
      一つ戻る
      </button>
      <input 
      v-if="step == 3"
      type="submit"
      >
      </form>
     </div>
      
      
   </div>
</template>

<script>
import axios from 'axios'
export default {
   data() {
      return {
         step:1,
         totalsteps:3,
         errors: [],
         form: {
            name:'',
            email: '',
            message: ''
         }
      }
      
   },
   methods: {
      nextStep() {
         if (this.step == 1) {
            if(!this.form.name) {
               this.errors = '名前を入力してください .'
               return false
            } 
         }

         if (this.step == 2) {
            if(!this.form.email) {
               this.errors = 'emailを入力してください .'
               return false
            }
         }
        this.step++
      },
       prevStep() {
        this.step--
      },
      encode(data) {
         return Object.keys(data)
         .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
         .join('&')
      },
      sendForm() {
         if (this.step == 3) {
            if(!this.form.message) {
               this.errors = 'messageを入力してください .'
               
            } else {
               const axiosConfig = {
                  header:{
                     "Content-Type": "application/x-www-form-urlencoded"
                  }
               };
               axios.post('/', this.encode({
                  "form-name": "contact",
                  ...this.form
               }), axiosConfig)
               .then(() => this.$router.push({path: "success"}))
               .catch(() => this.$router.push({ path: "fail"}))
            }
         }
         // this.errors = null
      }
   }
   
}
</script>

<style scoped>

.step {
   width:500px;
   height:80px;
   color:rgb(221, 87, 87);
   margin:0 auto;
}

.grayscale-step {
   width:500px;
   height:150px;
   color:rgb(156, 153, 153);
   margin:0 auto;
   margin-bottom:20px;
   margin-top:20px;
}

</style>