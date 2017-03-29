<template>
  <div>
    <p v-html='html'></p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        html: `<span style='color : red;'>显示红色的字你就解析成功了</span>`
      }
    }
  }
</script>
