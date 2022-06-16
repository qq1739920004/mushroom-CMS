<template>
  <div class="goods">
    <listTable ref="fromLRef" v-bind="{ LTabelConfig, netWorkConfig }">
      <template #image="row">
        <div class="demo-image__error">
          <el-image
            style="width: 60px; height: 75px"
            :src="row.row.imgUrl"
            fit="fill"
            :initial-index="4"
            @click="dilogIsShow" :data-id='row.row.imgUrl'
          />
<teleport to='body'>
          <el-dialog  v-model="dialogShow" v-if="dialogUrl==row.row.imgUrl" width='20%' draggable custom-class="kl-dialog"
            >
            <el-image
              :src="row.row.imgUrl"
              :initial-index="4"
              :z-index="999"
          /></el-dialog></teleport>
        </div>
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
    let isShowTable = ref(true)
    let dialogShow = ref(false)
    let dialogUrl=ref('')
    //遮罩层显示
    function dilogIsShow(e:any) {
      console.log(e.target.dataset.id)
      dialogShow.value=true
      dialogUrl.value = e.target.dataset.id
    }
    //搜索按钮点击后的事件
    const fromLRef = ref<InstanceType<typeof listTable>>()
    function serachNetwork(newFromData: any) {
      fromLRef.value?.netWorkTable(newFromData)
    }

    return {
      LTabelConfig,
      netWorkConfig,
      serachNetwork,
      fromLRef,
      isShowTable,
      dialogShow,
      dilogIsShow,
      dialogUrl
    }
  }
})
</script>
<style lang="less" scoped>
::v-deep .demo-image__error .image-slot {
  font-size: 30px;
}
::v-deep .demo-image__error .image-slot .el-icon {
  font-size: 30px;
}
::v-deep .demo-image__error .el-image {
  width: 100%;
  height: 200px;
}
::v-deep .el-image-viewer__img {
  position: relative;
  z-index: 999999 !important;
}
.kl-dialog .el-dialog__body{
  padding: 0 !important;
}

</style>
