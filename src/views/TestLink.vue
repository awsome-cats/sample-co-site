<template>
    <div>
        <h1>TestLink.vue</h1>
       

       <ul>
           <li v-for="i in i" :key="i.id">
               {{i.name}}:{{i.price}}:{{i.content}}
            </li>
       </ul>
       
     <hr>  
     
        <ul>
            <li v-for="person in persons" :key="person.type">
                {{ person.type}}:{{person.name}}:{{person.age}}
            </li>
        </ul>
        <hr>
        <h1>TestLink.vue</h1>
         <table>
            <thead>
                <tr>
                    <th>商品</th>
                    <th>価格</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="i in i" v-bind:key="i.id">
                    <td>{{ i.name }}</td>
                    <td>{{ i.price }}</td>
                    <router-link :to="i.path"><td>{{i.id}}</td></router-link>
                </tr>
            </tbody>
        </table>
        <hr>
        <h1>TestLink.vue</h1>
        
        <table>
            <thead>
                <tr>
                    <th>タイトル</th>
                    <th>著者</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>id</th>
                    <th>性別</th>
                    <th>名前</th>
                    <th>年齢</th>
                 </tr>    
                 <tr v-for="person in persons" v-bind:key="person.id">
                     <router-link :to="person.path">
                        <td>{{person.id}}</td>
                    </router-link>
                     <td>{{person.type}}</td>
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                    
                 </tr>
                    
               
            </tbody>
        </table>
        <hr>
        <h1>TestLink.vue</h1>
        <table border="1">
            <tr>
                <th>商品ナンバー</th>
                <th>名前</th>
                <th>価格</th>
                <th>概要</th>
            </tr>
            <tr v-for="i in i" :key="i.id">
                <td>{{i.id}}</td>
                <td>{{i.name}}</td>
                <td>{{i.price}}</td>
                <td>{{i.content}}</td>
            </tr>
        </table>
      
       
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import products from '@/api/products'
export default {
  data() {
      return {
        i:products,
        persons:[
            {
                id:1,
                type:'man',
                age:20,
                name:'Kenta',
                path:'/camp'
            },
            {
                id:2,
                type:'woman',
                age:20,
                name:'Miyuki',
                path:'/about'
            }
        ]
         
      }
  }
}
</script>

<style scoped>

table {
    width:300px;
    height:300px;
    background:#ccc;
    border:1px solid #ddd;
}


td,tr {
    border:1px solid #ddd;
}


</style>