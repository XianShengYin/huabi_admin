<!--  -->
<template>
  <div class="app-main login-container">
    <!-- <el-image class="login-container-bg" :src="require('@/assets/logo.png')" fit="cover" /> -->
    <div class="login-form-container">
      <el-form
        ref="loginForm" v-loading="loginButtonLoading" class="login-form" :model="formData" :rules="formRules"
        autocomplete="on"
      >
        <el-form-item prop="username">
          <el-input v-model="formData.username" class="login-form-input" placeholder="username" prefix-icon="el-icon-user" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="formData.password" class="login-form-input" placeholder="password" prefix-icon="el-icon-lock" show-password />
        </el-form-item>
        <el-form-item>
          <el-button class="login-form-button" type="primary" round :loading="loginButtonLoading" @click="login()">
            login
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '@/api'
export default {
  components: {},
  data () {
    return {
      formData: {
        username: '',
        password: ''
      },
      // https://github.com/yiminghe/async-validator ValidateRules
      formRules: {
        username: [{ required: true, message: 'The user name cannot be empty', trigger: 'blur' }],
        password: [{ required: true, message: 'The password cannot be empty', trigger: 'blur' },
          { min: 6, max: 15, message: 'The password number is 6 to 15 bits', trigger: 'blur' }]
      },
      loginButtonLoading: false
    }
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          this.loginButtonLoading = true
          const { data } = await login(this.formData)
          if (data && data.code === 20000) {
            this.$message.success({ message: 'login success', duration: 1000, center: true })
            this.$store.dispatch('setUserInfo', data.data)
            this.$router.push('/')
          } else {
            this.$message.error('login error ：' + data.msg)
          }
          this.loginButtonLoading = false
        }
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.login-container {
  position: relative;
  overflow: hidden;
}

.login-container-bg {
  width: 100%;
  height: 100%;
  z-index: 50;
}

// https://blog.csdn.net/freshlover/article/details/11579669 CSS positioning
.login-form-container {
  z-index: 100;
  width: 400px;
  height: 224px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  background-color: #ffffff;
  padding: 30px;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
}

.login-form-button {
  width: 100%;
}
</style>
<style>
/* > The child selector */
.login-form-input > .el-input__inner {
  border-radius: 20px;
}
</style>
