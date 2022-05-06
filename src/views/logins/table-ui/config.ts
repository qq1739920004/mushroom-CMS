// 账号登录规则
export const rules = {
  name: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    {
      pattern: /^\w{5,9}$/,
      message: '账号必须是5~9位数字字母',
      trigger: 'change'
    }
  ],
  passWord: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^\w{5,9}$/,
      message: '密码必须是5位以上15位一下数字字母',
      trigger: 'change'
    }
  ]
}

export const rules2 = {
  phone: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    {
      pattern: /^\w{5,9}$/,
      message: '账号必须是5~9位数字字母',
      trigger: 'blur'
    }
  ],
  viryfi: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^\w{5,9}$/,
      message: '密码必须是5位以上15位一下数字字母',
      trigger: 'blur'
    }
  ]
}
