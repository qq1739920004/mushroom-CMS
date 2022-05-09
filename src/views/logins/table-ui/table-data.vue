<template>
  <div>
    <el-tabs type="border-card" stretch>
      <el-tab-pane label="账号登录" icon="avatar">
        <template #label>
          <span class="custom-tabs-label"
            ><el-icon><user /></el-icon><span>账号登录</span></span
          >
        </template>
        <table-account ref="account"></table-account>
      </el-tab-pane>
      <el-tab-pane label="手机登录">
        <template #label>
          <span class="custom-tabs-label"
            ><el-icon><iphone /></el-icon><span>手机登录</span></span
          >
        </template>
        <table-phone></table-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="link">
      <el-checkbox v-model="checked">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" @click="loginNetwork()">立即登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import tableAccount from './table-account.vue'
import tablePhone from './table-phone.vue'

import storage from '@/utils/utilsLocalstorage'

export default defineComponent({
  name: 'tabsData',
  components: {
    tableAccount,
    tablePhone
  },

  setup() {
    let checked = ref(storage.getItem('checked') ?? false)
    const account = ref<InstanceType<typeof tableAccount>>()
    const loginNetwork = () => {
      account.value?.fromData(checked)
    }
    return {
      loginNetwork,
      account,
      checked
    }
  }
})
</script>

<style scoped>
.el-button {
  width: 100%;
}
.link {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
}
.custom-tabs-label span {
  vertical-align: middle;
}
.custom-tabs-label .el-icon {
  vertical-align: -2.5px;
  margin-right: 5px;
}
</style>
