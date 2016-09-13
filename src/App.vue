<template>
<div class="container-fluid">
    <div class="row">
      <header class="navbar" style="margin-bottom: 0">
        <div class="navbar-header col-md-2">
          <button aria-controls="bs-navbar" aria-expanded="false" class="collapsed navbar-toggle"
                  data-target="#bs-navbar"
                  data-toggle="collapse" type="button">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="iconfont icon-menu"></span>
          </button>
          <a href="../" class="navbar-brand" style="text-align:center;"><i
            class="iconfont icon-logograph"></i>&nbsp;&nbsp;Dashboard</a></div>
        <nav class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><a v-link="{ path:'/' }" >首页</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="/login">你好</a></li>
            <li><a href="/signup">退出</a></li>
          </ul>
        </nav>
      </header>
    </div>

    <div class="row" id="app-view-main">
      <div class="col-md-2 main-side" :style="mainHeightStyle">
        <ul class="nav nav-stacked nav-pills">
          <li class="divide" style="">Post</li>
          <li><a v-link="{ path:'/posts/list' }"><i class="iconfont icon-menu"></i><span>Post List</span></a></li>
          <li><a v-link="{ path:'/posts/create' }"><i class="iconfont icon-plus"></i><span>Create Post</span></a></li>
        </ul>
        <ul class="nav nav-stacked nav-pills">
          <li class="divide" style="">Category</li>
          <li><a v-link="{ path:'/category/list' }"><i class="iconfont icon-menu"></i><span>Category List</span></a></li>
          <li><a v-link="{ path:'/category/create' }"><i class="iconfont icon-plus"></i><span>Create Category</span></a></li>
        </ul>
      </div>
      <div class="col-md-10 main-content">
        <router-view></router-view>
      </div>
    </div>
</div>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}
</script>

<style>

</style>
