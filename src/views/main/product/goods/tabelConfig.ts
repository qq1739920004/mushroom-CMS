import type { LtabelConfige, nwConfig } from '@/components-ui/LTable/types/type'

//表格配置

const LTabelConfig: LtabelConfige = {
  title: '商品列表',
  propList: [
    { prop: 'name', label: '商品名字', minWidth: '180' },
    { prop: 'oldPrice', label: '原价格', minWidth: '80', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价格', minWidth: '80' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '100', slotName: 'image' },
    { prop: 'status', label: '状态', minWidth: '100', slotName: 'status' },

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
  showIndexColumn: false,
  showSelectColumn: false,
  showOverflowTooltip: true
}
const netWorkConfig: nwConfig = {
  pageName: 'goods',
  queryInfo: {
    offset: 0,
    size: 5
  }
}
export { LTabelConfig, netWorkConfig }
