/* eslint-disable space-before-function-paren */
// 合并 context.data 和 context.data.attr
// jsx注入的属性直接放在context.data
// .vue文件注入的属性放在了context.data.attr 和 context.props
// 修正子组件事件this指向form组件
export default (options) => {
  const { render, ...props } = options
  return Object.assign({}, {
    functional: true,
    render(h, context) {
      const { attrs = {}, on = { change() { } }, reflect, ...args } = context.data
      const handler = {}
      Object.keys(on).forEach(name => {
        handler[name] = function (...arg) {
          on[name].apply(context.parent, arg)
          if (reflect || attrs.reflect) {
            context.parent.$emit('reflect', args.prop, ...arg)
          }
        }
      })
      // context.data.on = handler
      context.data = {
        ...args,
        on: handler,
        ...attrs
      }
      const { prop = '', rules = [] } = context.data
      let decorator = context.data['v-decorator'] || []
      prop && (decorator.push(prop))
      rules.length && (decorator.push({ rules }))
      decorator.length && (context.data.decorator = decorator)

      return render(h, context)
    }
  }, props)
}
