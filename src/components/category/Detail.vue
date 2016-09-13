<template>
  <h1>
    修改分类
  </h1>
  <div role="form">
    <input type="hidden" v-model="category.id" />

    <div class="form-group">
      <label>name</label>
      <input class="form-control" type="text" v-model="category.name" placeholder="" /><br/>
    </div>

    <div class="form-group">
      <label>description</label>
      <input class="form-control" type="text" v-model="category.description" placeholder="" /><br/>
    </div>

    <div class="form-group">
      <button class="form-control" v-on:click="submit()">submit</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "node_modules/mostrap/src/stylesheets/variables";
  @import "node_modules/mostrap/src/stylesheets/mixins";
</style>
<script>
  export default {
    ready () {
      if (this.$route.path === '/category/create') {
        this.is_create = true
        return
      }

      var categoryId = this.$route.params.category_id
      var url = 'http://support.moque.dev/admin/categories/' + categoryId
      this.$http.get(url).then(function (response) {
        this.category = response.data
      })
    },
    data () {
      return {
        category: null,
        is_create: false
      }
    },
    methods: {
      submit () {
        var url
        if (this.is_create) {
          url = 'http://support.moque.dev/admin/categories/create'
        } else {
          url = 'http://support.moque.dev/admin/categories/' + this.category.id
        }

        this.$http.post(url, this.category).then(function (response) {
          if (response.status === 200) {
            window.alert('success')
            console.log(response.data.id)
            if (this.is_create) {
              var categoryId = response.data.id
              this.$router.go({name: 'category.detail', params: {'category_id': categoryId}})
            }
          } else {
            window.alert(response.data)
          }
        })
      }
    }
  }
</script>