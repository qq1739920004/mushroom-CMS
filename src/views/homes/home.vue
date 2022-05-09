<template>
  <div class="home">
    <el-container>
      <el-aside :width="!isCollapse ? '240px' : '60px'" class="nav-menus">
        <div class="title">
          <img class="logo" src="~@/assets/img/mushroom.svg" alt="" />
          <span class="logo-title" v-show="!isCollapse">蘑菇街后台管理</span>
        </div>
        <nav-menus :menus="menus" :isCollapse="isCollapse"></nav-menus>
      </el-aside>
      <el-container>
        <el-header>
          <headerBread @changeMenus="changeMenus"></headerBread>
        </el-header>
        <el-main class="main"></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { reactive, ref, defineComponent, computed } from 'vue'
import type { Ref } from 'vue'
import { useStoreLogin } from '@/store/index'
import navMenus from './navMenus/navMenus.vue'
import headerBread from './headers/headerBread.vue'

export default defineComponent({
  name: 'longiN',
  setup() {
    let isCollapse = ref(false)
    const store = useStoreLogin()
    const menus = computed(() => store.state.loginModule.userMenus)
    const changeMenus = (Collapse: boolean) => {
      isCollapse.value = Collapse
    }
    return {
      menus,
      isCollapse,
      changeMenus
    }
  },
  components: {
    navMenus,
    headerBread
  }
})
</script>

<style scoped lang="less">
@navColor: #00152b;

.nav-menus {
  background-color: @navColor;
  padding-top: 15px;
  transition: 0.5s;
}
.el-container {
  width: 100vw;
  height: 100vh;
}
.logo {
  vertical-align: sub;
}
.logo-title {
  font-size: 21px;
  vertical-align: 4px;
  padding-left: 5px;
  color: white;
  white-space: nowrap;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.main {
  background-color: antiquewhite;
}
</style>
