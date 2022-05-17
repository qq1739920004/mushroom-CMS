import type { LtabelConfige, nwConfig } from '@/components-ui/LTable/types/type'

//表格配置

const LTabelConfig: LtabelConfige = {
  title: '用户列表',
  propList: [
    { prop: 'name', label: '用户名', minWidth: '100' },
    { prop: 'realname', label: '真实姓名', minWidth: '100' },
    { prop: 'cellphone', label: '手机号码', minWidth: '100' },
    { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
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
  showIndexColumn: true,
  showSelectColumn: true
}
const netWorkConfig: nwConfig = {
  pageName: 'users',
  queryInfo: {
    offset: 0,
    size: 5
  }
}
export { LTabelConfig, netWorkConfig }
