import { Button } from '..';

export default {
  component: Button,
  title: 'Button',
  parameters: {
    layout: 'centered',
  },
};

export const button = () => () => <Button>Button</Button>;

export const button_with_href = () => () =>
  <Button href="https://backlight.dev">Link</Button>;
