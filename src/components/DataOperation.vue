<template>
  <div class="dataOperation">
    <form id="form" v-on:submit.prevent="addUser">
      <input type="text" v-model="aNewUser.Nickname" placeholder="請輸入暱稱">
      <input type="text" v-model="aNewUser.UserName" placeholder="請輸入帳號">
      <input type="text" v-model="aNewUser.Password" placeholder="請輸入密碼">
      <input type="submit" value="新增使用者">
    </form>
    <table>
      <tr>
        <th>暱稱</th>
        <th>帳號</th>
        <th>密碼</th>
        <th>操作</th>
      </tr>
      <tr v-for="aRowUser in aUserList">
        <th>{{aRowUser.Nickname}}</th>
        <th>{{aRowUser.UserName}}</th>
        <th>{{aRowUser.Password}}</th>
        <th><button v-on:click="delUser(aRowUser)">刪除</button> <button>修改</button></th>
      </tr>
    </table>
</template>

<script>
    export default {
      name: 'dataOperation',
      props: { // 可以接收父元件的資料屬性
      },
      data () { // 要綁定的資料
        return {
          aNewUser: {
            UserID: '',
            Nickname: '',
            UserName: '',
            Password: ''
          },
          aUserList: []
        }
      },
      methods: {
        addUser: function (e) { // 新增
          this.$http.post('http://localhost:8088/api/user/add', this.aNewUser)
          .then(function (response) {
            var aResponse = JSON.parse(response.body)
            if (aResponse.event === false) {
              window.alert('請輸入正確資料')
              return
            }
            this.aUserList.reverse()
            this.aUserList.push({
              UserID: aResponse.UserID,
              Nickname: this.aNewUser.Nickname,
              UserName: this.aNewUser.UserName,
              Password: this.aNewUser.Password
            })
            this.aUserList.reverse()
          })
          // e.preventDefault() // 不要讓他因為submit跳走
        },

        delUser: function (_aRowUser) { // 刪除
          this.$http.delete('http://localhost:8088/api/user/' + _aRowUser.UserID)
          .then(function (response) {
            var aResponse = JSON.parse(response.body)
            if (aResponse.event === false) {
              window.alert('資料刪除失敗')
              return
            }
            this.aUserList.splice(this.aUserList.indexOf(_aRowUser), 1)
          })
        }
      },
      created: function () { // 建制完以後就會執行以下
        this.$http.get('http://localhost:8088/api/user/list')
        .then(function (response) {
          this.aUserList = response.data
        })
      }
    }
</script>

<style scoped>
  table{
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
  }
  table, th, td{
    border: 1px solid;
    text-align: left;
  }
  input[type="text"]{
    width: 200px;
    height: 20px;
    font-size:19px;
  }
  input[type="submit"]{
    font-size:19px;
  }
  button{
    font-size:19px;
  }
</style>