<template>
  <h1>
    修改文章
  </h1>
  <form class="form-horizontal">
  </form>
</template>

<style lang="scss" scoped>
  @import "node_modules/mostrap/src/stylesheets/variables";
  @import "node_modules/mostrap/src/stylesheets/mixins";
</style>
<script>
  export default {
    ready () {
      var postId = this.$route.params.post_id
      var url = 'http://support.moque.dev/admin/posts/' + postId
      let self = this
      this.$http.get(url).then(function (response) {
        console.log(response.data)
        self.post = response.data
      })
    },
    data () {
      return {
        post: null
      }
    }
  }
</script>