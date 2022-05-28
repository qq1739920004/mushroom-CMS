import type { LtabelConfige, nwConfig } from '@/components-ui/LTable/types/type'

//表格配置

const LTabelConfig: LtabelConfige = {
  title: '部门列表',
  propList: [
    { prop: 'parentId', label: '部门id', minWidth: '60' },
    { prop: 'name', label: '部门名称', minWidth: '100' },
    { prop: 'leader', label: '领导者', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt',
      sortable: true
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt',
      sortable: true
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: false,
  showSelectColumn: false
}
const netWorkConfig: nwConfig = {
  pageName: 'department',
  queryInfo: {
    offset: 0,
    size: 5
  }
}
export { LTabelConfig, netWorkConfig }
