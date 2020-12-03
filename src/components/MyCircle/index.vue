<template>
  <div class="circle-container">
    <div v-for="(item, index) in data" :key="index" class="circle">
      <el-tooltip placement="top" effect="light">
        <template v-slot:content>
          <img v-if="item.isPic" :src="item.content" class="circle-pic">
          <label v-else>{{ item.content }}</label>
        </template>
        <el-button circle @click="editCircle()">
          <svg-icon :iconClass="item.icon" />
        </el-button>
      </el-tooltip>
    </div>
    <div class="add-circle">
      <el-button icon="el-icon-plus" circle @click="addCircle()" />
    </div>

    <edit-circle v-if="showEditDialog" :show.sync="showEditDialog" />
  </div>
</template>
<script>
import EditCircle from './EditCircle'
export default {
  name: 'MyCircle',
  components: { EditCircle },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      showEditDialog: false
    }
  },
  methods: {
    addCircle() {
      this.showEditDialog = true
    },
    editCircle() {
      this.showEditDialog = true
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
}
</style>
