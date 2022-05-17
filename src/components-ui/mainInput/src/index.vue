<template>
  <div class="mainInput-ui">
    <template v-if="h">
      <h1>{{ h }}</h1>
    </template>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in fromItem" :key="item.id">
          <el-col v-bind="colLayout" :style="itemLayout">
            <el-form-item :label="item.label + ':'">
              <template v-if="item.type == 'input' || item.type == 'passWord'">
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.passWord"
                  v-model="fromData[`${item.field}`]"
                ></el-input>
              </template>

              <template v-if="item.type == 'select'">
                <el-select
                  v-model="fromData[`${item.field}`]"
                  placeholder="Select"
                  style="width: 100%"
                >
                  <el-option
                    v-for="item2 in item.options"
                    :key="item2.value"
                    :label="item2.title"
                    :value="item2.value"
                  />
                </el-select>
              </template>
              <template v-else-if="item.type == 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="fromData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
      <template v-if="but">
        <el-form-item>
          <el-button v-for="item in but" v-bind="item" :key="item.but">{{
            item.but
          }}</el-button>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, watchEffect } from 'vue'
import type { PropType } from 'vue'

import type { LFromItem, Lbut } from '@/components-ui/mainInput/types/type'

export default defineComponent({
  emits: ['update:modelValue', 'serachNetwork'],

  props: {
    fromItem: {
      type: Array as PropType<LFromItem[]>
    },
    labelWidth: {
      type: String,
      default: '120px'
    },
    colLayout: {
      type: Object,
      default: () => {
        return {
          span: 8
        }
      }
    },
    itemLayout: {
      type: Object,
      default: () => {
        return {
          padding: '8px 20px'
        }
      }
    },
    modelValue: {
      type: Object,
      required: true
    },
    but: {
      type: Array as PropType<Lbut[]>,
      default: () => []
    },
    h: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    let fromData = ref({ ...props.modelValue })
    watch(fromData, (newValue) => emit('update:modelValue', newValue), {
      deep: true
    })
    //获取重置按钮的dom元素
    const resetInput = ref()
    watchEffect(
      () => {
        //点击重置按钮后重置所有input
        resetInput.value?.ref?.addEventListener('click', () => {
          for (let item in fromData.value) {
            fromData.value[item] = ''
          }
        })
      },
      {
        flush: 'post' //post意思是等到dom挂载完再执行
      }
    )

    //获取搜索按钮的dom元素
    const requestSearch = ref()
    watchEffect(
      () => {
        requestSearch.value?.ref?.addEventListener('click', () => {
          emit('serachNetwork', fromData.value)
        })
      },
      {
        flush: 'post'
      }
    )
    return {
      fromData,
      resetInput,
      requestSearch
    }
  }
})
</script>

<style scoped>
.mainInput-ui {
  background-color: white;
  border-radius: 5px;
  padding: 22px 15px 0px 15px;
}
h1 {
  font-size: 30px;
  margin: 10px 0 20px 0;
}
::v-deep .el-form-item__content {
  display: flex;
  justify-content: flex-end;
  padding: 0 30px 10px 0;
}
::v-deep .el-form-item {
  margin-bottom: 0;
}
</style>
