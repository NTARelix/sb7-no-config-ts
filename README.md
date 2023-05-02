# Storybook 7 Upgrade Error Demo

This repo minimally demonstrates the resulting configuration of Storybook after having followed the [v6 to v7 migration notes](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#from-version-65x-to-700).

The repo holds React components written in TypeScript to be served by Webpack 5. Components' capabilities are demonstrated by Storybook stories.

You can test the failure by running `npm start` and noticing that the Webpack dev server dies with the error
```
ModuleBuildError: Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: /Users/ntarelix/sb7/no-config-ts/src/my-comp.tsx: Missing semicolon. (4:4)

  2 | import { ComponentProps } from 'react';
  3 | import { MyComp } from './my-comp'
> 4 | type Args = ComponentProps<typeof MyComp>;
    |     ^
  5 | export default ({
  6 |   title: 'Example Repo/MyComp',
  7 |   component: MyComp,
```
