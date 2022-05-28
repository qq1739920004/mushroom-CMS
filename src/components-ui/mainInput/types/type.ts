type LFromType = 'input' | 'passWord' | 'select' | 'datepicker'
type LField =
  | 'name'
  | 'password'
  | 'sport'
  | 'createTime'
  | 'id'
  | 'intro'
  | 'realname'
  | 'cellphone'
  | 'departmentId'
  | 'roleId'
  | 'createAt'
  | 'type'
  | 'url'
  | 'leader'
  | 'parentId'

export interface LFromItem {
  type: LFromType //类型
  field: LField //input需要v-mode绑定到的属性名字
  id: number //id
  label: string //显示的标题
  rules?: any[] //校验规则
  options?: any[] //select的选项
  placeholder?: any //提示词
  otherOptions?: any //其他配置
  updateShow?: boolean //是否在编辑此行的时候显示
}
export interface Lbut {
  but: string
  type?: string
  size?: string
  ref?: string
}

export interface LFromConfig {
  fromItem: LFromItem[]
  labelWidth: string
  colLayout: any
  itemLayout: any
  h?: string
  but?: Lbut[]
  butLayout?: any
}
