import type { LFromConfig } from '@/components-ui/mainInput/types/type'

//1.输入框配置

const dialogLFrom: LFromConfig = {
  fromItem: [
    {
      type: 'input',
      field: 'name',
      id: 1,
      label: '部门名称',
      rules: [],
      placeholder: '请输入部门名称'
    },
    {
      type: 'input',
      id: 2,
      field: 'leader',
      label: '部门领导',
      rules: [],
      placeholder: '请输入部门领导'
    },
    {
      type: 'input',
      id: 2,
      field: 'parentId',
      label: '部门Id',
      rules: [],
      placeholder: '请输入部门Id'
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
