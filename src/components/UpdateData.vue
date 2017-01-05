<template>
  <div class="updateData">
    <div>
    <table align="center">
      <tr>
        <th>暱稱 : </th>
        <th><input type="text" v-model="aChoseUser.Nickname"></th>
      </tr>
      <tr>
        <th>帳號 : </th>
        <th><input type="text" v-model="aChoseUser.UserName"></th>
      </tr>
      <tr>
        <th>密碼 : </th>
        <th><input type="text" v-model="aChoseUser.Password"></th>
      </tr>
    </table>
    <!-- $on(eventName)監聽事件 -->
    <!-- $emit(eventName) 觸發事件 -->
    <button v-on:click="updateUser()">確認修改</button>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'updateData',
      props: { // 可以接收父元件的資料屬性
        aChoseUser: {
          type: Object,
          default: function () {
            return {
              Nickname: '',
              UserName: '',
              Password: ''
            }
          }
        }
      },
      data () { // 要綁定的資料
        return {
        }
      },
      methods: {
        updateUser: function () {
          // $on(eventName)監聽事件
          // $emit(eventName) 觸發事件
          this.$emit('doUpdateUser', this.aChoseUser)
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