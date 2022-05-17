import filterDate from './filterDate'
import { App } from 'vue'

function configStart(app: App<Element>) {
  app.use(filterDate)
}

export { configStart }
