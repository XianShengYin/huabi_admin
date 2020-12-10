<!--  -->
<template>
  <div class="app-main">
    <section-header>Post • 动态</section-header>
    <div class="tabs">
      <el-button type="text" size="small">
        动态
      </el-button>
      <el-button type="text" size="small">
        文章
      </el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        type="selection"
        width="55"
      />
      <!-- 悬浮显示标题图 -->
      <el-table-column
        fixed
        prop="date"
        width="150"
      >
        <template v-slot:header>
          <el-input size="mini" placeholder="标题搜索" />
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="分类"
        width="120"
        :filters="[{ text: '前端', value: '前端' }, { text: '后端', value: '后端' }]"
      />
      <el-table-column
        prop="date"
        label="发表时间"
        width="120"
      />
      <el-table-column
        prop="city"
        label="PV"
        width="120"
      />
      <el-table-column
        prop="date"
        label="标签"
      />
      <!-- 原创 / 转载(悬浮显示转载地址) -->
      <el-table-column
        prop="city"
        label="来源"
      />
      <!-- 开启 / 关闭 -->
      <el-table-column
        prop="city"
        label="评论"
      />
      <!-- 首页显示的那三个, 超过后提示弹出框选择取消其中一个 -->
      <el-table-column
        prop="city"
        label="推荐"
      />
      <!-- 草稿 / 正常 / 隐藏 -->
      <el-table-column
        prop="zip"
        label="状态"
        width="120"
      />
      <el-table-column
        fixed="right"
        width="150"
      >
        <template v-slot:header>
          <el-button type="text" size="small">
            添加
          </el-button>
        </template>
        <template>
          <el-button type="text" size="small">
            查看
          </el-button>
          <el-button type="text" size="small">
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 其他组件 -->
    <mavon-editor v-if="false" ref="descriptionEditor" v-model="editorValue" :autofocus="false" style="min-height:600px;" />
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  components: { SectionHeader, mavonEditor },
  data() {
    // 这里存放数据
    return {
      activeName: 'article',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }],
      editorValue: ''
    }
  },
  created() {

  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang='scss' scoped>
.tabs {
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
}
</style>
