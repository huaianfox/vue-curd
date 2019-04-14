/* eslint-disable indent */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */

import components from '../components'

export default {
  name: 'curd-form',
  data() {
    return {
      AntForm: this.$form.createForm(this)
    }
  },
  props: {
    options: {
      type: Object,
      default: () => { }
    }
  },
  methods: {
    handleSubmit(e) {
      this.$emit('reflect', 'this is from form $emit')
      e.preventDefault()
      this.AntForm.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          this.$emit('submit', values)
        }
      })
    },
    handleAction(action) {
      if (action === 'reset') {
        this.AntForm.resetFields()
      }
    }
  },
  render() {
    const { columns = [], span = 24, reflect, formItemLayout = { labelCol: {}, wrapperCol: {} }, itemSpan = 12, ...prop } = this.options || {}
    const { menuForm = [], ...slots } = this.$slots
    const props = Object.assign({}, prop)
    const form = (
      <a-form {...{ props, scopedSlots: { ...this.$scopedSlots } }} form={this.AntForm} onSubmit={this.handleSubmit.bind(this)}>
        <a-row span={span}>
          {
            columns.map(item => {
              // 获取组件
              const component = components[item.component]
              const { span, labelCol = {}, wrapperCol = {}, ...props } = item
              const ItemLabelCol = Object.assign(formItemLayout.labelCol || {}, labelCol)
              const ItemWrapperCol = Object.assign(formItemLayout.wrapperCol || {}, wrapperCol)
              typeof props.reflect === 'boolean' || (props.reflect = reflect)
              return (
                <a-col span={span || itemSpan} >
                  <a-form-item label={item.label} label-col={ItemLabelCol} wrapper-col={ItemWrapperCol}>
                    <component {...props} />
                    {/* <a-input /> */}
                  </a-form-item>
                </a-col>
              )
            })
          }
        </a-row>
        {/* {Object.keys(slots).map(name => slots[name])} */}
        {/* <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
          >确认提交
      </a-button>
        </a-form-item> */}
        {/* 自定义按钮插槽
        *
        *   <template slot="menuForm">
        *      <a-button type="danger">清空</a-button>
        *   </template>
        *
        */}
        {Object.keys(menuForm).map(name => menuForm[name])}

      </a-form>
    )
    return (
      <div class="form-wrapper">
        {form}
      </div>
    )
  }
}
