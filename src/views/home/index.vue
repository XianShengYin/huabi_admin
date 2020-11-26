<!--  -->
<template>
  <div class="app-main">
    <el-row :gutter="20" class="home-row">
      <el-col :span="12">
        <el-card class="home-card">
          <div slot="header">
            动态数量
          </div>
          <div />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="home-card">
          <div slot="header">
            预留区域
          </div>
          <div />
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="home-row">
      <el-col :span="12">
        <el-card class="home-card">
          <div slot="header">
            留言数量
          </div>
          <div />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="home-card">
          <div slot="header">
            <span class="todo-title">代办事项</span>
          </div>
          <div class="todo-container">
            <el-input v-model="newTodo" class="todo-input" placeholder="想要做什么？" autocomplete="off" />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newTodo: ''
    }
  },
  created () {

  },
  methods: {

  }
}
</script>
<style lang='scss' scoped>
.home-card {
  min-height: 300px;
}

.home-row:not(:last-child) {
  margin-bottom: 20px;
}
</style>
<style>
.home-card > .el-card__header {
  border: none;
}

.home-card > .el-card__body {
  padding-top: 0;
}

.todo-input > .el-input__inner {
  border: none;
}
</style>
