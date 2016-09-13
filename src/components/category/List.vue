<template>
    <h1>
        分类列表
        <a class="btn btn-primary pull-right" v-link="{path:'/category/create'}"><i class="iconfont icon-plus"></i>Create Category</a>
    </h1>
    <div class="panel panel-default">
        <div class="panel-heading">
            <form class="form-inline">
                <div class="form-group">
                    <input type="text" class="form-control" id="exampleInputName2" placeholder="标签">
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail2" placeholder="链接标题">
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="时间从">
                    <input type="email" class="form-control" placeholder="至">
                </div>
                <button type="submit" class="btn btn-primary bordered">过滤</button>
                <a class="btn btn-default"><i class="iconfont icon-arrow-top"></i>时间排序</a>
                <a class="btn btn-default"><i class="iconfont icon-arrow-top"></i>热度排序</a>
            </form>
        </div>
        <div class="panel-body" style="padding-top:0;padding-bottom:0;">
            <div class="row">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>slug</th>
                            <th>name</th>
                            <th>description</th>
                            <th>created_at</th>
                            <th>updated_at</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="category in categories">
                            <td>{{category.id}}</td>
                            <td>{{category.slug}}</td>
                            <td>{{category.name}}</td>
                            <td>{{category.description}}</td>
                            <td>{{category.created_at | date}}</td>
                            <td>{{category.updated_at | date}}</td>
                            <td><a class="btn btn-primary" v-link="{path: '/category/detail/'+category.id}">修改</a></td>
                        </tr>
                    </tbody>
                </table>
                <nav>
                    <ul class="pagination">
                        <li><button type="button" class="btn btn-default" v-on:click="prev" v-if="prev_page_url">上页</button></li>
                        <li><button type="button" class="btn btn-default" v-on:click="next" v-if="next_page_url">下页</button></li>
                    </ul>
                </nav>
            </div>

        </div>
    </div>
</template>
<style>

</style>
<script>
  export default {
    ready () {
      var url = 'http://support.moque.dev/admin/categories'
      this.refresh(url)
    },
    data () {
      return {
        categories: [],
        prev_page_url: '',
        next_page_url: '',
        count: 2
      }
    },
    methods: {
      refresh (url) {
        this.$http.get(url).then(function (response) {
          this.categories = response.data.data
          this.prev_page_url = response.body.prev_page_url
          this.next_page_url = response.body.next_page_url
        })
      },
      prev () {
        if (this.prev_page_url) {
          this.refresh(this.prev_page_url)
        } else {
          window.alert('没有上一页了')
        }
      },
      next () {
        if (this.next_page_url) {
          this.refresh(this.next_page_url)
        } else {
          window.alert('没有下一页了')
        }
      }
    },
    components: {
    }
  }
</script>
