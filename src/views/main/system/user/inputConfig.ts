import type { LFromConfig } from '@/components-ui/mainInput/types/type'

//输入框配置

const LFrom: LFromConfig = {
  fromItem: [
    {
      type: 'input',
      id: 1,
      field: 'id',
      label: '用户id',
      rules: [],
      placeholder: '请输入用户id'
    },
    {
      type: 'input',
      field: 'name',
      id: 2,
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      type: 'passWord',
      field: 'password',
      id: 3,
      label: '用户密码',
      rules: [],
      placeholder: '请输入用户密码'
    },
    {
      type: 'select',
      field: 'sport',
      id: 4,
      label: '喜欢的运动',
      options: [
        { title: '乒乓球', value: 'tableTennis' },
        { title: '足球', value: 'footBall' }
      ],
      placeholder: '请选择喜欢的运动'
    },
    {
      type: 'datepicker',
      field: 'createTime',
      id: 5,
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '120px',
  colLayout: {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 8,
    xl: 6
  },
  itemLayout: {
    padding: '8px 20px'
  },
  but: [
    {
      but: '重置',
      type: 'primary',
      size: 'default',
      ref: 'resetInput'
    },
    {
      but: '搜索',
      type: 'primary',
      size: 'default',
      ref: 'requestSearch'
    }
  ],
  h: '高级检索'
}
const fromDatas: any = {
  // inputValue: '',
  // passWordValue: '',
  // selectValue: '',
  // dateValue: '',
  // idValue: ''
}

LFrom.fromItem.forEach((item) => {
  fromDatas[`${item.field}`] = ''
})

export { LFrom, fromDatas }
