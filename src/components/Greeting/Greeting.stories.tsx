import { Meta, Story } from '@storybook/react'

import { Component as Greeting, Props } from './Greeting'

export default {
  title: 'components/Greeting',
  component: Greeting,
  argTypes: {
    target: { control: 'text' },
  },
} as Meta<Props>

const Template: Story<Props> = (args) => <Greeting {...args} />

export const World = Template.bind({})
World.args = {
  target: 'World',
}

export const Next = Template.bind({})
Next.args = {
  target: 'Next.js',
}
