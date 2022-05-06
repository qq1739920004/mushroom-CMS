<template>
  <div class="account">
    <el-form :model="userData" :rules="rules2" label-width="100px">
      <el-form-item label="手机号:" prop="phone">
        <label for="userPhone">
          <el-input id="userPhone" v-model="userData.name" />
        </label>
      </el-form-item>
      <el-form-item label="验证码:" prop="viryfi">
        <div class="inputFlex">
          <label for="verify">
            <el-input id="verify" v-model="userData.password" class="input2" />
          </label>

          <el-button type="primary" class="but2">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

import { rules2 } from './config'

export default defineComponent({
  setup() {
    let userData = reactive({
      name: '',
      password: ''
    })

    return {
      userData,
      rules2
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

.but2 {
  margin-left: 20px;
}
.inputFlex {
  display: flex;
  justify-content: center;
}
.input2 {
  width: 100px;
}
</style>
