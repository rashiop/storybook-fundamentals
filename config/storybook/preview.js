import '../../src/assets/tailwind.css'

import { addParameters, addDecorator } from '@storybook/vue'
import { withA11y } from '@storybook/addon-a11y'

addDecorator(withA11y)

addDecorator(() => '<div class="m-2 border-2 border-blue-200"><story/></div>')

addParameters({
  options: {
    storySort: (array1, array2) => {
      // by folder: kind
      // by name: name    
      const [, detail1] = array1
      const [, detail2] = array2
      const [, group1] = detail1.kind.split('/')
      const [, group2] = detail2.kind.split('/')
      if (group1 > group2) return 1
      else if (group1 < group2) return -1
      return detail1.name > detail2.name ? 1 : -1
    }
  },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
})