<!--  -->
<template>
  <div class="app-main">
    <el-row :gutter="20" class="home-row">
      <el-col :span="12">
        <el-card class="home-card">
          <template v-slot:header>
            <label class="home-card-title">Post Number • 动态数量</label>
          </template>
          <div />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="home-card">
          <template v-slot:header>
            <label class="home-card-title">预留区域</label>
          </template>
          <div />
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="home-row">
      <el-col :span="12">
        <el-card class="home-card">
          <template v-slot:header>
            <label class="home-card-title">Comment Number • 留言数量</label>
          </template>
          <div />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="home-card">
          <template v-slot:header>
            <label class="home-card-title">Todo • 代办事项</label>
            <!-- 历史记录 -->
          </template>
          <div class="todo-container">
            <el-input v-model="newTodo" class="todo-input" placeholder="想要做什么？" autocomplete="off" />
            <div v-show="todoList.length !== 0" class="todo-operating-button-group">
              <el-link type="primary" :underline="false" disabled>
                All • 全部
              </el-link>
              <el-link type="primary" :underline="false">
                Active • 实行
              </el-link>
              <el-link type="primary" :underline="false">
                Completed • 完成
              </el-link>
              <el-link type="primary" :underline="false">
                Clear completed • 清除
              </el-link>
            </div>
            <ul class="todo-list">
              <li v-for="(todo, index) in todoList" :key="index" class="todo">
                <div class="todo-view">
                  <input v-model="todo.status" class="todo-toggle" type="checkbox">
                  <label class="todo-content" @dblclick="editTodo(todo)">{{ todo.content }}</label>
                  <i class="el-icon-delete todo-remove" @click="removeTodo(todo)" />
                </div>
              </li>
            </ul>
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
      newTodo: '',
      todoList: [{ content: '今晚吃泡面', status: false }, { content: '明天喝西北风', status: true }]
    }
  },
  created () {

  },
  methods: {
    // Edit todo
    editTodo(todo) {},
    // Remove todo
    removeTodo(todo) {}
  }
}
</script>
<style lang='scss' scoped>
.home-card {
  min-height: 300px;
}

.home-card-title {
  font-size: 16px;
  color: $blue;
}

.home-row:not(:last-child) {
  margin-bottom: 20px;
}

.todo-input {
  font-size: 24px;
  color: inherit;
}

.todo-operating-button-group {
  display: flex;
  justify-content: space-around;
}

.todo-list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.todo {
  border-bottom: 1px solid #ededed;
}

.todo:last-child {
  border-bottom: none;
}

.todo:hover .todo-remove {
  display: block;
}

.todo-view {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  font-size: 24px;
}

.todo-toggle {
  text-align: center;
  width: 30px;
  height: auto;
  border: none;
  -webkit-appearance: none;
  appearance: none;
  opacity: 0;
}

.todo-content {
  word-break: break-all;
  padding: 10px 10px 10px 50px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
}

.todo-content {
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: center left;
}

// + The next selector (Adjacent selector)
.todo-toggle:checked + .todo-content {
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
}

.todo-remove {
  display: none;
  position: absolute;
  right: 0;
  font-size: 16px;
  color: #cc9a9a;
  transition: color 0.2s ease-out;
}

.todo-remove:hover {
  color: #af5b5e;
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
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}

.todo-operating-button-group > .el-link.is-disabled {
  cursor: default;
}
</style>
