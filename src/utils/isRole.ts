import { useStoreLogin } from '@/store'

export function isRole(pageName: string, handleName: string) {
  const store = useStoreLogin()
  const roleAll = store.state.loginModule.userRoleAll
  const verifyRole = roleAll.find(
    (item: any) => item === `system:${pageName}:${handleName}`
  )
  return !!verifyRole
}
