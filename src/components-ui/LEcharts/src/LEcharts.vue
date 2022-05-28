<template>
  <div class="LEcharts">
    <div ref="echartsRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, ref, onMounted, watchEffect } from 'vue'
import type { EChartsOption } from 'echarts'
import { useEcharts } from '../utils/useEcharts'
const props = withDefaults(
  defineProps<{
    option: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)
const echartsRef = ref<HTMLElement>()
onMounted(() => {
  const { setOption } = useEcharts(echartsRef.value!)
  watchEffect(() => {
    setOption(props.option)
  })
})
</script>

<style scoped></style>
