import type { LFromConfig } from '@/components-ui/mainInput/types/type'

//1.输入框配置

const dialogLFrom: LFromConfig = {
  fromItem: [
    {
      type: 'input',
      field: 'name',
      id: 1,
      label: '菜单名称',
      rules: [],
      placeholder: '请输入菜单名称'
    },
    {
      type: 'input',
      id: 2,
      field: 'type',
      label: '类型选择',
      rules: [],
      placeholder: '目前只有1'
    },
    {
      type: 'input',
      id: 3,
      field: 'url',
      label: '输入url',
      rules: [],
      placeholder: '请输入url'
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
