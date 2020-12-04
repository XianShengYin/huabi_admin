<!--  -->
<template>
  <div class="app-main">
    <section-header>Myself • 个人信息</section-header>
    <el-form
      ref="form" v-loading="loading" element-loading-background="#F6F8F9" class="myselfForm" :model="myselfForm"
      label-position="top"
    >
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
        <el-input v-model="myselfForm.email" placeholder="email • 邮箱" />
      </el-form-item>
      <el-form-item label="圈子">
        <my-circle :data="myselfForm.circleList" />
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="myselfForm.description" />
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
import SectionHeader from '@/components/SectionHeader'
import MyCircle from '@/components/MyCircle'
import { mapGetters } from 'vuex'
export default {
  components: { SectionHeader, MyCircle },
  data() {
    return {
      loading: false,
      myselfForm: {
        name: '',
        motto: '',
        email: '',
        circleList: [],
        description: ''
      }
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  created() {
    this.myselfForm = Object.assign(this.myselfForm, this.userInfo)
    // const loading = this.$loading()
    // setTimeout(() => {
    //   loading.close()
    // }, 1500)
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 1500)
  },
  methods: {

  }
}
</script>
<style lang='scss' scoped>
.myselfForm {
  width: 65%;
  margin: 0 auto;
}
</style>
