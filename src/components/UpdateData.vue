<template>
  <div class="UpdateData">
    <!-- <h2>{{sTest}}</h2> -->
    <div>
    <table align="center">
      <tr>
        <th>暱稱 : </th>
        <th><input type="text" v-model="aNewUser.Nickname"></th>
      </tr>
      <tr>
        <th>帳號 : </th>
        <th><input type="text" v-model="aNewUser.UserName"></th>
      </tr>
      <tr>
        <th>密碼 : </th>
        <th><input type="text" v-model="aNewUser.Password"></th>
      </tr>
    </table>
    <button v-on:click="updateUser" @click="$emit('closeShowUpdateModal')">確認修改</button>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'updateData',
      props: { // 可以接收父元件的資料屬性
        aNewUser: {
          type: Object,
          default: function () {
            return {
              Nickname: '',
              UserName: '',
              Password: ''
            }
          }
        },
        sTest: '1234'
      },
      data () { // 要綁定的資料
        return {
          // showUpdateModal: false
        }
      },
      methods: {
        updateUser: function () {
        }
      },
      created: function () { // 建制完以後就會執行以下
      }
    }
</script>
<style scoped>
  
  button{
    font-size:19px;
  }
</style>