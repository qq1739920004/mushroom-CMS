import * as echarts from 'echarts'

import chinaMapData from '../data/china.json'

echarts.registerMap('china', chinaMapData) //注册地图

export function useEcharts(el: HTMLElement) {
  const echartsInstance = echarts.init(el)
  // 配置注册
  const setOption = (option: echarts.EChartsOption) => {
    echartsInstance.setOption(option)
  }
  //浏览器改变大小时候刷新echarts大小
  const updateSize = () => {
    echartsInstance.resize()
  }
  window.addEventListener('resize', () => {
    echartsInstance.resize()
  })
  return {
    setOption,
    updateSize
  }
}
