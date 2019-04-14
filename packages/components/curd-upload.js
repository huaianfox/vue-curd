/* eslint-disable space-before-function-paren */
/* eslint-disable no-trailing-spaces */
export default {
  name: 'c-upload',
  render(h, context) {
    const { decorator = [], on = {}, icon = 'upload', title = '', ...props } = context.data
    return (
      <a-upload {...{ props, on }} v-decorator={decorator} >
        <a-button>
          <a-icon type={icon} /> {title}
        </a-button>
      </a-upload>
    )
  }
}
