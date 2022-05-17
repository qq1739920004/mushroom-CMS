import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc) //扩展utc这个插件
function purify(utcString: string, format = 'YYYY-MM-DD HH:mm:ss') {
  const date = dayjs.utc(utcString).format(format)
  return date
}
export { purify }
