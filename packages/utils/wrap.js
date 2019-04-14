/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
// 修正函数组件事件this指向
import bindThis from '../mixins/bindThis'

export default (options) => {
  const { render, props, mixins, ...option } = options
  return {
    ...option,
    props: {
      curd: {
        type: Object,
        default: () => { }
      },
      ...props
    },
    mixins: [
      bindThis,
      ...mixins
    ],
    render(h) {
      // let { on } = this.curd
      // const handlers = {}
      // Object.keys(this.curd.on).forEach(name => {
      //   this.curd.on[name] = this.curd.on[name].bind(this)
      // })
      // on = null
      // this.curd.on = handlers
      return render.call(this, h)
    }
  }
}
