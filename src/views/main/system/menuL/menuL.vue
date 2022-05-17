<template>
  <div class="menu">
    <listTable
      ref="fromLRef"
      v-bind="{ LTabelConfig, netWorkConfig }"
    ></listTable>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import listTable from '@/components-ui/listTable/listTable.vue' //表格组件

import { LTabelConfig, netWorkConfig } from './tabelConfig' //表格配置文件

export default defineComponent({
  components: {
    listTable
  },
  name: 'menuL',
  setup() {
    return {
      LTabelConfig,
      netWorkConfig
    }
  }
})
</script>

<style scoped></style>
