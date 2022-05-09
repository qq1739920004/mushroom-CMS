<template>
  <div class="headerBread">
    <img
      @click="changeMenus()"
      class="menusGo"
      src="~@/assets/img/menusGo.svg"
      alt=""
    />

    <lbread class="bread"></lbread>
    <user-ava class="avatar"></user-ava>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

import userAva from './userAvatar/userAva.vue'
import lbread from './Lbread/Lbread.vue'

export default defineComponent({
  emits: ['changeMenus'],
  components: {
    userAva,
    lbread
  },
  setup(props, { emit }) {
    let isCollapse = ref(false)

    const changeMenus = () => {
      isCollapse.value = !isCollapse.value
      emit('changeMenus', isCollapse.value)
    }
    return {
      isCollapse,
      changeMenus
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
