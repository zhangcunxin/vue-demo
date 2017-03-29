<template>
  <div>
    <p>hello {{world}}</p>
    <p v-text="'hello ' + world"></p>
    <p>{{`hello ${world}`}}</p>
    <p v-text="`hello ${world}`"></p>
    <button @click="world='cunxin'">改变world值</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        world: 'world'
      }
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
