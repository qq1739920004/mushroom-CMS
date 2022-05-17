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
//表格是否有菜单展开功能的childrenProps属性的类型
export interface childrenPropsType {
  rowKey: string
  treeProp: object
}
//表格类型
export interface LtabelConfige {
  title?: string
  propList: propsListConfig[]
  showIndexColumn?: boolean
  showSelectColumn?: boolean
  showOverflowTooltip?: boolean
  childrenProps?: childrenPropsType
}
