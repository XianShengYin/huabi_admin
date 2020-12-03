<template>
  <!-- https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-修饰符 -->
  <!-- https://www.jianshu.com/p/6b062af8cf01 -->

  <!-- https://blog.csdn.net/weixin_43988238/article/details/107658002 -->
  <el-dialog :visible.sync="show" center :before-close="beClose()" @open="dialogOpen()" @close="dialogClose()">
    <el-form :model="form">
      <el-form-item label="图标">
        <el-select v-model="form.name" placeholder="请选择">
          <el-option-group
            v-for="group in options"
            :key="group.label"
            :label="group.label"
          >
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px"><svg-icon iconClass="bilibili" /></span>
            </el-option>
          </el-option-group>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="类型">
        <el-switch
          v-model="form.isPic"
          active-text="图片"
          inactive-text="链接"
          active-color="#409eff"
          inactive-color="#409eff"
          active-value="1"
          inactive-value="0"
        />
      </el-form-item>
      <el-form-item label="内容">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template slot="footer" class="dialog-footer">
      <!-- https://cn.vuejs.org/v2/guide/events.html#事件修饰符 -->
      <el-button @click.stop="closeDialog()">
        取 消
      </el-button>
      <el-button type="primary" @click.stop="save()">
        保 存
      </el-button>
    </template>
  </el-dialog>
</template>
<script>
export default {
  name: 'EditCircle',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        isPic: 0
      },
      options: [{
        label: '热门城市',
        options: [{
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Beijing',
          label: '北京'
        }]
      }, {
        label: '城市名',
        options: [{
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }, {
          value: 'Dalian',
          label: '大连'
        }]
      }]
    }
  },
  methods: {
    beClose() {
      console.log(456)
      // this.$emit('update:show', false)
    },
    // 关闭弹出框
    closeDialog() {
      console.log(123)
      // 通知父组件更新属性值
      this.$emit('update:show', false)
    },
    // 保存
    save() {
      this.closeDialog()
    },
    dialogOpen() {
      console.log('dialog data : ', this.data)
      this.form = Object.assign(this.form, this.data)
    },
    dialogClose() {
      console.log('弹出框关闭')
    }
  }
}
</script>
<style>

</style>
