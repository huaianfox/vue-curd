/* eslint-disable import/no-duplicates */
/* eslint-disable eol-last */
// import { Compoents } from './components'
// import CURDcOMPONENTS from './components'
import CurdForm from './curd-form'
import CurdTemplate from './curd-template'
import { Components } from './components'

const components = [
  ...Components,
  CurdTemplate,
  CurdForm
]

CurdForm.__static = 'hello world'

function install (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (window.Vue) {
  install(window.Vue, window.axios)
}
export default {
  install,
  CurdForm,
  CurdTemplate
}