<template>
  <div class="headerBread">
    <img
      @click="changeMenus()"
      class="menusGo"
      src="~@/assets/img/menusGo.svg"
      alt=""
    />

    <lbread class="bread" :breadItem="breadItem"></lbread>
    <user-ava class="avatar"></user-ava>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'

import userAva from './userAvatar/userAva.vue'
import lbread from './Lbread'

import storage from '@/utils/utilsLocalstorage'
import { getBread } from '@/utils/mapMenusUrl'

export default defineComponent({
  emits: ['changeMenus'],
  components: {
    userAva,
    lbread
  },
  setup(props, { emit }) {
    let isCollapse = ref(false)
    let breadItem = computed(() => {
      const Menus = storage.getItem('userMenus') //获取用户菜单
      const path = useRoute().path //获取当前路由路径
      return getBread(path, Menus)
    })

    const changeMenus = () => {
      isCollapse.value = !isCollapse.value
      emit('changeMenus', isCollapse.value)
    }

    return {
      isCollapse,
      changeMenus,
      breadItem
    }
  }
})
</script>

<style lang="less" scoped>
.headerBread {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  .menusGo {
    position: absolute;
    left: 0;
    top: 15px;
    width: 30px;
    height: 30px;
    transform: rotate(180deg);
  }
}

.bread {
}
</style>
