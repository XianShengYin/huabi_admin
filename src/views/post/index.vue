<!--  -->
<template>
  <div class="app-main">
    <section-header>Post • 动态</section-header>
    <!-- 顶部操作栏 -->
    <!-- 数据表格 -->
    <!-- 其他组件 -->
    <mavon-editor v-if="false" ref="descriptionEditor" v-model="editorValue" :autofocus="false" style="min-height:600px;" />
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  components: { SectionHeader, mavonEditor },
  data() {
    // 这里存放数据
    return {
      editorValue: ''
    }
  },
  created() {

  },
  methods: {

  }
}
</script>
<style lang='scss' scoped>

</style>
