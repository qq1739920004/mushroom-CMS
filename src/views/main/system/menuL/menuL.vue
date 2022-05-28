<template>
  <div class="menu">
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
      <template #icon="row">
        <component class="www" :is="purifyIcon(row.row.icon)"></component>
        <el-icon></el-icon>
      </template>
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
  components: {
    listTable
  },
  name: 'menuL',
  setup() {
    const purifyIcon = function (icon: string) {
      if (icon) {
        return icon.slice(8)
      }
    }
    return {
      LTabelConfig,
      netWorkConfig,
      dialogConfig,
      dialogLFrom,
      dialogFromDatas,
      purifyIcon
    }
  }
})
</script>

<style scoped>
::v-deep .cell svg {
  width: 18px;
  height: 18px;
}
</style>
