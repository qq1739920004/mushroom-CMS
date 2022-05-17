export function roleDicide(userMenus: any[]) {
  const userRoleArray: any[] = []
  function rolePurify(Menus: any[]) {
    for (const item of Menus) {
      if (item.type === 1 || item.type === 2) {
        rolePurify(item.children ?? [])
      } else {
        userRoleArray.push(item.permission)
      }
    }
  }
  rolePurify(userMenus)
  return userRoleArray
}
