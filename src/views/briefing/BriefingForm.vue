<template>
   <div class="card container">
      <div class="card-body">
         <form name="contact" 
         method="POST" 
         @submit.prevent="submitForm" 
         data-netlify="true" 
         netlify-honeypot="bot-field">
            <p class="hidden" style="display:none;">
               <label>Don't fill this out if you're human:
                  <input name="bot-field"/>
               </label>
            </p>
            
            <!---Error handling----->
            <span 
            v-for="e in errors" 
            :key="e" 
            class="text-danger"
            >{{e}}</span>
            
            <section v-if="step == 1">
               <div class="form-row">
                  <div class="text-center step">
                     <h3>Step1</h3>
                  </div>
                  
                  <div class="form-group col-md-6">
                     <label>姓</label>
                     <input v-model="form.firstName" class="form-control" type="text" placeholder="姓を入力して下さい" >
                  </div>
                  
                  <div class="form-group col-md-6">
                     <label>名</label>
                     <input v-model="form.lastName" class="form-control" type="text" placeholder="名を入力して下さい" >
                  </div>
               </div>
               <!---Ghost--->
               <div class="grayscale-step">
                  <div class="text-center">
                     <h3 >Step2</h3>
                  </div>
                  <div class="text-center">
                     <p style="font-size:1.8rem;">年齢を入力してください</p>
                  </div>
               </div>
               <div class="form-group text-center grayscale-step">
                  <div class="text-center">
                     <h3 >Step3</h3>
                  </div>
                  <div class="form-group">
                     <p style="font-size:1.8rem;">Emailを入力して下さい</p>
                  </div>
               </div>
            </section>
            
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
            </section>

            <section v-if="step == 3">
               <div class="text-center step">
                     <h3 >Step3</h3>
               </div>
               <div class="form-group">
                  <label>Email</label>
                  <input v-model="form.email" class="form-control" 
                  type="email" placeholder="emailを入力して下さい" 
                  >
               </div>
               <!-- <div class="form-group">
                  <label>メールアドレス(確認用)</label>
                  <input 
                  v-model="form.repeatEmail"
                  class="form-control" 
                  type="email" placeholder="emailを入力して下さい" 
                  >
               </div> -->
            </section>

            <section v-if="step == 4">
               <div class="text-center step">
                     <h3 >Step4</h3>
                  </div>
               <div class="form-group">
               <label>メッセージ</label>
               <textarea 
               v-model="form.message"
               class="form-control" 
               type="message" 
               placeholder="メッセージを入力して下さい"
               >
               </textarea>
            </div>
            </section>
            
            <div class="text-center">
               <button 
            type="button"
            v-if="step !=totalStep" 
            class="btn btn-primary mb-3 w-50"
            @click.prevent="nextStep"
            >次へ</button>
            </div>

            <div class="text-center">
               <button 
            v-if="step !=1"
            type="button" 
            class="btn btn-primary w-50 mb-3"
            @click.prevent="prevStep"
            >一つ戻る</button>
            </div>

            <div class="text-center">
               <button v-if="step == 4" type="submit" class="btn btn-success w-50">送信</button>
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
         totalStep:4,
         errors: [],
         form: {
            firstName:'',
            lastName:'',
            age:0,
            email:'',
            repeatEmail:'',
            message:'',
            submitStatus: null
         }
         
      }
   },
   methods: {
      nextStep() {
         if (this.step == 1) {
            if(!this.form.firstname && !this.form.lastName) {
               this.errors = '名前を入力してください'
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
                  this.errors = 'emailを入力して下さい'
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
      submitForm() {
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
               .then(() => this.$router.push({path: 'success'}))
               .catch(() => this.$router.push({ path: 'fail'}))
            }
      }
         //this.errors = ''
         // this.form = ''
      }
   }
}
</script>

<style scoped>
.card {
  width:980px;
   /* margin: 0 auto; */
   margin-bottom:500px;
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
   margin-bottom:20px;
   margin-top:20px;
}
</style>