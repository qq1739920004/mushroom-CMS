import type { LtabelConfige, nwConfig } from '@/components-ui/LTable/types/type'

//表格配置

const LTabelConfig: LtabelConfige = {
  title: '角色列表',
  propList: [
    { prop: 'name', label: '角色名', minWidth: '100' },
    { prop: 'intro', label: '权限介绍', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '200',
      slotName: 'createAt',
      sortable: true
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '200',
      slotName: 'updateAt',
      sortable: true
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
const netWorkConfig: nwConfig = {
  pageName: 'role',
  queryInfo: {
    offset: 0,
    size: 10
  }
}
export { LTabelConfig, netWorkConfig }
