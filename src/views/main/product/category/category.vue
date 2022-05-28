<template>
  <div class="category">
    <listTable
      ref="fromLRef"
      v-bind="{
        LTabelConfig,
        netWorkConfig,
        dialogConfig,
        dialogFromDatas,
        dialogLFrom
      }"
    >
    </listTable>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import listTable from '@/components-ui/listTable/listTable.vue' //表格组件

import { LTabelConfig, netWorkConfig } from './tabelConfig' //表格配置文件
import { dialogConfig } from './dialogConfig/dialogConfig' //对话框配置文件
import { dialogLFrom, dialogFromDatas } from './dialogConfig/formConfig' //对话框的输入框配置文件
export default defineComponent({
  name: 'category',
  components: {
    listTable
  },
  setup() {
    return {
      LTabelConfig,
      netWorkConfig,
      dialogConfig,
      dialogLFrom,
      dialogFromDatas
    }
  }
})
</script>

<style scoped></style>
