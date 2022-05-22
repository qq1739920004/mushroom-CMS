interface dialogSelectConfig {
  id: any
  field: string
  type: string
  label: string
  placeholder: string
  options: any
}

type dialogSelect = dialogSelectConfig | undefined

import type { dialogTypes } from '@/components-ui/listTable/types/type'
interface queryInfoType {
  demand: dialogTypes
  info: any
  name?: string
  id?: any
}
export { dialogSelect, queryInfoType }
