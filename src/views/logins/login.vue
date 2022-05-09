<template>
  <div class="login">
    <div class="loginHome">
      <h1>后台管理系统</h1>
      <tableData class="tableData" />
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue'

import tableData from './table-ui/table-data.vue'
export default defineComponent({
  name: 'logiN',
  setup() {
    const test = ref(20)
    return {
      test
    }
  },
  components: {
    tableData
  }
})
</script>

<style scoped>
.loginHome {
  width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  bottom: 10%;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: url('@/assets/img/login-bg.svg');
  background-size: cover;
}
.tableData {
  margin-bottom: 10px;
}
</style>
