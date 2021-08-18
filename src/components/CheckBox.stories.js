import { action } from '@storybook/addon-actions'

import CheckBox from './CheckBox'

export default {
  title: 'Form/Checkbox'
}

export const SimpeCheckbox = () => ({
  render() {
    return (
      <CheckBox text="Checkbox" name="dummy" onChange={action('change')}/>
    )
  }
})