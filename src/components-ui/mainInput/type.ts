type LFromType = 'input' | 'passWord' | 'select' | 'datepicker'

export interface LFromItem {
  type: LFromType //类型
  id: number //id
  label: string //显示的标题
  rules?: any[] //校验规则
  options?: any[] //select的选项
  placeholder?: any //提示词
  otherOptions?: any //其他配置
}

export interface LFrom {
  fromItem: LFromItem[]
  labelWidth: string
  colLayout: any
  itemLayout: any
}
