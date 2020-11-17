<!--  -->
<template>
  <div class="app-main">
    <el-row :gutter="20" class="home-row">
      <el-col :span="12">
        <el-card class="home-card">
          <el-button type="success" @click="goLogin()">
            登录
          </el-button>
          <el-button type="success" @click="mock1()">
            Mock1
          </el-button>
          <el-button type="success" @click="mock2()">
            Mock2
          </el-button>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="home-card">
          <el-button @click="showRow = !showRow">
            OK
          </el-button>
        </el-card>
      </el-col>
    </el-row>
    <el-row v-if="showRow" :gutter="20" class="home-row">
      <el-col :span="12">
        <el-card class="home-card">
          <el-input />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="home-card">
          <el-button>ABC</el-button>
        </el-card>
      </el-col>
    </el-row>
    <el-row v-if="showRow" :gutter="20" class="home-row">
      <el-col :span="12">
        <el-card class="home-card">
          <el-input />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="home-card">
          <el-button>123</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { blogs, blogTypes } from '@/api'
export default {
// import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
      showRow: true
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () {}, // 生命周期 - 创建之前
  beforeMount () {}, // 生命周期 - 挂载之前
  beforeUpdate () {}, // 生命周期 - 更新之前
  updated () {}, // 生命周期 - 更新之后
  beforeDestroy () {}, // 生命周期 - 销毁之前
  destroyed () {}, // 生命周期 - 销毁完成
  activated () {},
  // 方法集合
  methods: {
    goLogin () {
      this.$router.push('/login')
    },
    mock1 () {
      blogs()
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    mock2 () {
      blogTypes()
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  } // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.home-card {
  height: 300px;
}

.home-row:not(:last-child) {
  margin-bottom: 20px;
}
</style>
