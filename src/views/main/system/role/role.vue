<template>
  <div class="role">
    <fromL v-bind="LFrom" v-model="fromDatas"></fromL>
    <list-table
      v-bind="{
        LTabelConfig,
        netWorkConfig,
        dialogConfig,
        dialogFromDatas,
        dialogLFrom
      }"
    ></list-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import fromL from '@/components-ui/mainInput' //输入框组件
import listTable from '@/components-ui/listTable/listTable.vue' //表格组件

import { LFrom, fromDatas } from './inputConfig' //输入框配置文件

import { LTabelConfig, netWorkConfig } from './tabelConfig' //表格配置文件
import { dialogConfig } from './dialogConfig/dialogConfig' //对话框配置文件
import { dialogLFrom, dialogFromDatas } from './dialogConfig/formConfig' //对话框的输入框配置文件

export default defineComponent({
  name: 'role',
  components: {
    fromL,
    listTable
  },
  setup() {
    return {
      LFrom,
      fromDatas,
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
