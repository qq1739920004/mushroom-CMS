//表格数据类型
export interface propsListType {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  departmentId: number
  roleId: number
  createAt: Date
  updateAt: Date
}
//表格配置类型
export interface propsListConfig {
  prop?: string
  label: string
  minWidth: string
  slotName?: string
  sortable?: boolean
}
export interface nwConfig {
  pageName: string
  queryInfo: any
}
export interface LtabelConfige {
  title?: string
  propList: propsListConfig[]
  showIndexColumn?: boolean
  showSelectColumn?: boolean
  showOverflowTooltip?: boolean
}
