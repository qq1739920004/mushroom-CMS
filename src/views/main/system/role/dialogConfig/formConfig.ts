import type { LFromConfig } from '@/components-ui/mainInput/types/type'

//1.输入框配置

//1.1获取角色，部门列表

const dialogLFrom: LFromConfig = {
  fromItem: [
    {
      type: 'input',
      field: 'name',
      id: 1,
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      type: 'input',
      id: 2,
      field: 'realname',
      label: '真实姓名',
      rules: [],
      placeholder: '请输入真实姓名'
    },
    {
      type: 'passWord',
      field: 'password',
      id: 3,
      label: '用户密码',
      rules: [],
      placeholder: '请输入用户密码',
      updateShow: true
    },
    {
      type: 'input',
      id: 4,
      field: 'cellphone',
      label: '电话号码',
      rules: [],
      placeholder: '请输入电话号码'
    },
    {
      id: 5,
      field: 'departmentId',
      type: 'select',
      label: '选择部门',
      placeholder: '请选择部门',
      options: [],
      updateShow: true
    },
    {
      id: 6,
      field: 'roleId',
      type: 'select',
      label: '选择角色',
      placeholder: '请选择角色',
      options: [],
      updateShow: true
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
