<template>
  <div id="app">
    <dataOperation></dataOperation>
    <!-- <updateData></updateData> -->
  </div>
</template>

<script>
import dataOperation from './components/DataOperation'
import updateData from './components/UpdateData'
export default {
  name: 'app',
  components: {
    dataOperation,
    updateData
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>