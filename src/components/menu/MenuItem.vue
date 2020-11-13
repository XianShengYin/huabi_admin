<template>
  <div v-if="!item.hidden">
    <template v-if="noChild(item.children)">
      <router-link>
        <el-menu-item class="center" :index="item.path">
          <span class="spacing10">{{ item.meta.title }}</span>{{ item.meta.title }}
        </el-menu-item>
      </router-link>
    </template>

    <el-submenu v-else :index="item.path">
      <template slot="title">
        <span class="spacing10">{{ item.meta.title }}</span>{{ item.meta.title }}
      </template>
      <menu-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>

export default {
  name: 'MenuItem',
  props: {
    // route object
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {
    noChild(children = []) {
      const showingChildren = children.filter(item => {
        return !item.hidden
      })

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        return true
      }

      return false
    }
  }
}
</script>
