<template>
  <h1>
    我的短址
    <a class="btn btn-primary pull-right" v-link="{path:'/posts/create'}"><i class="iconfont icon-plus"></i>Create Post</a>
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
	        		<th class="">id</th>
	        		<th>userId</th>
	        		<th>slug</th>
	        		<th>type</th>
	        		<th>title</th>
	        		<th>vp_votes</th>
	        		<th>down_votes</th>
	        		<th>created_at</th>
	        		<th>updated_at</th>
              <th>操作</th>
	        	</tr>
        	</thead>
        	<tbody>
                <tr v-for="post in posts">
                    <td class="">{{ post.id }}</td>
                    <td class="">{{ post.user_id }}</td>
                    <td class="">{{ post.slug }}</td>
                    <td class="">{{ post.type }}</td>
                    <td class="">{{ post.title }}</td>
                    <td class="">{{ post.up_votes }}</td>
                    <td class="">{{ post.down_votes }}</td>
                    <td class="">{{ post.created_at | date }}</td>
                    <td class="">{{ post.updated_at | date }}</td>
                    <td><a class="btn btn-primary" v-link="{path: '/posts/detail/'+post.id}">修改</a></td>
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

<style lang="scss" scoped>
  @import "node_modules/mostrap/src/stylesheets/variables";
  @import "node_modules/mostrap/src/stylesheets/mixins";
</style>
<script>
  export default {
    ready () {
      var url = 'http://support.moque.dev/admin/posts'
      this.refresh(url)
    },
    data () {
      return {
        prev_page_url: '',
        next_page_url: '',
        posts: [],
        message: 'test message'
      }
    },
    methods: {
      refresh (url) {
        let self = this
        this.$http.get(url).then(function (response) {
          console.log(response.body)
          self.posts = response.body.data

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
    }
  }
</script>