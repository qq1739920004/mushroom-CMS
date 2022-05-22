import { ref } from 'vue'
import listTable from '@/components-ui/listTable/listTable.vue' //表格组件
//fromDatas参数：输入框配置文件
function getFromData(fromDatas: any) {
  //1.取到配置的表单里的input需要绑定的值名称做一份浅拷贝传给组件（你为了方便数据修改）
  const fromData = ref({ ...fromDatas })
  //2.搜索按钮点击后的事件
  const fromLRef = ref<InstanceType<typeof listTable>>()
  function serachNetwork(newFromData: any) {
    fromLRef.value?.netWorkTable(newFromData)
  }
  return [fromData, fromLRef, serachNetwork]
}
export { getFromData }
