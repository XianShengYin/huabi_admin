<!--  -->
<template>
  <div class="app-main">
    <section-header>Post • 动态</section-header>

    <div class="post-header">
      <el-dropdown @command="switchCommand">
        <span class="el-dropdown-link">
          {{ nowSwitchTitle }}<i class="el-icon-arrow-down el-icon--right" />
        </span>
        <template v-slot:dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="(item, index) in switchSelects" :key="index" :command="item.command">
              {{ item.title }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <div>
        <el-button size="mini" icon="el-icon-edit" round>
          添加
        </el-button>
        <el-button size="mini" icon="el-icon-refresh" circle />
      </div>
    </div>

    <transition name="el-fade-in-linear" mode="out-in">
      <div v-if="nowSwitch === 'post'" class="post-timeline">
        <el-timeline>
          <el-timeline-item timestamp="2020/12/15" placement="top">
            <el-card class="post-timeline-card">
              <el-dropdown>
                <i class="el-icon-more more" />
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>编辑</el-dropdown-item>
                  <el-dropdown-item>隐藏</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2020/12/15 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2020/12/14" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2020/12/14 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/12" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/12 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/3" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/3 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/2 20:46</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>

      <el-table
        v-if="nowSwitch === 'article'"
        :data="tableData"
        stripe
        class="post-table"
      >
        <el-table-column
          type="selection"
          width="55"
          header-align="center"
          align="center"
        />
        <!-- 悬浮显示标题图 -->
        <el-table-column
          fixed
          prop="title"
          width="200"
          header-align="center"
        >
          <template v-slot:header>
            <el-input size="mini" placeholder="标题搜索" />
          </template>
        </el-table-column>
        <el-table-column
          prop="type"
          label="分类"
          width="100"
          header-align="center"
          align="center"
          :filters="[{ text: '前端', value: '前端' }, { text: '后端', value: '后端' }, { text: '开发工具', value: '开发工具' }]"
        />
        <el-table-column
          prop="tags"
          label="标签"
          min-width="100"
          show-overflow-tooltip
          header-align="center"
          align="center"
          :filters="[{ text: 'Java', value: 'Java' }, { text: 'JS', value: 'JS' }, { text: 'Linux', value: 'Linux' }, { text: 'IDEA', value: 'IDEA' }]"
        />
        <el-table-column
          prop="publishedTime"
          width="200"
          sortable
          header-align="center"
        >
          <template v-slot:header>
            <!-- <el-input size="mini" placeholder="发表时间" style="width:60%;" /> -->
            <el-popover
              placement="top"
              trigger="hover"
            >
              <el-date-picker
                v-model="value2"
                type="datetimerange"
                :picker-options="pickerOptions"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="right"
              />
              <el-button slot="reference" size="mini">
                发表时间
              </el-button>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          prop="pv"
          label="PV"
          width="60"
          header-align="center"
          align="center"
        />
        <!-- 开启 / 关闭 -->
        <el-table-column
          prop="commentFunction"
          label="评论"
          header-align="center"
          align="center"
          :filters="[{ text: '开启', value: '开启' }, { text: '关闭', value: '关闭' }]"
        />
        <!-- 原创 / 转载(悬浮显示转载地址) -->
        <el-table-column
          prop="source"
          label="来源"
          header-align="center"
          align="center"
          :filters="[{ text: '原创', value: '原创' }, { text: '转载', value: '转载' }]"
        />
        <!-- 首页显示的那三个, 超过后提示弹出框选择取消其中一个 -->
        <el-table-column
          prop="recommend"
          label="推荐"
          header-align="center"
          align="center"
          :filters="[{ text: '是', value: '是' }, { text: '否', value: '否' }]"
        />
        <!-- 草稿 / 正常 / 隐藏 -->
        <el-table-column
          prop="status"
          label="状态"
          width="80"
          header-align="center"
          align="center"
          :filters="[{ text: '草稿', value: '草稿' }, { text: '正常', value: '正常' }, { text: '隐藏', value: '隐藏' }]"
        />
        <el-table-column
          fixed="right"
          width="150"
          header-align="center"
          align="center"
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
    </transition>

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
    return {
      nowSwitch: 'post',
      switchSelects: [{ title: '动态', command: 'post' }, { title: '文章', command: 'article' }],
      tableData: [{
        title: '关于防范资本操控舆论',
        type: '前端',
        tags: 'Vue.js,CSS',
        publishedTime: '2020年12月15日 13点15分',
        pv: 233,
        commentFunction: '开启',
        source: '原创',
        recommend: '是',
        status: '正常'
      }, {
        title: '关于防范资本操控舆论',
        type: '前端',
        tags: 'JavaScript,jQuery',
        publishedTime: '2020年12月16日 13点15分',
        pv: 0,
        commentFunction: '开启',
        source: '原创',
        recommend: '否',
        status: '草稿'
      }, {
        title: '关于防范资本操控舆论',
        type: '服务器',
        tags: 'Linux',
        publishedTime: '2020年11月25日 13点15分',
        pv: 233,
        commentFunction: '开启',
        source: '原创',
        recommend: '否',
        status: '正常'
      }, {
        title: '关于防范资本操控舆论',
        type: '开发工具',
        tags: 'IDEA',
        publishedTime: '2020年11月15日 13点15分',
        pv: 233,
        commentFunction: '开启',
        source: '原创',
        recommend: '是',
        status: '隐藏'
      }, {
        title: '关于防范资本操控舆论',
        type: '后端',
        tags: 'Java,Spring Boot',
        publishedTime: '2020年12月15日 9点15分',
        pv: 0,
        commentFunction: '开启',
        source: '转载',
        recommend: '否',
        status: '草稿'
      }, {
        title: '关于防范资本操控舆论',
        type: '前端',
        tags: 'Vue.js,CSS',
        publishedTime: '2020年12月1日 13点15分',
        pv: 233,
        commentFunction: '关闭',
        source: '原创',
        recommend: '否',
        status: '正常'
      }, {
        title: '关于防范资本操控舆论',
        type: '前端',
        tags: 'Vue.js,CSS',
        publishedTime: '2020年12月13日 13点15分',
        pv: 233,
        commentFunction: '开启',
        source: '原创',
        recommend: '否',
        status: '正常'
      }],
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value2: '',
      editorValue: ''
    }
  },
  // https://cn.vuejs.org/v2/api/#computed 计算属性 (使用了箭头函数，则 this 不会指向这个组件的实例，不过你仍然可以将其实例作为函数的第一个参数来访问)
  computed: {
    // 当前列表名称
    nowSwitchTitle: _this => _this.switchSelects.filter(v => v.command === _this.nowSwitch)[0].title
  },
  created() {

  },
  methods: {
    // 列表切换
    switchCommand(command) {
      console.log('command : ', command)
      this.nowSwitch = command
    }
  }
}
</script>
<style lang='scss' scoped>
.post-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 15px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

.el-icon-arrow-down {
  font-size: 12px;
}

.post-timeline {
  width: 100%;
  background-color: #ffffff;
  padding-top: 20px;
}

.post-timeline-card {
  position: relative;
  .el-dropdown {
    position: absolute;
    right: 20px;
    top: 12px;
    .more {
      cursor: pointer;
      font-size: 20px;
    }
  }
}

.el-timeline {
  padding-right: 40px;
}
</style>
<style>
.post-table > .el-table__body-wrapper::-webkit-scrollbar {
  height: auto;
}

.post-table > .el-table__body-wrapper::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: rgba(144,147,153,.3);
}
</style>
