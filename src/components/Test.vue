<template>
  <div class="test">
    <input type="text" v-model="title"><br />
    <h1>{{title}}</h1>
    <p v-if="showName">{{user.firstName}}</p>
    <p v-else>Nobody</p>
    <!-- <p v-text="user.firstName"></p> -->
    <ul>
      <li v-for="rowItem in items">{{rowItem.title}}</li>
    </ul>

    <button v-on:click="greet('Greeting!')">Show Greeting</button>
    <br />
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="hitEnter">
    <br />
    <label>First Name: </label><input type="text" v-model="user.firstName">
    <br />
    <label>Last Name: </label><input type="text" v-model="user.lastName">
    <h3>{{fullName}}</h3>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
    import { default as test } from './Test.js'
    export default test
    // export default {
    //   name: 'test',
    //   props: { // 可以接收父元件的資料屬性
    //     msg: {
    //       type: String,
    //       default: 'Foobar'
    //     }
    //   },
    //   data () { // 要綁定的資料
    //     return {
    //       title: 'Hi!',
    //       user: {
    //         firstName: 'J',
    //         lastName: 'Da'
    //       },
    //       showName: true,
    //       items: [
    //         {title: 'Item One'},
    //         {title: 'Item Two'},
    //         {title: 'Item Three'}
    //       ]
    //     }
    //   },
    //   methods: {
    //     greet: function (sStr) {
    //       window.alert(sStr)
    //     },
    //     pressKey: function (e) {
    //       console.log(e.target.value)
    //     },
    //     hitEnter: function () {
    //       console.log('You hit Enter!')
    //     }
    //   },
    //   computed: { // 定義getter或setter。需要計算後才能使用的屬性
    //     fullName: function () {
    //       return this.user.firstName + ' ' + this.user.lastName
    //     }
    //   }
    // }
</script>

<style scoped>
  
</style>