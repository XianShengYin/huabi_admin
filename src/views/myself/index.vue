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
        <mavon-editor ref="descriptionEditor" v-model="myselfForm.editorValue" :autofocus="false" style="min-height:600px;" @change="editorChange" />
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
// https://www.jianshu.com/p/02379604ca9c mavon-editor 使用
// https://github.com/hinesboy/mavonEditor mavon-editor github地址
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  components: { SectionHeader, MyCircle, mavonEditor },
  data() {
    return {
      loading: false,
      myselfForm: {
        name: '',
        motto: '',
        email: '',
        circleList: [],
        description: ''
      },
      editorValue: '',
      editorHtml: ''
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
    }, 500)
  },
  methods: {
    editorChange(value, render) {
      // render 为 markdown 解析后的结果[html]
      console.log('editorValue : ', value)
      this.editorHtml = render
      console.log('editorHtml : ', render)
    }
  }
}
</script>
<style lang='scss' scoped>
.myselfForm {
  width: 65%;
  margin: 0 auto;
}
</style>
