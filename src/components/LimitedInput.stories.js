import LimitedInput from './LimitedInput'

import { action } from '@storybook/addon-actions'
import { withDesign } from 'storybook-addon-designs'
import { linkTo } from '@storybook/addon-links'

export default {
  title: 'Form/LimitedInput',
  decorators: [
    // () => '<div class="m-4 border-2 border-red-200"><story/></div>',
    withDesign,
  ],
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
    },
    // docs: { 
    //   page: LimitedInputDocs,
    // },
    // actions: { argTypesRegex: '^on.*' }
  },
  component: LimitedInput, // to enable autodetect control
}

// To use control
// https://storybook.js.org/docs/vue/essentials/controls
// https://storybook.js.org/docs/vue/writing-stories/args
export const Template = (args, { argTypes }) => ({
  components: { LimitedInput },
  props: Object.keys(argTypes),
  // Storybook provides all the args in a $props variable.
  // Each arg is also available as their own name.
  template: '<LimitedInput v-bind="$props" v-on="$props" />',
});

export const StoryForAction = () => ({
  render() {
    return <LimitedInput onInput={action('input')}/>
  }
})

export const StoryForLinks = () => ({
  render() {
    // linkTo('kind', 'title of the story in sidebar')
    return <button onClick={linkTo('Form/LimitedInput', 'Story For Action')}>Link to</button>
  }
})
export const Simple = Template.bind({});
Simple.args = {
  disabled: true,
  value: 'Testing Value',
};
Simple.story = {
  // 1. custom name
  name: 'Simple Story (with "special-char" wow)',
  decorators: [
    () => '<div class="m-4 border-2 border-green-200"><story/></div>'
  ]
}

export const simpleWithTemplate = () => ({
  components: { LimitedInput },
  template: '<LimitedInput />'
})

export const withAValue = () => ({
  render() {
    return <LimitedInput value="value" />
  }
})

export const ValueTooLong = Template.bind({});
ValueTooLong.args = {
  ...Simple.args,
  value: 'Primary with a really long name',
}

export const Disabled = Template.bind({});
Disabled.args = {
  ...Simple.args,
  disabled: true,
}
