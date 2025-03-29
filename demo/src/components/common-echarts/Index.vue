<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-02-17 17:10:57
 * @LastEditTime: 2025-03-29 17:58:20
 * @LastEditors: zouyaoji 370681295@qq.com
 * @FilePath: \vue-maplibre\demo\src\components\common-echarts\Index.vue
 * @Description:
-->
<template>
  <div ref="chartRef" class="common-echarts-container"></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import { shallowRef, onMounted, nextTick, onUnmounted, watch, toRaw } from 'vue'
const emits = defineEmits(['ready'])

defineOptions({
  name: 'CommonEcharts'
})

const props = defineProps({
  name: String,
  option: {
    type: Object,
    default: () => {
      return {}
    }
  }
})

defineExpose({
  getChart: () => echartsInstance
})

watch(
  () => props.option,
  () => {
    updateEcharts()
  },
  {
    deep: true
  }
)
const chartRef = shallowRef<HTMLElement>(null)
let echartsInstance: echarts.ECharts = undefined
let resizeObserver = undefined

// lifecycle
onMounted(() => {
  initEchart()
  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(chartRef.value)
})

onUnmounted(() => {
  resizeObserver && resizeObserver.disconnect()
  resizeObserver = undefined
  echartsInstance && echartsInstance.dispose()
})

//methods
const initEchart = () => {
  nextTick(() => {
    if (!echartsInstance) {
      echartsInstance = echarts.init(chartRef.value)
      emits('ready', echartsInstance)
    }
  })
}

const updateEcharts = () => {
  if (echartsInstance) {
    echartsInstance.resize()
    echartsInstance.clear()
    echartsInstance.setOption(props.option)
  }
}

const resize = () => {
  setTimeout(() => {
    if (resizeObserver) {
      echartsInstance && echartsInstance.resize()
    }
  })
}
</script>

<style lang="scss" scoped>
.common-echarts-container {
  width: 100%;
  height: 100%;
}
</style>
