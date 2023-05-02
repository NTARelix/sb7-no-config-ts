import { Meta, StoryFn } from '@storybook/react'
import { ComponentProps } from 'react'
import { MyComp } from './my-comp'

type Args = ComponentProps<typeof MyComp>

export default {
  title: 'Example Repo/MyComp',
  component: MyComp,
  args: {
    isError: false,
    children: 'Children content here'
  },
} as Meta<Args>

const Template: StoryFn<Args> = args => <MyComp {...args} />

export const Simple = Template.bind({})
