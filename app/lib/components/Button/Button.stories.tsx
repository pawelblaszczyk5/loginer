import type { ButtonProps } from '~/lib/components/Button';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '~/lib/components/Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...args }: ButtonProps) => (
  <Button {...args}>{children}</Button>
);

export const Test = Template.bind({});

Test.args = {
  children: 'Test',
};
