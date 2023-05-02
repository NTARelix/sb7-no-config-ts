import { StorybookConfig } from '@storybook/react-webpack5'

export default {
  framework: '@storybook/react-webpack5',
  addons: [
    '@storybook/addon-essentials',
    // '@storybook/preset-create-react-app',
  ],
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal(config) {
    console.log(JSON.stringify(config, undefined, 2))
    return config
  },
} as StorybookConfig
