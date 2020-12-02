<template>
  <div class="circle-container">
    <div v-for="(item, index) in data" :key="index" class="circle">
      <el-tooltip placement="top" effect="light">
        <template v-slot:content>
          <img v-if="item.isPic" :src="item.content" class="circle-pic">
          <label v-else>{{ item.content }}</label>
        </template>
        <el-button circle>
          <svg-icon :iconClass="item.icon" />
        </el-button>
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
.circle {
  display: inline-block;
  margin-right: 10px;
}

.circle-pic {
  width: 100px;
}

.add-circle {
  display: inline-block;
  padding: 3px 0;
}
</style>
