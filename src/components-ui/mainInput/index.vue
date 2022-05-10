<template>
  <div class="mainInput-ui">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in fromItem" :key="item.id">
          <el-col v-bind="colLayout" :style="itemLayout">
            <el-form-item :label="item.label + ':'">
              <template v-if="item.type == 'input' || item.type == 'passWord'">
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.passWord"
                ></el-input>
              </template>
              <template v-if="item.type == 'select'">
                <el-select
                  v-model="selectValue"
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
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { PropType } from 'vue'

import type { LFromItem } from '@/components-ui/mainInput/type'

export default defineComponent({
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
      default() {
        return {
          span: 8
        }
      }
    },
    itemLayout: {
      type: Object,
      default() {
        return {
          padding: '8px 20px'
        }
      }
    }
  },
  setup(props) {
    const selectValue = ref('无')
    return {
      selectValue
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
</style>
