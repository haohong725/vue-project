<template>
  <h1>
    修改文章
  </h1>
  <div role="form">
    <input type="hidden" name="post.id" v-model="post.id" />
    <div class="form-group">
      <label>title</label>
      <input class="form-control" name="post.title" type="text" v-model="post.title" placeholder="" /><br/>
    </div>

    <div class="form-group">
      <label>type</label>
      <input class="form-control" name="post.type" type="text" v-model="post.type" placeholder="" /><br/>
    </div>

    <div class="form-group">
      <label>summary</label>
      <input class="form-control" name="post.summary" type="text" v-model="post.summary" placeholder="" /><br/>
    </div>

    <div class="form-group">
      <label>summary</label>
      <input class="form-control" name="post.summary" type="text" v-model="post.summary" placeholder="" /><br/>
    </div>

    <div class="form-group">
      <label >Code Type</label>
      <select v-model="post.text.code_type" class="form-control">
        <option value="text">text</option>
        <option value="markdown">markdown</option>
        <option value="html">html</option>
      </select>
    </div>

    <div class="form-group">
      <label>content</label>
      <textarea class="form-control" v-model="post.text.content" ></textarea>
    </div>

    <!--<div class="form-group">-->
      <button class="form-control" v-on:click="submit()">submit</button>
    <!--</div>-->
  </div>
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
    },
    methods: {
      submit () {
        var url = 'http://support.moque.dev/admin/posts/' + this.post.id
        this.$http.post(url, this.post).then(function (response) {
          if (response.status === 200) {
            window.alert('success')
            console.log(response)
          } else {
            window.alert(response.data)
          }
        })
      }
    }
  }
</script>