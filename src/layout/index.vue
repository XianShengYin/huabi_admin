<template>
  <div class="app">
    <el-container>
      <!-- left sidebar -->
      <el-aside width="200px">
        <!-- head -->
        <div class="sidebar-head-container">
          <router-link key="userHead" class="sidebar-head-link" to="/myself">
            <el-avatar shape="square" :size="50" :src="require('@/assets/default/default-user.png')">
              <img src="@/assets/default/default-img.png">
            </el-avatar>
          </router-link>
          <label class="sidebar-name">{{ userInfo.name }}</label>
          <label class="sidebar-motto">{{ userInfo.motto }}</label>
        </div>
        <!-- menu -->
        <el-scrollbar class="sidebar-menu-scrollbar">
          <el-menu
            class="sidebar-menu"
            unique-opened
            default-active="/"
          >
            <menu-item v-for="(item, index) in menuItems" :key="index" :item="item" />
          </el-menu>
        </el-scrollbar>
        <!-- 退出 -->
        <div class="sidebar-logout-container">
          <i class="fa fa-sign-out fa-flip-horizontal fa-lg pointer" aria-hidden="true" />
          <!-- <svg-icon iconClass="sign out" class="pointer" /> -->
        </div>
      </el-aside>
      <!-- main -->
      <el-main>
        <!-- back top -->
        <el-backtop target=".el-main" />
        <!-- Transition animations -->
        <transition name="transition" mode="out-in">
          <!-- <keep-alive> https://cn.vuejs.org/v2/api/#keep-alive Caching components save performance -->
          <!-- Display Component -->
          <router-view />
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import MenuItem from '@/components/MenuItem'
import { mapGetters } from 'vuex'
export default {
  components: { MenuItem },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['menuItems', 'userInfo'])
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
      padding: unset;
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
    white-space: normal;
    word-break: break-all;
  }
}

.sidebar-menu-scrollbar {
  width: 100%;
  height: calc(100% - 250px);
}

.sidebar-menu {
  border: none;
  height: 100%;
  width: 100% !important;
  overflow-x: hidden !important;
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
  /* The size of the scroll bar */
  width: 5px;
  height: 1px;
}

.el-main::-webkit-scrollbar-thumb {
  /* scroll bar */
  border-radius: 5px;
  background-color: rgba(144,147,153,.3);
}

// .el-main::-webkit-scrollbar-track {
//   /* track */
// }
</style>
<style>
.sidebar-menu-scrollbar > .el-scrollbar__wrap {
  overflow-x: hidden !important;
}
</style>
