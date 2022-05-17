<template>
  <div class="goods">
    <listTable ref="fromLRef" v-bind="{ LTabelConfig, netWorkConfig }">
      <template #image="row">
        <el-image
          style="width: 60px; height: 75px"
          :src="row.row.imgUrl"
          fit="fill"
        />
      </template>
    </listTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import listTable from '@/components-ui/listTable/listTable.vue' //表格组件

import { LTabelConfig, netWorkConfig } from './tabelConfig' //表格配置文件

export default defineComponent({
  components: {
    listTable
  },
  name: 'goods',
  setup() {
    //搜索按钮点击后的事件
    const fromLRef = ref<InstanceType<typeof listTable>>()
    function serachNetwork(newFromData: any) {
      fromLRef.value?.netWorkTable(newFromData)
    }
    return {
      LTabelConfig,
      netWorkConfig,
      serachNetwork,
      fromLRef
    }
  }
})
</script>
