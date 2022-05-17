<template>
  <div class="bread">
    <el-breadcrumb separator="/">
      <template v-for="item in breadItem" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import type { breadType } from '../types'

export default defineComponent({
  props: {
    breadItem: {
      type: Array as PropType<breadType[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.bread {
  margin-left: 100px;
}
</style>
