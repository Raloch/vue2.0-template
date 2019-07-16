<template>
  <div class="hello">
    <h1>{{ home.name }}</h1>
    <h2>{{ num | keep2point }}</h2>
    <button @click="flag = !flag">打开弹窗</button>
    <device-dialog :flag="flag" @closeDialog="flag = !flag"></device-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { operatorInfo } from '../api/api.js'
import deviceDialog from './dialog'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num: 2.6666,
      flag: false
    }
  },
  components: {
    deviceDialog
  },
  computed: {
    ...mapGetters([
      'home'
    ])
  },
  created() {
    operatorInfo().then(res => {
      console.log(1)
      console.log(res)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
