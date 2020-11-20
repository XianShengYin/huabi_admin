<template>
  <div>
    <router-link v-if="noChild(item.children)" :to="basePath + item.path">
      <el-menu-item class="center" :index="item.path">
        <span v-if="item.title.length > 1" class="spacing10">{{ item.title.substring(0, item.title.length - 1) }}</span>{{ item.title.charAt(item.title.length - 1) }}
      </el-menu-item>
    </router-link>
    <el-submenu v-else class="center" :index="basePath + item.path">
      <template slot="title">
        <span v-if="item.title.length > 1" class="spacing10">{{ item.title.substring(0, item.title.length - 1) }}</span>{{ item.title.charAt(item.title.length - 1) }}
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
    // 菜单项
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
