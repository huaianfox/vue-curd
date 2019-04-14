/* eslint-disable no-multi-spaces */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-trailing-spaces */
const ARadio = {
  functional: true,
  name: 'curd-radio-item',
  render(h, context) {
    const props = context.data
    return <a-radio {...{ props }}>{props.label}</a-radio>
  }
}

const ARadioButton = {
  functional: true,
  name: 'curd-radio-button',
  render(h, context) {
    const props = context.data
    return <a-radio-button {...{ props }}>{props.label}</a-radio-button>
  }
}

export default {
  name: 'c-radio',
  render(h, context) {
    const { decorator = [], children = [], on, radio = 'button', ...props } = context.data
    const Radio = radio === 'button' ? ARadioButton : ARadio
    return (
      <a-radio-group v-decorator={decorator} {...{ props, on }}>
        {children.map(item => {
          return <Radio {...item} />
        })}
      </a-radio-group >
    )
  }
}
