import type { LtabelConfige, nwConfig } from '@/components-ui/LTable/types/type'

//表格配置

const LTabelConfig: LtabelConfige = {
  title: '类别列表',
  propList: [
    { prop: 'name', label: '类别名称', minWidth: '120' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: false,
  showSelectColumn: false
}
const netWorkConfig: nwConfig = {
  pageName: 'category',
  queryInfo: {
    offset: 0,
    size: 5
  }
}
export { LTabelConfig, netWorkConfig }
