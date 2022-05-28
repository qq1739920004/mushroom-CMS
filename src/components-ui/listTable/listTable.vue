<template>
  <div class="userTabel">
    <l-table
      :propsList="propsList"
      v-bind="LTabelConfig"
      :usersCount="usersCount"
      @queryInfoChange="paginationChangeNetwork"
    >
      <!-- 列表头插槽 -->
      <template #headerHandler>
        <div class="handler">
          <el-button
            v-if="isCreate"
            type="primary"
            size="default"
            @click="centerDialogVisibleChange('create', 1)"
            >{{ dialogConfig?.title ? dialogConfig.title : '新建' }}</el-button
          >
        </div>
      </template>
      <!-- 状态插槽 -->
      <template v-slot:status="row">
        <el-button v-if="row.row.enable" type="primary" size="small"
          >启动</el-button
        >
        <el-button v-if="!row.row.enable" type="danger" size="small"
          >禁用</el-button
        >
      </template>
      <!-- 创建时间插槽 -->
      <template v-slot:createAt="row"
        ><strong>
          {{ purify(row.row.createAt) }}
        </strong>
      </template>
      <!-- 更新时间插槽 -->
      <template v-slot:updateAt="row"
        ><strong>
          {{ purify(row.row.updateAt) }}
        </strong>
      </template>
      <!-- 操作插槽 -->
      <template #handler="row">
        <el-button
          v-if="isUpdate"
          type="text"
          size="default"
          icon="edit"
          @click="centerDialogVisibleChange('update', row)"
        >
          编辑
        </el-button>
        <el-button
          v-if="isDelete"
          type="text"
          size="default"
          icon="delete"
          @click="centerDialogVisibleChange('delete', row)"
        >
          删除
        </el-button>
      </template>

      <!-- 上面都为每个表格必有得插槽 -->
      <!-- 下面动态从配置生成页面不同表格独有得插槽 -->
      <template
        v-for="item in otherSlot"
        :key="item.prop"
        #[item.slotName]="row"
      >
        <template v-if="item.slotName">
          <!-- 把子组件插槽抛出给父组件（相当于父填补孙子的插槽） -->
          <slot :name="item.slotName" :row="row.row"> </slot>
        </template>
      </template>
    </l-table>
  </div>
  <!-- 点击删除跳出是否确定 -->
  <template v-if="dialogConfig">
    <l-dialog
      v-model="centerDialogVisible"
      :dialogType="dialogType"
      v-bind="{ dialogConfig, dialogLFrom, dialogFromDatas }"
      @deleteRequest="centerDialogVisibleChangeMirror"
    >
      <div class="menu-tree" v-if="munusList && dialogType != 'delete'">
        <el-tree
          ref="elTreeRef"
          :data="munusList"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="checkTree"
        ></el-tree>
      </div>
    </l-dialog>
  </template>
</template>

<script lang="ts">
import { computed, defineComponent, ref, onMounted, nextTick } from 'vue'
import LTable from '@/components-ui/LTable/index'
import { useStore } from 'vuex'

import { isRole } from '@/utils/isRole'

import { purify } from '@/utils/filterDate' //把utc格式的时间数据变成正常格式

import LDialog from '@/components-ui/Ldialog/index' //点击删除按钮会跳出来问你是否确定删除的对话框

import type { dialogTypes } from './types/type'

import { roleMenusSelect } from '@/utils/mapMenusUrl' //获取此角色所拥有的叶子权限（用于回选）
import type { ElTree } from 'element-plus'

export default defineComponent({
  components: {
    LTable,
    LDialog
  },
  props: {
    // 网络请求数据
    netWorkConfig: {
      type: Object,
      required: true
    },
    //表格配置数据
    LTabelConfig: {
      type: Object,
      required: true
    },
    //弹出的对话框配置
    dialogConfig: {
      type: Object
    },
    //弹出的对话框的表单配置
    dialogLFrom: {
      type: Object
    },
    dialogFromDatas: {
      type: Object
    },
    //菜单列表（用于角色选择）
    munusList: {
      type: Array
    }
  },
  setup(props) {
    //0.获取操作的权限
    const isCreate = isRole(props.netWorkConfig.pageName, 'create')
    const isUpdate = isRole(props.netWorkConfig.pageName, 'update')
    const isDelete = isRole(props.netWorkConfig.pageName, 'delete')
    const isQuery = isRole(props.netWorkConfig.pageName, 'query')

    //1.请求用户表格数据
    const store = useStore()
    let propsList: any
    let copyValue: any //用于存储input搜索的内容，改变分页器的时候需要用到
    let tabelConfig: any ////用于存储发送表格请求的参数内容，删除数据后刷新页面的时候需要用到
    function netWorkTable(value?: any, queryInfo?: any) {
      if (!isQuery) return
      // 有value传过来的话保存好，方便更新表格的时候还在当前搜索的表格
      if (value) {
        copyValue = value
      }
      //把参数筛取传过去，因为搜索的时候有一些参数不能传
      const netWorkConfig = { pageName: '', queryInfo: '' }
      let purifyValue
      if (copyValue) {
        const { id, name, password, createAt } = copyValue
        if (createAt) {
          createAt['0'] = purify(createAt['0'])
          createAt['1'] = purify(createAt['1'])
        }

        purifyValue = { id, name, password, createAt }
      }
      netWorkConfig.pageName = props.netWorkConfig.pageName
      if (!queryInfo) {
        netWorkConfig.queryInfo = {
          ...props.netWorkConfig.queryInfo,
          ...purifyValue
        }
        // 保存好当前页数的参数，方便更新表格的时候还在当前页数的表格
        tabelConfig = props.netWorkConfig.queryInfo
      } else {
        netWorkConfig.queryInfo = {
          ...queryInfo,
          ...purifyValue
        }
        // 保存好当前页数的参数，方便更新表格的时候还在当前页数的表格
        tabelConfig = queryInfo
      }

      // 2.获取vuex里面的数据
      store.dispatch('listModule/ListRequest', netWorkConfig)
      propsList = computed(() => {
        return store.getters[`listModule/dataList`](
          `${props.netWorkConfig.pageName}`
        )
      })
    }

    netWorkTable()
    //3.改变分页器的时候重新发生网络请求
    function paginationChangeNetwork(value: any) {
      netWorkTable(copyValue, value)
    }
    //分页器的总条数
    const usersCount = computed(() => {
      return store.getters[`listModule/dataCount`](
        `${props.netWorkConfig.pageName}`
      )
    })
    // 4.获取config中需要动态生成的所有插槽
    const otherSlot = props.LTabelConfig?.propList?.filter((item: any) => {
      if (item.slotName) {
        if (
          item.slotName == 'status' ||
          item.slotName == 'createAt' ||
          item.slotName == 'updateAt' ||
          item.slotName == 'handler'
        ) {
          return false
        } else {
          return true
        }
      } else {
        return false
      }
    })
    // 5.对话模块
    //对话框是否跳出
    const centerDialogVisible = ref(false)
    const dialogType = ref<dialogTypes>()
    const elTreeRef = ref<InstanceType<typeof ElTree>>() //拿树形组件的

    //调用删除/编辑/新建操作
    // 保存row
    let rowData: any
    function centerDialogVisibleChangeMirror(value: any) {
      centerDialogVisibleChange(value)
    }
    async function centerDialogVisibleChange(queryInfo: any, row?: any) {
      if (row) {
        // 保存row
        centerDialogVisible.value = true
        if (queryInfo.demand) {
          dialogType.value = queryInfo.demand
        } else {
          dialogType.value = queryInfo
        }
        rowData = row
        if (queryInfo == 'update' && rowData.row.menuList) {
          const roleMenus = roleMenusSelect(rowData.row.menuList)
          //因为是插槽所以要点击显示出来才能显示，刚刚点击的时候tree树还没显示出来就执行这部分代码了，所以要写在netTick里面在下次dom更新执行等他显示了才会拿得到元素
          nextTick(() => {
            elTreeRef.value?.setCheckedKeys(roleMenus, false)
          })
        }
      } else {
        if (queryInfo?.demand == 'delete') {
          //整理好delete需要的参数
          dialogType.value = 'delete'
          const queryInfo = {
            id: rowData.row.id,
            pageName: props.netWorkConfig.pageName
          }
          await store.dispatch('listModule/deleteRequest', queryInfo)
        } else if (queryInfo?.demand == 'create') {
          //新建的操作
          dialogType.value = 'create'
          queryInfo.name = props.netWorkConfig.pageName
          queryInfo.info = { ...queryInfo.info, ...otherMenus.value }
          await store.dispatch('listModule/createRequest', queryInfo)
        } else if (queryInfo?.demand == 'update') {
          dialogType.value = 'update'
          // 编辑的操作
          //把新建的那几个item去掉
          let infoAll: any = {}
          props.dialogLFrom?.fromItem.forEach((item: any) => {
            if (item.updateShow != true) {
              infoAll[`${item.field}`] = queryInfo.info[`${item.field}`]
            }
          })
          queryInfo.info = infoAll

          queryInfo.name = props.netWorkConfig.pageName
          queryInfo.id = rowData.row.id
          //请求vuex
          queryInfo.info = { ...queryInfo.info, ...otherMenus.value }

          await store.dispatch('listModule/updateRequest', queryInfo)
        }
      }
      netWorkTable(copyValue, tabelConfig)
    }
    //6.角色模块的选择的权限
    let otherMenus = ref()
    function checkTree(data1: any, data2: any) {
      const { checkedKeys, halfCheckedKeys } = data2
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherMenus.value = { menuList }
    }

    return {
      propsList,
      purify,
      netWorkTable,
      usersCount,
      paginationChangeNetwork,
      otherSlot,
      isCreate,
      isUpdate,
      isDelete,
      centerDialogVisible,
      centerDialogVisibleChange,
      centerDialogVisibleChangeMirror,
      dialogType,
      checkTree,
      elTreeRef
    }
  }
})
</script>

<style scoped>
.userTabel {
  margin-top: 30px;
}
</style>
