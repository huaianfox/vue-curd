/* eslint-disable space-before-function-paren */
/* eslint-disable no-trailing-spaces */
export default {
  name: 'c-slider',
  render(h, context) {
    const { decorator = [], width = '120', on = {}, ...props } = context.data
    return (
      <div style={`width: ${width}px`} >
        <a-slider {...{ props, on }} v-decorator={decorator} />
      </div >
    )
  }
}
