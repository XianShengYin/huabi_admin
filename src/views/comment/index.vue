<!--  -->
<template>
  <div class="app-main">
    <section-header>Comment • 评论</section-header>

    <el-table
      :data="tableData"
      stripe
    >
      <!-- 悬浮显示标题图 -->
      <el-table-column
        fixed
        prop="title"
        width="200"
        header-align="center"
      >
        <template v-slot:header>
          <el-input size="mini" placeholder="文章标题搜索" />
        </template>
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型"
        width="100"
        header-align="center"
        align="center"
        :filters="[{ text: '评论', value: '评论' }, { text: '留言', value: '留言' }]"
      />
      <el-table-column
        prop="submissionTime"
        width="220"
        sortable
        header-align="center"
      >
        <template v-slot:header>
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
              提交时间
            </el-button>
          </el-popover>
        </template>
      </el-table-column>
      <!-- 邮箱 要脱敏 -->
      <el-table-column
        prop="email"
        label="邮箱"
        width="100"
        header-align="center"
        show-overflow-tooltip
      />
      <el-table-column
        prop="content"
        label="内容"
        max-width="200"
        header-align="center"
        show-overflow-tooltip
      />
      <!-- 是 / 否 是否是回复内容 -->
      <el-table-column
        prop="isReply"
        label="回复"
        width="60"
        header-align="center"
        align="center"
      />
      <el-table-column
        prop="status"
        label="状态"
        width="60"
        header-align="center"
        align="center"
      />
      <el-table-column
        fixed="right"
        width="150"
        header-align="center"
        align="center"
      >
        <template v-slot:header>
          <el-button type="text" size="small">
            一键全读
          </el-button>
          <!-- 设置全局评论/留言功能开启/关闭 -->
          <el-button type="text" size="small">
            设置
          </el-button>
          <el-button type="text" size="small">
            刷新
          </el-button>
        </template>
        <template>
          <!-- 同时显示到该评论/留言的最顶部回复项 -->
          <el-button type="text" size="small">
            查看
          </el-button>
          <!-- 同时显示该评论/留言内容 -->
          <el-button type="text" size="small">
            回复
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'
export default {
  components: { SectionHeader },
  data() {
    return {
      tableData: [{
        title: '关于防范资本操控舆论',
        type: '评论',
        submissionTime: '2020年12月15日 13点15分30秒',
        email: '123456@163.com',
        content: '作者好帅!我要给你生猴子!!!',
        isReply: '否',
        status: '未读'
      }, {
        title: '------',
        type: '留言',
        submissionTime: '2020年12月16日 13点15分30秒',
        email: '123456@163.com',
        content: '作者好帅!我要给你生猴子!!!',
        isReply: '否',
        status: '未读'
      }, {
        title: '关于防范资本操控舆论',
        type: '评论',
        submissionTime: '2020年11月25日 13点15分30秒',
        email: '123456@163.com',
        content: '回复你了,我要给你生猴子!!!',
        isReply: '是',
        status: '未读'
      }, {
        title: '关于防范资本操控舆论',
        type: '评论',
        submissionTime: '2020年11月15日 13点15分30秒',
        email: '123456@163.com',
        content: '作者好帅!我要给你生猴子!!!',
        isReply: '否',
        status: '已读'
      }, {
        title: '------',
        type: '留言',
        submissionTime: '2020年12月15日 9点15分30秒',
        email: '123456@163.com',
        content: '回复你啊!作者好帅!我要给你生猴子!!!',
        isReply: '是',
        status: '已读'
      }, {
        title: '关于防范资本操控舆论',
        type: '评论',
        submissionTime: '2020年12月1日 13点15分30秒',
        email: '123456@163.com',
        content: '作者好帅!我要给你生猴子!!!',
        isReply: '否',
        status: '已读'
      }, {
        title: '关于防范资本操控舆论',
        type: '评论',
        submissionTime: '2020年12月13日 13点15分30秒',
        email: '123456@163.com',
        content: '作者好帅!我要给你生猴子!!!',
        isReply: '否',
        status: '已读'
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
      value2: ''
    }
  },
  computed: {},
  created() {

  },
  methods: {

  }
}
</script>
<style lang='scss' scoped>

</style>
