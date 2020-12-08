<template>
  <!-- .sync https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-修饰符 -->
  <!-- .sync https://www.jianshu.com/p/6b062af8cf01 -->
  <!-- before-close 类型为 function(done) 是一个有参函数 -->
  <el-dialog
    :visible.sync="show" center width="600px" class="circle-dialog" :close-on-click-modal="false"
    :before-close="beClose" @open="dialogOpen" @close="dialogClose"
  >
    <el-form ref="circleForm" :model="circleForm" class="circle-form">
      <el-form-item>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-input v-model="circleForm.title" placeholder="名称" />
          </el-col>
          <el-col :span="8">
            <el-select v-model="circleForm.icon" placeholder="图标">
              <el-option v-for="(item, index) in circleSelects" :key="index" :label="item.label" :value="item.value">
                <div class="form-icon-option">
                  <span>{{ item.label }}</span>
                  <span><svg-icon :iconClass="item.value" /></span>
                </div>
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="8" style="text-align: center;">
            <el-switch
              v-model="circleForm.isPic" active-text="图片" inactive-text="链接" active-color="#409eff" inactive-color="#409eff"
              active-value="1" inactive-value="0"
            />
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <transition name="el-fade-in-linear" mode="out-in">
          <el-upload
            v-if="+circleForm.isPic" class="form-pic-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
            :on-success="uploadSuccess" :on-error="uploadError" :before-upload="uploadBefore"
          >
            <img v-if="imageUrl" :src="imageUrl" class="form-pic">
            <i v-else class="el-icon-plus form-pic-uploader-icon" />
            <template v-slot:tip>
              <div class="form-pic-uploader-tip">
                建议图片宽高比例为 2:3
              </div>
            </template>
          </el-upload>
          <el-input v-else v-model="circleForm.content" placeholder="链接地址" />
        </transition>
      </el-form-item>
    </el-form>
    <template slot="footer">
      <!-- .stop https://cn.vuejs.org/v2/guide/events.html#事件修饰符 -->
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
      default: () => { return {} }
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      circleForm: {
        title: '',
        icon: '',
        isPic: 0,
        content: ''
      },
      circleSelects: [{
        value: 'qq',
        label: 'QQ'
      }, {
        value: 'weixin',
        label: '微信'
      }, {
        value: 'github',
        label: 'Github'
      }, {
        value: 'gitee',
        label: 'Gitee'
      }, {
        value: 'wangyiyun',
        label: '网易云'
      }, {
        value: 'bilibili',
        label: 'bilibili'
      }],
      imageUrl: ''
    }
  },
  methods: {
    beClose() {
      console.log(456)
      this.$emit('update:show', false)
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
      this.circleForm = Object.assign(this.circleForm, this.data)
    },
    dialogClose() {
      console.log('111', this.circleForm)
      console.log('弹出框关闭')
    },
    // 上传成功
    uploadSuccess(res, file) {
      this.$message.success('上传成功!')
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    // 上传失败
    uploadError(err, file) {
      console.log('err', err)
      this.$message.error('上传失败!')
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    // 上传之前,返回 false 或者返回 Promise 且被 reject, 则停止上传
    uploadBefore(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>
<style lang="scss" scoped>
.circle-form .el-form-item:not(:last-child) {
  margin-bottom: 20px;
}

.form-icon-option {
  display: flex;
  justify-content: space-between;
}

.form-pic-uploader {
  text-align: center;
}

.form-pic-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.form-pic {
  width: 178px;
  height: 178px;
  display: block;
}

.form-pic-uploader-tip {
  line-height: 20px;
  color: #909399;
}
</style>
<style>
.circle-dialog > .el-dialog > .el-dialog__body {
  padding-bottom: 10px;
}

.form-pic-uploader > .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.form-pic-uploader > .el-upload:hover {
  border-color: #409EFF;
}
</style>
