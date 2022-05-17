<template>
  <div class="navMebus">
    <el-menu
      :default-active="openItem + ''"
      class="el-menu-vertical-demo"
      background-color="#00152b"
      text-color="white"
      active-text-color="#015EBF"
      :collapse="isCollapse"
    >
      <template v-for="item in menus" :key="item.id">
        <el-sub-menu :index="item.id + ''">
          <template #title>
            <el-icon>
              <component
                v-if="item.icon"
                :is="iconFilter(item.icon)"
              ></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-if="item.children">
            <template v-for="item2 in item.children" :key="item2.id">
              <component
                v-if="item2.icon"
                :is="iconFilter(item2.icon)"
              ></component>
              <el-menu-item
                @click="routerJump(item2.url)"
                :index="item2.id + ''"
                >{{ item2.name }}</el-menu-item
              >
            </template>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { MenusId } from '@/utils/mapMenusUrl'

export default defineComponent({
  props: {
    menus: {
      type: Array
    },
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const router = useRouter()
    const route = useRoute()

    const iconFilter = (target: string) => {
      return target.replace('el-icon-', '')
    }
    //路由跳转
    const routerJump = (url: string) => {
      router.push(url)
    }
    //展开的菜单item
    const openItem = computed(() => {
      return MenusId(route.path, props.menus).id
    })
    return {
      iconFilter,
      routerJump,
      openItem
    }
  }
})
</script>

<style scoped lang="less">
.navMebus {
  padding-top: 30px;
  user-select: none;
  position: relative;
  left: 1px;

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd;
  }
  .el-menu {
    border-right: none;
  }
  .el-menu-item:hover {
    color: #fff !important;
    background-color: #0a61bd5c;
  }
  .el-menu-item.is-active:hover {
    color: #fff !important;
    background-color: #0a60bd;
  }
}
::v-deep .el-sub-menu__title {
  background-color: #adc5df2f !important;
}
</style>
