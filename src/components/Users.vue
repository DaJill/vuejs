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
          users: [
            {
              name: 'Da J',
              email: 'daj@gmail.com',
              delete: false
            },
            {
              name: 'Tracy Chen',
              email: 'tracychen@gmail.com',
              delete: false
            },
            {
              name: 'Jerry Yan',
              email: 'jerryyan@gmail.com',
              delete: false
            }
          ]
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
      }
    }
</script>

<style scoped>
  .contacted{
    text-decoration: line-through;
  }
</style>