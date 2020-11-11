<template>
  <div>
    <el-container>
      <!-- 左侧边栏 -->
      <el-aside width="200px">
        <!-- 头像 + 性别 -->
        <el-avatar shape="square" :size="50" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png">
          <!-- 图片加载失败是显示的默认图片 -->
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png">
        </el-avatar>
        <!-- 名称 -->
        <!-- 座右铭 -->
        <!-- 菜单 -->
      </el-aside>
      <!-- 右侧区域 -->
      <el-container>
        <!-- 头部区域 -->
        <el-header>Header</el-header>
        <!-- 主体区域 -->
        <el-main>
          <!-- 过渡动画 -->
          <transition name="fade-transform">
            <!-- Vue页面组件显示区域 -->
            <router-view />
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
