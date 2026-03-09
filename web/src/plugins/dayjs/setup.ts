import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

export function setupDayjs() {
  dayjs.extend(relativeTime)
}
