/* eslint-disable no-multi-spaces */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-trailing-spaces */

export default {
  name: 'c-select',
  render(h, context) {
    const { decorator = [], children = [], style = {}, icon, on, ...prop } = context.data
    const props = Object.assign({ allowClear: true }, prop)
    const styleObj = Object.assign({ width: '200px' }, style)
    return (
      <a-select v-decorator={decorator} {...{ props, on }} style={styleObj}>
        {icon ? <a-icon slot="suffixIcon" type={icon} /> : null}
        {children.map(item => <a-select-option value={item.value}>{item.label}</a-select-option>)}
      </a-select >
    )
  }
}
