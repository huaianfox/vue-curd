/* eslint-disable no-sequences */
import decorator from '../utils/decorator'
// components
import CInput from './curd-input'
import CSelect from './curd-select'
import CRadio from './curd-radio'
import CRate from './curd-rate'
import CCascader from './curd-cascader'
import CCheckbox from './curd-checkbox'
import CSlider from './curd-slider'
import CSwitch from './curd-switch'
import CUpload from './curd-upload'
import CButton from './button'

export const Components = [
  CInput,
  CSelect,
  CRadio,
  CRate,
  CCascader,
  CCheckbox,
  CSlider,
  CSwitch,
  CUpload,
  CButton
].map(component => decorator(component))

// export Components

export default Components.reduce((components, item) => ((components[item.name] = item), components), {})
