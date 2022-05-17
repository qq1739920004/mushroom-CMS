import type { LFromConfig } from '@/components-ui/mainInput/types/type'

//输入框配置

const LFrom: LFromConfig = {
  fromItem: [
    {
      type: 'input',
      id: 1,
      field: 'name',
      label: '角色名称',
      rules: [],
      placeholder: '请输入角色名称'
    },
    {
      type: 'input',
      field: 'intro',
      id: 2,
      label: '权限介绍',
      rules: [],
      placeholder: '请输入权限介绍'
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
      size: 'default'
    },
    {
      but: '提交',
      type: 'primary',
      size: 'default'
    }
  ],
  h: '高级检索'
}
const fromDatas = {
  inputValue: '',
  dateValue: '',
  idValue: ''
}

export { LFrom, fromDatas }
