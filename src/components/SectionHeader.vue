<template>
  <div class="section-header">
    <el-divider :content-position="contentPosition">
      <!-- https://cn.vuejs.org/v2/guide/components-slots.html -->
      <slot />
    </el-divider>
  </div>
</template>
<script>
export default {
  name: 'SectionHeader',
  props: {
    contentPosition: {
      type: String,
      default: 'left'
    }
  },
  data() {
    return {}
  },
  methods: {
  }
}
</script>
<style lang='scss' scoped>
.el-divider {
  background-color: $blue;
}
.section-header .el-divider__text {
  background-color: $body;
  color: $blue;
  font-size: 18px;
  font-weight: 400;
}
</style>
