<template>
  <div>
    <router-link v-if="noChild(item.children)" :to="basePath + item.path">
      <el-menu-item class="item" :index="item.path">
        <!-- <span v-if="item.title.length > 1" class="spacing10">{{ item.title.substring(0, item.title.length - 1) }}</span>{{ item.title.charAt(item.title.length - 1) }} -->
        {{ item.title }}
      </el-menu-item>
    </router-link>
    <el-submenu v-else class="right submenu-item" :index="basePath + item.path">
      <template v-slot:title>
        <!-- <span v-if="item.title.length > 1" class="spacing10">{{ item.title.substring(0, item.title.length - 1) }}</span>{{ item.title.charAt(item.title.length - 1) }} -->
        {{ item.title }}
      </template>
      <menu-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="item.path + '/'"
      />
    </el-submenu>
  </div>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    // menu item
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    noChild(children = []) {
      const showChildren = children.filter(item => {
        return !item.hidden
      })
      if (showChildren.length === 0) {
        return true
      }
      return false
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  text-align: right;
  padding-right: 80px;
}
</style>
<style>
.submenu-item > .el-submenu__title {
  padding-right: 80px;
}
</style>
