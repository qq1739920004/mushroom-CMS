<template>
  <div class="account">
    <el-form :model="userData" :rules="rules" label-width="100px" ref="formRef">
      <el-form-item label="账号:" prop="name">
        <label for="userName">
          <el-input id="userName" v-model="userData.name" clearable />
        </label>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <label for="password">
          <el-input id="password" v-model="userData.password" show-password />
        </label>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

import type { ElForm } from 'element-plus'

import { rules } from './config'

import storage from '@/utils/utilsLocalstorage'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const store = useStore()

    let userData = reactive({
      name: storage.getItem('userAccount')?.name ?? '',
      password: storage.getItem('userAccount')?.password ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    async function fromData(checked: boolean) {
      formRef.value?.validate(async (valid) => {
        //保持记住密码选项的选择
        storage.setItem('checked', checked)
        if (valid) {
          if (checked) {
            storage.setItem('userAccount', userData)
          }
          // 2.开始进行登录验证
          await store.dispatch('loginModule/loginRequest', { ...userData })
          //请求角色列表，部门列表，角色管理页面的编辑要用
          store.dispatch('roleAndDepartment')

          router.push('/main')
        }
      })
    }
    return {
      userData,
      rules,
      fromData,
      formRef
    }
  }
})
</script>

<style scoped>
::v-deep .el-input__wrapper {
  width: 200px;
}
::v-deep.el-form-item {
  margin-top: 20px;
}
::v-deep .el-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 50%;
  transform: translateX(-55%);
}
::v-deep .el-form-item__label {
  text-align: right;
}
</style>
