<template>
  <div class="app">
    <el-container>
      <!-- 左侧边栏 -->
      <el-aside width="200px">
        <!-- 菜单 -->
        <el-scrollbar class="scrollbar-wrapper">
          <el-menu
            class="sidebar-menu"
            unique-opened
          >
            <!-- 头像 -->
            <el-menu-item class="sidebar-head-container" index="/">
              <router-link key="userHead" class="sidebar-head-link" to="/">
                <el-avatar shape="square" :size="50" :src="require('@/assets/default/default-user.png')">
                  <!-- 图片加载失败是显示的默认图片 -->
                  <img src="@/assets/default/default-img.png">
                </el-avatar>
              </router-link>
              <label class="sidebar-name">XXXX</label>
              <label class="sidebar-motto">XXXXXXXX</label>
            </el-menu-item>
            <!-- <el-menu-item class="center" index="1">
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
            </el-submenu> -->
            <menu-item v-for="(item, index) in menu" :key="index" :item="item" />
          </el-menu>
        </el-scrollbar>
        <!-- 退出登录 -->
        <div class="sidebar-logout-container">
          <i class="el-icon-d-arrow-left pointer" />
        </div>
      </el-aside>
      <!-- 主体区域 -->
      <el-main>
        <!-- 回到顶部 -->
        <el-backtop target=".el-main" />
        <!-- 过渡动画 -->
        <transition name="transition" mode="out-in">
          <!-- Vue页面组件显示区域 -->
          <router-view />
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import MenuItem from '@/components/menu/MenuItem.vue'
export default {
  components: { MenuItem },
  data() {
    return {
      menu: [
        {
          path: '/login',
          name: 'login',
          hidden: true
        },
        {
          path: '/',
          redirect: '/home',
          hidden: true,
          children: [
            {
              path: 'home',
              name: 'home',
              hidden: true
            }
          ]
        },
        {
          path: '/myself',
          redirect: '/myself/index',
          title: '我的',
          titleFront: '我',
          titleEnd: '的',
          children: [
            {
              path: 'index',
              name: 'myself',
              hidden: true
            }
          ]
        },
        {
          path: '/post',
          redirect: '/post/index',
          title: '动态',
          titleFront: '动',
          titleEnd: '态',
          children: [
            {
              path: 'index',
              name: 'post',
              hidden: true
            }
          ]
        },
        {
          path: '/comment',
          redirect: '/comment/index',
          title: '评论',
          titleFront: '评',
          titleEnd: '论',
          children: [
            {
              path: 'index',
              name: 'comment',
              hidden: true
            }
          ]
        },
        {
          path: '/calendar',
          redirect: '/calendar/index',
          title: '日历',
          titleFront: '日',
          titleEnd: '历',
          children: [
            {
              path: 'index',
              name: 'calendar',
              hidden: true
            }
          ]
        },
        {
          path: '/note',
          redirect: '/note/index',
          title: '笔记',
          titleFront: '笔',
          titleEnd: '记',
          children: [
            {
              path: 'index',
              name: 'note',
              hidden: true
            }
          ]
        },
        {
          path: '/cloudStorage',
          redirect: '/cloudStorage/index',
          title: '云盘',
          titleFront: '云',
          titleEnd: '盘',
          children: [
            {
              path: 'index',
              name: 'cloudStorage',
              hidden: true
            }
          ]
        },
        {
          path: '/setting',
          title: '设置',
          titleFront: '设',
          titleEnd: '置',
          children: [
            {
              path: 'sysConfig',
              name: 'sysConfig',
              title: '系统设置',
              titleFront: '系统设',
              titleEnd: '置'
            },
            {
              path: 'log',
              name: 'log',
              title: '系统日志',
              titleFront: '系统日',
              titleEnd: '志'
            }
          ]
        },
        {
          path: '*',
          component: () => import('@/views/error/404'),
          hidden: true
        }
      ]
    }
  },
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
      background-color: #ffffff !important;
      box-shadow: 0 2px 4px 0 rgba(150, 150, 150, 0.3);
    }
    .el-main {
      height: 100%;
      width: calc(100% - 200px);
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
    line-height: 100px;
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

.sidebar-head-container:hover {
  background-color: unset;
}

.scrollbar-wrapper {
  width: 100%;
  height: calc(100% - 50px);
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

.el-backtop {
  box-shadow: 0 0 6px rgba(0,0,0,.3);
}

.el-main::-webkit-scrollbar {
  /*滚动条整体样式*/
  /*高宽分别对应横竖滚动条的尺寸*/
  width: 5px;
  height: 1px;
}

.el-main::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  background-color: skyblue;
}

.el-main::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 5px;
}
</style>
