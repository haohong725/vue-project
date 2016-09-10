<template>
  <h1>
    我的短址
    <a class="btn btn-primary pull-right" v-link="{path:'/post/create'}"><i class="iconfont icon-plus"></i>Create Post</a>
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
	        	</tr>
        	</thead>
        	<tbody>
				<tr v-for="i in [1, 2, 3, 4]">
				  <td class="">222</td>
				  <td class="">333</td>
				  <td class="">fjidsjigifji</td>
				  <td class="">news</td>
				  <td class="">什么是二维码、静态码、活码？</td>
				  <td class="">22</td>
				  <td class="">33</td>
				  <td class="">2016-9-9</td>
				  <td class="">2016-9-9</td>
				</tr>

			</tbody>
		</table>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "node_modules/mostrap/src/stylesheets/variables";
  @import "node_modules/mostrap/src/stylesheets/mixins";
</style>
<script>
</script>