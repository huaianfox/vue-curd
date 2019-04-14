/* eslint-disable space-before-function-paren */
/* eslint-disable no-trailing-spaces */
export default {
  name: 'c-switch',
  render(h, context) {
    const { decorator = [], on = {}, ...props } = context.data
    return (
      <a-switch {...{ props, on }} v-decorator={decorator} />
    )
  }
}
