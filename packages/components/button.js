/* eslint-disable space-before-function-paren */
/* eslint-disable no-trailing-spaces */
export default {
  name: 'c-button',
  render(h, context) {
    const { title, htmlType = 'submit', ...prop } = context.data
    const click = () => {
      context.parent.handleAction(htmlType)
    }
    const on = htmlType === 'submit' ? null : { click }
    const props = {
      props: prop
    }
    on && (props.on = on)
    return (
      <a-button {...props} html-type={htmlType} >{title}</a-button>
    )
  }
}
