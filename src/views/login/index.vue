<!--  -->
<template>
  <div class="app-main login-container">
    <!-- https://www.zcool.com.cn/work/ZMjA2ODY4MTI=.html -->
    <el-image class="login-container-bg" :src="require('@/assets/logo.png')" fit="cover" />
    <div class="login-form-container">
      <el-form ref="form" class="login-form" :model="formData" autocomplete="on" label-position="left">
        <el-form-item label="用户名">
          <el-input v-model="formData.userName" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formData.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      formData: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {

  }
}
</script>
<style lang='scss' scoped>
.login-container {
  position: relative;
}

.login-container-bg {
  width: 100%;
  height: 100%;
  z-index: 50;
}

// https://blog.csdn.net/freshlover/article/details/11579669 CSS positioning
.login-form-container {
  z-index: 100;
  width: 50%;
  height: 50%;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(150, 150, 150, 0.3);
  padding: 30px;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
}
</style>
