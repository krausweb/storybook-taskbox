import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ComponentProps } from 'react';

import Button from './ButtonWithChildren';

type StoryProps = ComponentProps<typeof Button> & {
    buttonText: string;
};

const ButtonStory: Meta<StoryProps> = {
    component: Button,
    title: 'ButtonWithChildren', // or you can left it empty and use component name as title
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'tertiary'],
            control: {
                type: 'select'
            }
        },
        // size: {} see settings inside Button.tsx via interface extends from React.ButtonHTMLAttributes<HTMLButtonElement>
    },
    args: {
        onClick: fn()
    }
};

export default ButtonStory;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
        buttonText: "Primary Button",
    },
    render: ({ buttonText, ...args }) => {
        return <Button {...args}>{buttonText}</Button>
    }
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        size: 'sm',
        buttonText: "Secondary Button",
    },
    render: ({ buttonText, ...args }) => {
        return <Button {...args}>{buttonText}</Button>
    }
}

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        size: 'sm',
        buttonText: "Tertiary Button",
    },
    render: ({ buttonText, ...args }) => {
        return <Button {...args}>{buttonText}</Button>
    }
}    