<template>
  <div class="app">
    <el-container>
      <!-- 左侧边栏 -->
      <el-aside width="200px">
        <!-- 头像 + 性别 -->
        <div class="sidebar-head-container">
          <router-link key="userHead" class="sidebar-head-link" to="/myself">
            <el-avatar shape="square" :size="50" :src="require('@/assets/default/default-user.png')">
              <!-- 图片加载失败是显示的默认图片 -->
              <img src="@/assets/default/default-img.png">
            </el-avatar>
          </router-link>
          <label class="sidebar-name">尹先生</label>
          <label class="sidebar-motto">你好，陌生人</label>
        </div>
        <!-- 菜单 -->
        <el-scrollbar class="scrollbar-wrapper">
          <el-menu
            class="sidebar-menu"
            default-active="1"
            unique-opened
          >
            <el-menu-item class="center" index="1">
              <span class="spacing10">我</span>的
            </el-menu-item>
            <el-menu-item class="center" index="2">
              <span class="spacing10">动</span>态
            </el-menu-item>
            <el-menu-item class="center" index="3">
              <span class="spacing10">评</span>论
            </el-menu-item>
            <el-menu-item class="center" index="4">
              <span class="spacing10">日</span>历
            </el-menu-item>
            <el-menu-item class="center" index="5">
              <span class="spacing10">笔</span>记
            </el-menu-item>
            <el-menu-item class="center" index="6">
              <span class="spacing10">云</span>盘
            </el-menu-item>
            <el-submenu class="center" index="7">
              <span slot="title"><span class="spacing10">设</span>置</span>
              <el-menu-item class="submenu-item" index="7-1">
                <span class="spacing10">系统设</span>置
              </el-menu-item>
              <el-menu-item class="submenu-item" index="7-2">
                <span class="spacing10">系统日</span>志
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-scrollbar>
        <!-- 退出登录 -->
        <div class="sidebar-logout-container">
          <i class="el-icon-d-arrow-left pointer" />
        </div>
      </el-aside>
      <!-- 主体区域 -->
      <el-main>
        <!-- 过渡动画 -->
        <transition name="fade-transform">
          <!-- Vue页面组件显示区域 -->
          <router-view />
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.app {
  height: 100%;
  .el-container {
    height: 100%;
    .el-aside {
      // background-color: $Primary;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1)
    }
  }
}

.sidebar-head-container {
  display: flex;
  width: 100%;
  height: 200px;
  text-align: center;
  overflow: hidden;
  flex-direction: column;

  .sidebar-head-link {
    width: 100%;
    height: 100px;
    line-height: 150px;
  }
  .sidebar-name {
    font-size: 24px;
    font-weight: 500;
  }
  .sidebar-motto {
    padding: 10px 15px;
    font-size: 14px;
    color: $Info;
  }
}

.scrollbar-wrapper {
  width: 100%;
  height: calc(100% - 250px);
}

.sidebar-menu {
  border: none;
  height: 100%;
  width: 100% !important;
  overflow-x: hidden !important;
}

.submenu-item {
  text-align: center;
  background-color: #fafbfc;
}

.sidebar-logout-container {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
</style>
