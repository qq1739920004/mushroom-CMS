<template>
  <div class="user">
    <from-l v-bind="LFrom"></from-l>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import fromL from '@/components-ui/mainInput/index.vue'
import type { LFromItem, LFrom } from '@/components-ui/mainInput/type'

export default defineComponent({
  components: {
    fromL
  },
  name: 'user',
  setup() {
    const LFrom: LFrom = {
      fromItem: [
        {
          type: 'input',
          id: 1,
          label: '用户id',
          rules: [],
          placeholder: '请输入用户id'
        },
        {
          type: 'input',
          id: 2,
          label: '用户名',
          rules: [],
          placeholder: '请输入用户名'
        },
        {
          type: 'passWord',
          id: 3,
          label: '用户密码',
          rules: [],
          placeholder: '请输入用户密码'
        },
        {
          type: 'select',
          id: 4,
          label: '喜欢的运动',
          options: [
            { title: '乒乓球', value: 'tableTennis' },
            { title: '足球', value: 'footBall' }
          ],
          placeholder: '请选择喜欢的运动'
        },
        {
          type: 'datepicker',
          id: 5,
          label: '创建时间',
          otherOptions: {
            startPlaceholder: '开始时间',
            endPlaceholder: '结束时间',
            type: 'daterange'
          }
        }
      ],
      labelWidth: '120px',
      colLayout: {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 8,
        xl: 6
      },
      itemLayout: {
        padding: '8px 20px'
      }
    }
    return {
      LFrom
    }
  }
})
</script>

<style scoped></style>
