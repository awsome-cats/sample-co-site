<template>
  <div>
      <h2>Form</h2>
      <form name="contact" method="POST" data-netlify="true" 
      netlify-honeypot="bot-field"
      @submit.prevent="sendForm"
      >
      
      <span v-for="e in errors" :key="e">{{e}}</span>
      
      <p class="hidden" style="display:none;">
        <label>Don't fill this out if you're human:
          <input name="bot-field"/>
        </label>
      </p>
      
      <section v-if="step == 1">
         <h3>Step1</h3>
         <input v-model="form.name" type="text" name="name" id="" placeholder="name...">
      </section>
      <section v-if="step == 2">
          <h3>Step2</h3>
          <input v-model="form.email" type="email" name="email" id="" placeholder="email address...">
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

</style>