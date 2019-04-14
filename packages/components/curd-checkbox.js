/* eslint-disable no-multi-spaces */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-trailing-spaces */

export default {
  name: 'c-checkbox',
  render(h, context) {
    const { decorator = [], group = true, on = {}, ...props } = context.data
    return (group
      ? <a-radio-group v-decorator={decorator} {...{ props, on }}></a-radio-group >
      : <a-checkbox v-decorator={decorator}>{props.options[0]}</a-checkbox>
    )
  }
}
