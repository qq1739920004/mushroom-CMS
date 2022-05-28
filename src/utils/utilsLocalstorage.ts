class utlisLocalstorage {
  setItem(key: string, value: any) {
    const _idata = window.localStorage.setItem(key, JSON.stringify(value))
    return _idata
  }
  getItem(key: string) {
    const _idata: any = window.localStorage.getItem(key)
    if (_idata) {
      return JSON.parse(_idata)
    }
  }
  removeItem(key: string) {
    window.localStorage.removeItem(key)
    return
  }
}

export default new utlisLocalstorage()
