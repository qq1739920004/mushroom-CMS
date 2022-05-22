<template>
  <div class="avatar">
    <el-dropdown class="userName">
      <span class="el-dropdown-link">
        {{ name }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            ><a href="#/login" class="exitLogin" @click="deleteToken()"
              >退出登录</a
            ></el-dropdown-item
          >
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-avatar class="userAvatar" :size="30" :src="circleUrl" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import storage from '@/utils/utilsLocalstorage'

export default defineComponent({
  setup() {
    const circleUrl =
      'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    const { name } = storage.getItem('userInfo')
    function deleteToken() {
      storage.removeItem('token')
    }
    return {
      circleUrl,
      name,
      deleteToken
    }
  }
})
</script>

<style scoped>
.avatar {
  margin-right: 50px;
}
.userName {
  line-height: 60px;
}
.userAvatar {
  margin-left: 15px;
  position: relative;
  top: 50%;
  transform: translateY(50%);
}
.el-icon--right {
  vertical-align: middle;
}
.exitLogin {
  text-decoration: none;
  color: rgb(58, 113, 190);
  border-bottom: 1px solid rgba(58, 113, 190, 0.193);
  padding-bottom: 1px;
}
</style>
