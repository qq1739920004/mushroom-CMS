import type { LFromConfig } from '@/components-ui/mainInput/types/type'

//1.输入框配置

const dialogLFrom: LFromConfig = {
  fromItem: [
    {
      type: 'input',
      field: 'name',
      id: 1,
      label: '类别名称',
      rules: [],
      placeholder: '请输入类别名称'
    }
  ],
  labelWidth: '100px',
  colLayout: {
    span: 24
  },
  itemLayout: {
    padding: '8px 0px'
  }
}
const dialogFromDatas: any = {
  // inputValue: '',
  // passWordValue: '',
  // selectValue: '',
  // dateValue: '',
  // idValue: ''
}

dialogLFrom.fromItem.forEach((item) => {
  dialogFromDatas[`${item.field}`] = ''
})

export { dialogLFrom, dialogFromDatas }
