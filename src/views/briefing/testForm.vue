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
      
         <section v-if="step == 1">
            <div class="form-row">
               <div class="text-center step">
                  <h3>Step1</h3>
               </div>
               <div class="form-group col-md-6">
                  <label>姓</label>
                  <input v-model="form.firstName" 
                  class="form-control" 
                  type="text" 
                  placeholder="姓を入力して下さい" >
               </div>
                  
               <div class="form-group col-md-6">
                  <label>名</label>
                  <input v-model="form.lastName" 
                  class="form-control" 
                  type="text" 
                  placeholder="名を入力して下さい"
                  >
               </div>
            </div>
            
            <!----  step1 Ghost  Start---->
            <div class="form-group text-center grayscale-step 
            mb-5 mt-3">
               <div class="text-center">
                  <h3 >Step2</h3>
               </div>
               <div class="form-group">
                  <p style="font-size:1.8rem;">
                     年齢を入力して下さい
                  </p>
               </div>

               <div class="text-center">
                  <h3 >Step3</h3>
               </div>
               <div class="form-group">
                  <p style="font-size:1.8rem;">
                     Emailを入力して下さい
                  </p>
               </div>
            </div>
         </section>
            <!----  step1 Ghost  End---->

         <section v-if="step == 2" >
            <div class="text-center step">
                  <h3 >Step2</h3>
            </div>
            <div class="form-group">
               <label>年齢を入力してください</label>
               <input 
               v-model="form.age"
               class="form-control" 
               type="number" placeholder="年齢を入力して下さい">
            </div>
            <!----  step2 Ghost  Start ---->
            <div class="form-group text-center grayscale-step mb-5 mt-3">
               <div class="text-center">
                  <h3 >Step3</h3>
               </div>
               <div class="form-group">
                  <p style="font-size:1.8rem;">
                     Emailを入力して下さい
                  </p>
               </div>

               <div class="text-center">
                  <h3 >Step4</h3>
               </div>
               <div class="form-group">
                  <p style="font-size:1.8rem;">
                     メッセージを入力して下さい
                  </p>
               </div>
            </div>
            <!----  step2 Ghost  End ---->

         </section>

         <section v-if="step == 3">
            <div class="text-center step">
               <h3 >Step3</h3>
            </div>
            <input 
            v-model="form.email" 
            type="email" name="email" 
            id="email" 
            placeholder="email address..."
            class="form-control"
            >

            <!----  step3 Ghost  Start ---->
            <div class="form-group text-center grayscale-step mb-3 mt-3">
               
               <div class="text-center">
                  <h3 >Step4</h3>
               </div>
               <div class="form-group">
                  <p style="font-size:1.8rem;">
                     メッセージを入力して下さい
                  </p>
               </div>
            </div>
            <!----  step3 Ghost  End ---->
         </section>

         <section 
         v-if="step == 4"
         >
            <div class="text-center step">
               <h3>Step4</h3>
            </div>
            <textarea 
            v-model="form.message" 
            name="message" id="message" 
            cols="30" rows="10" 
            placeholder="message..."
            class="form-control mb-5" 
            >
            </textarea>
         </section>

         <div class="text-center">
            <button
            v-if="step != totalsteps"
            @click.prevent="nextStep"
            class="btn btn-primary mb-3 mt-3 w-50"
            >
            次へ
            </button>
         </div>

         <div class="text-center">
            <button 
            v-if="step != 1 "
            @click.prevent="prevStep"
            class="btn btn-primary mb3 w-50"
            >
            一つ戻る
            </button>
         </div>

         <div class="text-center">
            <input 
            v-if="step == 4"
            type="submit"
            class="btn btn-success w-50 mt-3"
            >
         </div>
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
         totalsteps:4,
         errors: [],
         form: {
            firstName:'',
            lastName:'',
            age: 0,
            email: '',
            message: ''
         }
      }
      
   },
   methods: {
      nextStep() {
         if (this.step == 1) {
            if(!this.form.firstName && !this.form.lastName) {
               this.errors = '名前を入力してください .'
               return false
            } 
         }

         if (this.step == 2) {
            if(!this.form.age) {
               this.errors = '年齢を入力してください .'
               return false
            }
         }

         if (this.step == 3) {
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
         if (this.step == 4) {
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

.card {
   border: 3px solid #ccc;
}
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
}

</style>