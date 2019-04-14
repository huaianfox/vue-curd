/* eslint-disable space-before-function-paren */
/* eslint-disable no-trailing-spaces */
export default {
  name: 'c-input',
  render(h, context) {
    const { decorator = [], on = {}, ...props } = context.data
    return (
      <a-input {...{ props, on }} v-decorator={decorator} />
    )
  }
}
