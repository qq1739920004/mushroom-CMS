<template>
  <div class="LTable">
    <div class="header">
      <slot name="header">
        <h2 class="title">{{ title }}</h2>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="propsList"
      style="width: 100%"
      :border="true"
      v-bind="childrenProps"
    >
      <el-table-column
        align="center"
        v-if="showSelectColumn"
        type="selection"
        width="60"
        class="select"
      >
      </el-table-column>

      <el-table-column
        align="center"
        v-if="showIndexColumn"
        type="index"
        width="80"
        label="序号"
      >
      </el-table-column>
      <template v-for="item in propList" :key="item.prop">
        <el-table-column
          v-bind="item"
          align="center"
          :showOverflowTooltip="showOverflowTooltip"
          class="column"
        >
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          v-model:current-page="currentPages"
          :page-sizes="[5, 10, 20, 50]"
          v-model:page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="usersCount"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, watch } from 'vue'
import type { PropType } from 'vue'
import { propsListType } from '@/components-ui/LTable/types/type'
import { childrenPropsType } from '@/components-ui/LTable/types/type'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '用户列表'
    },
    propsList: {
      type: Array as PropType<propsListType[]>,
      required: true
    },
    propList: {
      type: Array,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    showOverflowTooltip: {
      type: Boolean,
      default: false
    },
    usersCount: {
      type: Number,
      default: 999
    },
    childrenProps: {
      type: Object as PropType<childrenPropsType>
    }
  },
  emits: ['queryInfoChange'],
  setup(props, { emit }) {
    //当前页数
    const currentPages = ref(1)
    //每页显示条目个数
    const pageSize = ref(5)
    //改变后网络请求需要的参数
    let queryInfo = reactive({ offset: 0, size: 5 })
    watch(queryInfo, (newValue) => emit('queryInfoChange', newValue), {
      deep: true
    })
    function handleSizeChange(val: any) {
      queryInfo.size = val
      queryInfo.offset = 0
    }
    function handleCurrentChange(val: any) {
      queryInfo.offset = (val - 1) * queryInfo.size
    }

    return {
      handleSizeChange,
      handleCurrentChange,
      pageSize,
      currentPages
    }
  }
})
</script>

<style scoped>
::v-deep .is-leaf .cell {
  font-size: 16px;
  padding: 3px 0;
}
::v-deep .cell {
  padding-left: 10px !important;
  padding-right: 10px !important;
}

.header {
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}
.handler {
  display: flex;
  align-items: center;
}
</style>
