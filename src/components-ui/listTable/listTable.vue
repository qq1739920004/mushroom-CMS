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
          <el-button v-if="isCreate" type="primary" size="default"
            >新建用户</el-button
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
      <template #handler>
        <el-button v-if="isUpdate" type="text" size="default" icon="edit">
          编辑
        </el-button>
        <el-button v-if="isDelete" type="text" size="default" icon="delete">
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
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import LTable from '@/components-ui/LTable/index'
import { useStore } from 'vuex'

import { isRole } from '@/utils/isRole'

import { purify } from '@/utils/filterDate' //把utc格式的时间数据变成正常格式

export default defineComponent({
  components: {
    LTable
  },
  props: {
    netWorkConfig: {
      type: Object,
      required: true
    },
    LTabelConfig: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    //0.获取操作的权限
    const isCreate = isRole(props.netWorkConfig.pageName, 'create')
    const isUpdate = isRole(props.netWorkConfig.pageName, 'update')
    const isDelete = isRole(props.netWorkConfig.pageName, 'delete')
    const isQuery = isRole(props.netWorkConfig.pageName, 'query')
    // console.log(isCreate, isUpdate, isDelete, isQuery)
    //1.请求用户表格数据
    const store = useStore()
    let propsList: any
    let copyValue: any //用于存储input搜索的内容，改变分页器的时候需要用到
    function netWorkTable(value?: any, queryInfo?: any) {
      if (!isQuery) return
      copyValue = value
      //把参数筛取传过去，因为搜索的时候有一些参数不能传
      const netWorkConfig = { pageName: '', queryInfo: '' }
      let purifyValue
      if (copyValue) {
        const { id, name, password } = copyValue
        purifyValue = { id, name, password }
      }
      netWorkConfig.pageName = props.netWorkConfig.pageName
      if (!queryInfo) {
        netWorkConfig.queryInfo = {
          ...props.netWorkConfig.queryInfo,
          ...purifyValue
        }
      } else {
        netWorkConfig.queryInfo = {
          ...queryInfo,
          ...purifyValue
        }
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

    return {
      propsList,
      purify,
      netWorkTable,
      usersCount,
      paginationChangeNetwork,
      otherSlot,
      isCreate,
      isUpdate,
      isDelete
    }
  }
})
</script>

<style scoped>
.userTabel {
  margin-top: 30px;
}
</style>
