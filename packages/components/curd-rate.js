/* eslint-disable space-before-function-paren */
/* eslint-disable no-trailing-spaces */
export default {
  name: 'c-rate',
  render(h, context) {
    const { decorator = [], icon = '', ...props } = context.data
    return (
      <a-rate {...{ props }} v-decorator={decorator} >
        {icon ? <a-icon slot='character' type={icon} /> : null}
      </a-rate>
    )
  }
}
