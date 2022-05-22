<template>
  <div class="ldialog">
    <el-dialog
      v-model="dialogChange"
      :title="dialogType == 'delete' ? dialogConfig.titleText : fromTitle"
      :width="dialogType == 'delete' ? '20%' : '25%'"
      destroy-on-close
      @close="handlerClose"
      center
    >
      <div>
        <template v-if="dialogType == 'delete'">
          <strong>{{ dialogConfig.deleteContent }}</strong>
        </template>
        <template v-else>
          <from-l v-bind="mirrorDialogLFrom" v-model="fromData"></from-l>
        </template>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogChange = false">取消</el-button>
          <el-button type="primary" @click="deleteRow(dialogType)"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch, watchEffect } from 'vue'

import type { dialogTypes } from '@/components-ui/listTable/types/type'
import type { queryInfoType } from '../types/type'

import fromL from '@/components-ui/mainInput' //输入框组件

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    dialogType: {
      type: String,
      default: 'delete'
    },
    titleText: {
      type: String,
      default: '危险操作'
    },
    dialogConfig: {
      type: Object
    },
    //弹出的对话框的表单配置
    dialogLFrom: {
      type: Object
    },
    dialogFromDatas: {
      type: Object
    }
  },
  components: {
    fromL
  },
  emits: ['update:modelValue', 'deleteRequest', 'update:createUser'],
  setup(props, { emit }) {
    //1.双向绑定是否显示对话框dialog
    let dialogChange = ref(props.modelValue)
    watchEffect(() => {
      dialogChange.value = props.modelValue
    })
    watch(dialogChange, (newValue) => emit('update:modelValue', newValue))

    const fromData = ref({ ...props.dialogFromDatas })
    //2.确定删除/编辑/新建点击后调用vuex删除请求的钩子
    function deleteRow(deman: dialogTypes) {
      dialogChange.value = false
      let queryInfo: queryInfoType = {
        demand: deman,
        info: fromData.value,
        name: ''
      }
      emit('deleteRequest', queryInfo)
    }
    //浅拷贝
    let mirrorDialogLFrom = ref({ ...props.dialogLFrom })
    //再对fromItem浅拷贝
    mirrorDialogLFrom.value.fromItem = ref([...props.dialogLFrom?.fromItem])
    // 3.标题显示的文字
    let fromTitle = computed(() =>
      props.dialogType == 'create' ? '新建' : '编辑'
    )

    let dialogPadding = ref('25px')
    //编辑，新建，跟删除的对话框不一样
    let indexs: number[] = []
    watchEffect(() => {
      if (props.dialogType == 'delete') {
        dialogPadding.value = '25px'
      } else if (props.dialogType == 'create') {
        // 数组里的个数不等说明被删除了
        if (
          props.dialogLFrom?.fromItem.length !=
          mirrorDialogLFrom.value.fromItem.length
        ) {
          //既然被删除了就需要重置原本的fromItem
          mirrorDialogLFrom.value.fromItem = ref([
            ...props.dialogLFrom?.fromItem
          ])
        }
        dialogPadding.value = '0px'
      } else if (props.dialogType == 'update') {
        //如果是update把不需要显示的删除掉
        // 筛选出含有updateShow属性的位置放到indexs
        mirrorDialogLFrom.value.fromItem.find((item: any, index: any) => {
          if (item.updateShow) {
            indexs.push(index)
          }
        })
        //把不该显示的删除
        indexs.sort((a, b) => b - a)
        indexs.forEach((item) => {
          mirrorDialogLFrom.value.fromItem.splice(item, 1)
        })
        indexs = [] //重置indexs
        dialogPadding.value = '0px'
      }
    })
    //关闭对话框的时候清空输入框的内容
    function handlerClose() {
      for (let item in fromData.value) {
        fromData.value[`${item}`] = ''
      }
    }

    return {
      dialogChange,
      deleteRow,
      fromData,
      fromTitle,
      dialogPadding,
      handlerClose,
      mirrorDialogLFrom
    }
  }
})
</script>

<style scoped>
::v-deep .el-dialog__body {
  padding: v-bind('dialogPadding');
}
</style>
