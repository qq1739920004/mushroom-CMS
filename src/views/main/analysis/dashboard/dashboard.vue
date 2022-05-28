<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <lcard title="分类商品的数量(饼图)">
          <pie-echart :pieData="pieEchartSetting"></pie-echart>
        </lcard>
      </el-col>
      <el-col :span="10">
        <lcard title="不同城市商品销量">
          <map-echart :mapData="mapEchartSetting"></map-echart>
        </lcard>
      </el-col>
      <el-col :span="7">
        <lcard title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="pieEchartSetting"></rose-echart>
        </lcard>
      </el-col>
      <el-col :span="12" class="col2">
        <lcard title="分类商品的销量(折线图)">
          <line-echart v-bind="lineEchartSetting"></line-echart>
        </lcard>
      </el-col>
      <el-col :span="12" class="col2">
        <lcard title="分类商品的收藏(柱状图)">
          <bar-echart v-bind="barEchartSetting"></bar-echart>
        </lcard>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { useStoreLogin } from '@/store/index'
import { Lcard } from '@/components-ui/Lcard/index'
import { computed, defineComponent } from 'vue'
import {
  barEchart,
  lineEchart,
  mapEchart,
  pieEchart,
  roseEchart
} from '@/components-ui/LEcharts/echartsAll/index'
export default defineComponent({
  components: {
    Lcard,
    pieEchart,
    roseEchart,
    lineEchart,
    barEchart,
    mapEchart
  },
  setup() {
    const store = useStoreLogin()
    store.dispatch('dashboardModule/categoryGoodsCountRequest') //饼图，玫瑰图数据
    store.dispatch('dashboardModule/categoryGoodsSaleRequest') //折线图数据
    store.dispatch('dashboardModule/categoryGoodsFavorRequest') //柱状图数据
    store.dispatch('dashboardModule/addressGoodsSaleRequest') //地图数据

    //饼图，玫瑰图
    const pieEchartSetting = computed(() => {
      return store.state.dashboardModule.categoryGoodsCount.map((item) => {
        return {
          name: item.name,
          value: item.goodsCount
        }
      })
    })
    //折线图
    const lineEchartSetting = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const lineData = store.state.dashboardModule.categoryGoodsSale
      lineData.forEach((element) => {
        xLabels.push(element.name)
        values.push(element.goodsCount)
      })
      return { xLabels, values }
    })
    //柱状图
    const barEchartSetting = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const lineData = store.state.dashboardModule.categoryGoodsFavor
      lineData.forEach((element) => {
        xLabels.push(element.name)
        values.push(element.goodsFavor)
      })
      return { xLabels, values }
    })
    //地图
    const mapEchartSetting = computed(() => {
      return store.state.dashboardModule.addressGoodsSale.map((item) => {
        return {
          name: item.address,
          value: item.count
        }
      })
    })

    return {
      pieEchartSetting,
      lineEchartSetting,
      barEchartSetting,
      mapEchartSetting
    }
  }
})
</script>

<style scoped>
.col2 {
  margin-top: 15px;
}
</style>
