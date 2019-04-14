/* eslint-disable indent */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */
import './index.scss'
import CurdForm from '../curd-form'
import CurdTable from '../curd-table'

export default {
  name: 'curd-template',
  data() {
    return {
    }
  },
  props: {
    options: {
      type: Object,
      default: () => { }
    }
  },
  methods: {
  },
  render() {
    return (
      <div class="page-content">
        <a-card>
          {
            this.$scopedSlots.test({
              data: 'hello'
            })
          }
          <CurdForm />
          <CurdTable />
        </a-card>
      </div >
    )
  }
}
