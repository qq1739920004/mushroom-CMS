<template>
  <div class="user">
    <from-l
      v-bind="LFrom"
      v-model="fromData"
      @serachNetwork="serachNetwork"
    ></from-l>
    <listTable
      ref="fromLRef"
      v-bind="{
        LTabelConfig,
        netWorkConfig,
        dialogConfig,
        dialogFromDatas
      }"
      :dialogLFrom="dialogLFromRef"
    ></listTable>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

import fromL from '@/components-ui/mainInput' //输入框组件
import listTable from '@/components-ui/listTable/listTable.vue' //表格组件

import { LFrom, fromDatas } from './inputConfig' //输入框配置文件
import { LTabelConfig, netWorkConfig } from './tabelConfig' //表格配置文件
import { dialogConfig } from './dialogConfig/dialogConfig' //对话框配置文件
import { getFromData } from '@/hooks/viewFromData'
import { dialogLFrom, dialogFromDatas } from './dialogConfig/formConfig' //对话框的输入框配置文件
import { LFromItem } from '@/components-ui/mainInput/types/type'

export default defineComponent({
  components: {
    fromL,
    listTable
  },
  name: 'user',
  setup() {
    const [fromData, fromLRef, serachNetwork] = getFromData(fromDatas)
    //获取角色列表，部门列表
    const dialogLFromRef = computed(() => {
      const store = useStore()
      const departmentItem: LFromItem | undefined = dialogLFrom.fromItem.find(
        (item: any) => item.field == 'departmentId'
      )
      if (departmentItem) {
        departmentItem.options = store.state.departmentList.map((item: any) => {
          return { title: item.name, value: item.id }
        })
      }
      const roleItem: LFromItem | undefined = dialogLFrom.fromItem.find(
        (item: any) => item.field == 'roleId'
      )
      if (roleItem) {
        roleItem.options = store.state.roleList.map((item: any) => {
          return { title: item.name, value: item.id }
        })
      }
      return dialogLFrom
    })

    // //1.取到配置的表单里的input需要绑定的值名称做一份浅拷贝传给组件（你为了方便数据修改）
    // const fromData = ref({ ...fromDatas })
    // //2.搜索按钮点击后的事件
    // const fromLRef = ref<InstanceType<typeof listTable>>()
    // function serachNetwork(newFromData: any) {
    //   fromLRef.value?.netWorkTable(newFromData)
    // }
    return {
      LFrom,
      fromData,
      LTabelConfig,
      netWorkConfig,
      serachNetwork,
      fromLRef,
      dialogConfig,
      dialogLFrom,
      dialogFromDatas,
      dialogLFromRef
    }
  }
})
</script>

<style scoped></style>
