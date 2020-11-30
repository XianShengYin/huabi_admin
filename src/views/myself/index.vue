<!--  -->
<template>
  <div class="app-main">
    <section-header>Myself • 个人信息</section-header>
    <el-form ref="form" class="myselfForm" :model="myselfForm" label-position="top">
      <el-form-item label="头像">
        <el-input />
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="myselfForm.name" placeholder="nickname • 昵称" />
      </el-form-item>
      <el-form-item label="座右铭">
        <el-input v-model="myselfForm.motto" placeholder="motto • 座右铭" />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input placeholder="email • 邮箱" />
      </el-form-item>
      <!-- 这些应该改成动态添加 -->
      <el-form-item label="社交圈">
        <!-- QQ -->
        <el-popover
          placement="right"
          width="400"
          trigger="click"
        >
          <el-input />
          <el-button slot="reference" icon="el-icon-eleme" circle />
        </el-popover>
        <!-- 微信 -->
        <el-popover
          placement="right"
          width="400"
          trigger="click"
        >
          <el-input />
          <el-button slot="reference" icon="el-icon-eleme" circle />
        </el-popover>
        <!-- Github -->
        <el-popover
          placement="right"
          width="400"
          trigger="click"
        >
          <el-input />
          <el-button slot="reference" icon="el-icon-eleme" circle />
        </el-popover>
        <!-- Gitee -->
        <el-popover
          placement="right"
          width="400"
          trigger="click"
        >
          <el-input />
          <el-button slot="reference" icon="el-icon-eleme" circle />
        </el-popover>
        <!-- 网易云 -->
        <el-popover
          placement="right"
          width="400"
          trigger="click"
        >
          <el-input />
          <el-button slot="reference" icon="el-icon-eleme" circle />
        </el-popover>
        <!-- bilibili -->
        <el-popover
          placement="right"
          width="400"
          trigger="click"
        >
          <el-input />
          <el-button slot="reference" icon="el-icon-eleme" circle />
        </el-popover>
        <el-button icon="el-icon-plus" circle />
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
import { mapGetters } from 'vuex'
export default {
  components: { SectionHeader },
  data() {
    return {
      myselfForm: { name: '', motto: '' }
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  created() {
    this.myselfForm = Object.assign(this.myselfForm, this.userInfo)
  },
  methods: {

  }
}
</script>
<style lang='scss' scoped>
.myselfForm {
  width: 65%;
}
</style>
