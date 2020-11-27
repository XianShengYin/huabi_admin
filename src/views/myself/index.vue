<!--  -->
<template>
  <div class="app-main">
    <section-header>Myself&nbsp;•&nbsp;个人信息</section-header>
    <el-form ref="form" :model="myselfForm" label-width="80px">
      <el-form-item label="头像">
        <el-input />
      </el-form-item>
      <el-form-item label="昵称">
        <el-input />
      </el-form-item>
      <el-form-item label="座右铭">
        <el-input />
      </el-form-item>
      <el-form-item label="QQ">
        <el-input />
      </el-form-item>
      <el-form-item label="微信">
        <el-input />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input />
      </el-form-item>
      <el-form-item label="Github">
        <el-input />
      </el-form-item>
      <el-form-item label="Gitee">
        <el-input />
      </el-form-item>
      <el-form-item label="网易云">
        <el-input />
      </el-form-item>
      <el-form-item label="bilibili">
        <el-input />
      </el-form-item>
      <el-form-item label="描述">
        <el-input />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">
          保存
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue'
export default {
  components: { SectionHeader },
  data() {
    return {
      myselfForm: {}
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
