import { Component as Greeting } from './Greeting'

export default {
  title: 'components/Greeting',
  component: Greeting,
  argTypes: {
    target: { control: 'text' },
  },
}

const Template = (args) => <Greeting {...args} />

export const World = Template.bind({})
World.args = {
  target: 'World',
}

export const Next = Template.bind({})
Next.args = {
  target: 'Next.js',
}
