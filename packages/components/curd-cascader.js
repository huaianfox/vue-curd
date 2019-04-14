/* eslint-disable no-multi-spaces */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-trailing-spaces */

export default {
  name: 'c-cascader',
  render(h, context) {
    const { decorator = [], on = {}, style = {}, ...prop } = context.data
    const props = Object.assign({ allowClear: true, expandTrigger: 'hover' }, prop)
    return (
      <a-cascader v-decorator={decorator} {...{ props, on }} style={style} />
    )
  }
}
