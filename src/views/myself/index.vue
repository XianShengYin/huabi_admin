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
        <el-input v-model="myselfForm.email" placeholder="email • 邮箱" />
      </el-form-item>
      <el-form-item label="圈子">
        <my-circle :data="myselfForm.circleList" />
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
import SectionHeader from '@/components/SectionHeader'
import MyCircle from '@/components/MyCircle'
import { mapGetters } from 'vuex'
export default {
  components: { SectionHeader, MyCircle },
  data() {
    return {
      myselfForm: {
        name: '',
        motto: '',
        email: '',
        circleList: [
          { title: 'QQ', icon: 'qq', isPic: 0, content: '26320401980' },
          { title: '微信', icon: 'weixin', isPic: 1, content: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg' },
          { title: 'Github', icon: 'github', isPic: 0, content: 'https://github.com/XianShengYin' },
          { title: 'Gitee', icon: 'gitee', isPic: 0, content: 'https://gitee.com' },
          { title: '网易云', icon: 'wangyiyun', isPic: 0, content: 'https://music.163.com' },
          { title: 'bilibili', icon: 'bilibili', isPic: 0, content: 'https://bilibili.com' }
        ]
      }
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
  margin: 0 auto;
}
</style>
