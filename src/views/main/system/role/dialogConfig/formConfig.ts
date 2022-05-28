import type { LFromConfig } from '@/components-ui/mainInput/types/type'

//1.输入框配置

const dialogLFrom: LFromConfig = {
  fromItem: [
    {
      type: 'input',
      field: 'name',
      id: 1,
      label: '角色名',
      rules: [],
      placeholder: '请输入角色名'
    },
    {
      type: 'input',
      id: 2,
      field: 'intro',
      label: '角色介绍',
      rules: [],
      placeholder: '请输入角色介绍'
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
