<template>
  <div class="users">
    <h1>Users </h1>
    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="Enter Name">
      <br />
      <input type="text" v-model="newUser.email" placeholder="Enter Email">
      <br />
      <input type="submit" value="Submit">
    </form>
    <ul>
    <li v-for="user in users">
      <input type="checkbox" class="toggle" v-model="user.delete">
      <span :class="{contacted: user.delete}">
        {{user.name}}: {{user.email}} <button v-on:click="deleteUser(user)">X</button>
      </span>
    </li>
  </ul>
  </div>
</template>

<script>
    export default {
      name: 'users',
      data () { // 要綁定的資料
        return {
          newUser: {},
          users: []
        }
      },
      methods: {
        addUser: function (e) {
          this.users.push({
            name: this.newUser.name,
            email: this.newUser.email,
            delete: false
          })
          e.preventDefault()
        },
        
        deleteUser: function (user) {
          this.users.splice(this.users.indexOf(user), 1)
        }
      },
      created: function () { // 建制完以後就會執行以下
        this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
          console.log(response.data)
          this.users = response.data
        })
      }
    }
</script>

<style scoped>
  .contacted{
    text-decoration: line-through;
  }
</style>