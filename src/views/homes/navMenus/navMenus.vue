<template>
  <div class="navMebus">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#00152b"
      text-color="white"
      active-text-color="#015EBF"
      :collapse="isCollapse"
    >
      <template v-for="(item, index) in menus" :key="item.id">
        <el-sub-menu :index="indexType(index)">
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
            <template v-for="(item2, index2) in item.children" :key="item2.id">
              <component
                v-if="item2.icon"
                :is="iconFilter(item2.icon)"
              ></component>
              <el-menu-item
                :index="indexType(index) + '-' + indexType(index2)"
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
import { defineComponent, ref } from 'vue'
import { User, Iphone } from '@element-plus/icons-vue'

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
    const indexType = (index: number) => {
      return index.toString()
    }
    const iconFilter = (target: string) => {
      return target.replace('el-icon-', '')
    }

    return {
      indexType,
      iconFilter
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
