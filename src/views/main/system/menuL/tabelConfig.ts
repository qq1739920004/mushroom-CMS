import type { LtabelConfige, nwConfig } from '@/components-ui/LTable/types/type'

//表格配置

const LTabelConfig: LtabelConfige = {
  title: '菜单列表',
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '100' },
    { prop: 'type', label: '类型', minWidth: '60' },
    { prop: 'url', label: '菜单url', minWidth: '100' },
    { prop: 'icon', label: '菜单icon', minWidth: '100', slotName: 'icon' },
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
  showSelectColumn: false,
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  }
}
const netWorkConfig: nwConfig = {
  pageName: 'menu',
  queryInfo: {
    offset: 0,
    size: 5
  }
}
export { LTabelConfig, netWorkConfig }
