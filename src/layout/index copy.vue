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
            <el-menu-item class="text-center" index="1">
              <span class="letter-spacing10">我</span>的
            </el-menu-item>
            <el-menu-item class="text-center" index="2">
              <span class="letter-spacing10">动</span>态
            </el-menu-item>
            <el-menu-item class="text-center" index="3">
              <span class="letter-spacing10">评</span>论
            </el-menu-item>
            <el-menu-item class="text-center" index="4">
              <span class="letter-spacing10">日</span>历
            </el-menu-item>
            <el-menu-item class="text-center" index="5">
              <span class="letter-spacing10">笔</span>记
            </el-menu-item>
            <el-menu-item class="text-center" index="6">
              <span class="letter-spacing10">云</span>盘
            </el-menu-item>
            <el-submenu class="text-center" index="7">
              <span slot="title"><span class="letter-spacing10">设</span>置</span>
              <el-menu-item class="text-center" index="7-1">
                <span class="letter-spacing10">系统设</span>置
              </el-menu-item>
              <el-menu-item class="text-center" index="7-2">
                <span class="letter-spacing10">系统日</span>志
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <!-- 右侧区域 -->
      <el-container>
        <!-- 头部区域 -->
        <el-header>
          <span>
            <i class="el-icon-chat-dot-square" />
          </span>
          <router-link key="setting" class="" to="/myself">
            <i class="el-icon-setting" />
          </router-link>
          <router-link key="logout" class="" to="/myself">
            <i class="el-icon-d-arrow-right" />
          </router-link>
        </el-header>
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
    .el-container {
      .el-header {
        background-color: #ffffff;
        box-shadow: 0 1px 4px rgba(0,21,41,.08);
        line-height: 60px;
      }
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
  height: calc(100% - 200px);
}

.sidebar-menu {
  border: none;
  height: 100%;
  width: 100% !important;
  overflow-x: hidden !important;
}

.el-dropdown-link {
  cursor: pointer;
}
</style>
