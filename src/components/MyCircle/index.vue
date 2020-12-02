<template>
  <div class="circle-container">
    <div v-for="(item, index) in data" :key="index" class="circle">
      <el-tooltip placement="top" effect="light">
        <template v-slot:content>
          <el-image v-if="item.isPic" :src="item.content" />
          <label v-else>{{ item.content }}</label>
        </template>
        <el-popover
          placement="top"
          width="400"
          trigger="click"
        >
          <el-input />
          <el-button slot="reference" icon="el-icon-eleme" circle />
        </el-popover>
      </el-tooltip>
    </div>
    <div class="add-circle">
      <el-button icon="el-icon-plus" circle @click="addCircle()" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyCircle',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {
    addCircle() {
      this.data.push(1)
    }
  }
}
</script>
<style lang="scss" scoped>
.circle-container {

}
.circle {
  display: inline-block;
  margin-right: 10px;
  padding: 3px 0;
}

.add-circle {
  display: inline-block;
  padding: 3px 0;
}
</style>
