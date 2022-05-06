<template>
  <div>
    {{ tests }}
    {{ $store.state.name }}
    <h2>我是登录页</h2>
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<script>
import { reactive, ref, toRefsm, defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'longiN',

  setup() {
    const tests = ref('200')
    return {
      tests
    }
  },
  computed: {}
})
</script>
